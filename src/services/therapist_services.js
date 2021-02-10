export function get_all_therapists() {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", "http://127.0.0.1:8000/therapists/profiles/", false);
  xmlhttp.send();

  return JSON.parse(xmlhttp.responseText);
}

export function get_therapist(id) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.open(
    "GET",
    "http://127.0.0.1:8000/therapists/profiles/" + id.toString(),
    false
  );
  xmlhttp.send();

  return JSON.parse(xmlhttp.responseText);
}
