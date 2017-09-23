// pulling from server to get darthvader
let darthyRequest = new XMLHttpRequest();
darthyRequest.addEventListener("load", function(){
  let darthVader = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = darthVader.name;

  let planet = new XMLHttpRequest();
  planet.addEventListener("load", function(){
    let planetName = JSON.parse(this.responseText);
    document.getElementById("person4HomeWorld").innerHTML = planetName.name;
  });
  // second request
// passing in darthVader HomeWorld Object (which is a link) as assignment
  planet.open("GET", darthVader.homeworld);
  planet.send();
});
darthyRequest.open("GET", "http://swapi.co/api/people/4/");
darthyRequest.send();



let hanRequest = new XMLHttpRequest();
hanRequest.addEventListener("load", function(){
  let hanSolo = JSON.parse(this.responseText);
  document.getElementById("person14Name").innerHTML = hanSolo.name;

  let species = new XMLHttpRequest();
species.addEventListener("load", function(){
  let species = JSON.parse(this.responseText);
  document.getElementById("person14Species").innerHTML = species.name;
  });
  species.open("GET", hanSolo.species);
  species.send();
});
hanRequest.open("GET", "http://swapi.co/api/people/14/");
hanRequest.send();



function createList(input){
  var x = document.createElement("LI");
  var t = document.createTextNode(input);
  x.appendChild(t);
  document.getElementById("filmList").appendChild(x);
}



let filmsRequest = new XMLHttpRequest();
filmsRequest.addEventListener("load", function(){
  let sWFilms = JSON.parse(this.responseText).results;

  sWFilms.map(function(film){
    createList(film.title);
  });

 console.log(sWFilms.planets);

});
filmsRequest.open("GET", "http://swapi.co/api/films/");
filmsRequest.send();


