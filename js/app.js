//

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
darthyRequest.open("GET", "https://swapi.co/api/people/4/");
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
hanRequest.open("GET", "https://swapi.co/api/people/14/");
hanRequest.send();






let filmsRequest = new XMLHttpRequest();
filmsRequest.addEventListener("load", function(){
  let films = JSON.parse(this.responseText).results;
  console.log("Films: ");
  console.log(films);
  for(let i = 0; i < films.length; i++){
    createListFilm(films[i].title);

    let planetURLS = films[i].planets;

    for(let j = 0; j < planetURLS.length; j++){
    let planetsRequest = new XMLHttpRequest();
    planetsRequest.addEventListener("load", function(){
      let planets = JSON.parse(this.responseText);
      createListPlanet(planets.name);
      });

      planetsRequest.open("GET", planetURLS[j]);
      planetsRequest.send();
    }

  }
});
filmsRequest.open("GET", "https://swapi.co/api/films/");
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