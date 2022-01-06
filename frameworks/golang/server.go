package main

import (
  "encoding/json"
  "log"
  "net/http"
)

func handleRequest(w http.ResponseWriter, r *http.Request) {
  w.Header().Set("Content-Type", "application/json; charset=utf-8")
  resp := make(map[string]string)
	resp["name"] = "bench"
  jsonResp, err := json.Marshal(resp)
	if err != nil {
		log.Fatalf("Error happened in JSON marshal. Err: %s", err)
	}
	w.Write(jsonResp)
	return
}

func main() {
  http.HandleFunc("/", handleRequest)
  if err := http.ListenAndServe(":8000", nil); err != nil {
    log.Fatal(err)
  }
}