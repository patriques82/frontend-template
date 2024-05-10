const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// TODO use fetch to get user with id from json-server
