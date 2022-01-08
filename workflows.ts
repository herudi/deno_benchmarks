import { recursiveReaddir } from "https://deno.land/x/recursive_readdir@v2.0.0/mod.ts";
import { stringify as toYaml } from "https://deno.land/std@0.95.0/encoding/yaml.ts";

type TInfo = {
  name: string,
  run: string,
  lang: string,
  link: string,
  version: string,
  is_router: boolean
}

const infos: TInfo[] = (await recursiveReaddir("frameworks"))
  .filter((el) => el.endsWith("info.json"))
  .map(el => JSON.parse(Deno.readTextFileSync(el)));
let i = 0, len = infos.length, obj = {} as Record<string, any>;

function setupActionLang(name: string) {
  if (name.toLowerCase() === 'node') {
    return [
      {
        name: 'Setup nodejs',
        uses: 'actions/setup-node@v1',
        with: { 'node-version': '16' }
      },
      {
        name: 'Install Deps',
        run: 'npm ci'
      }
    ]
  }
  return [];
}

const stepsResults = [] as Record<string, any>[];
while (i < len) {
  const info = infos[i];
  stepsResults.push({
    name: 'Result ' + info.name,
    run: `echo '\${{needs.${info.name}.outputs.result}}' | jq . | tee \${{needs.${info.name}.outputs.result_path}}`
  })
  obj[info.name] = {};
  obj[info.name]['runs-on'] = 'macos-latest';
  obj[info.name]['outputs'] = {
    result_path: '${{ steps.result.outputs.result_path }}',
    result: '${{ steps.result.outputs.result }}'
  };
  obj[info.name]['steps'] = [
    {
      name: 'Checkout Repository',
      uses: 'actions/checkout@master'
    },
    {
      name: 'Setup Deno',
      uses: 'denoland/setup-deno@main'
    },
    {
      name: 'Setup wrk',
      run: 'brew install wrk'
    },
    ...setupActionLang(info.lang as string),
    {
      name: 'Start Bench',
      run: 'deno run -A bench.ts ' + info.name,
      "continue-on-error": true
    },
    {
      name: 'End Bench',
      id: 'result',
      run:
        `RESULT_PATH="results/${info.name}.json"
RESULT="$(cat results/${info.name}.json)"
echo "::set-output name=result_path::$RESULT_PATH"
echo "::set-output name=result::$RESULT"
`
    }
  ];
  i++;
}
const results = {
  "runs-on": "macos-latest",
  needs: Object.keys(obj),
  steps: [
    {
      name: 'Checkout Repository',
      uses: 'actions/checkout@master',
      with: {
        'persist-credentials': false,
        'fetch-depth': 0
      }
    },
    ...stepsResults,
    {
      name: 'Setup deno',
      uses: 'denoland/setup-deno@main'
    },
    {
      name: 'Setup readme',
      run: 'deno run -A ./helpers/readme.ts'
    },
    {
      name: 'Commit and push',
      uses: 'actions-js/push@master',
      with: {
        github_token: '${{ secrets.GITHUB_TOKEN }}',
        coauthor_email: 'bot@example.com',
        coauthor_name: 'bot_ci',
        branch: 'master'
      }
    },
  ]
} as Record<string, any>;
const myObj = {} as Record<string, any>;
myObj.name = 'bench';
myObj.on = {
  schedule: [{ cron: '0 0 * * *' }],
  push: { branches: 'master' }
};
myObj.jobs = {
  ...obj,
  results
};
await Deno.writeTextFile("./.github/workflows/bench.yml", toYaml(myObj))