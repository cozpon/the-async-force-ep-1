// pulling from server to get darthvader
let darthyRequest = new XMLHttpRequest();
darthyRequest.addEventListener("load", function(){
  let darthVader = JSON.parse(this.responseText);
  document.getElementById("person4Name").innerHTML = darthVader.name;
  console.log(darthVader.homeworld, "DARTH HOME");

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
  console.log(hanSolo.species);
  species.send();
});
hanRequest.open("GET", "http://swapi.co/api/people/14/");
hanRequest.send();






let filmsRequest = new XMLHttpRequest();
filmsRequest.addEventListener("load", function(){
  let films = JSON.parse(this.responseText).results;
  films.map(function(movie){
    createListFilm(movie.title);// <-- attaching to HTML
  });
  let planetsRequest = new XMLHttpRequest();

  let planets = JSON.parse(this.responseText);
  // THIS GIVES ME EACH PLANETS LINK
  films[0].planets.forEach(function(planetLink){
    createListPlanet(planetLink);
    console.log(planetLink);
     });
    planetsRequest.open("GET", films[0].planets[0]);
    planetsRequest.send();

});
filmsRequest.open("GET", "http://swapi.co/api/films/");
filmsRequest.send();



function createListFilm(input){
  var x = document.createElement("LI");
  var t = document.createTextNode(input);
  x.appendChild(t);
  document.getElementById("filmList").appendChild(x);
}

function createListPlanet(input){
  var x = document.createElement("LI");
  var t = document.createTextNode(input);
  x.appendChild(t);
  document.getElementById("planetList").appendChild(x);
}