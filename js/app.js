// pulling from server to get person object
function reqListener (){
  console.log(this.responseText);
}


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "http://swapi.co/api/people/4/");


oReq.send();