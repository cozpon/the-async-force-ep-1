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
  console.log(hanSolo);
  document.getElementById("person14Name").innerHTML = hanSolo.name;


  let species = new XMLHttpRequest();
species.addEventListener("load", function(){
  let species = JSON.parse(this.responseText);
  console.log(species);
  document.getElementById("person14Species").innerHTML = species.name;
});
  species.open("GET", hanSolo.species);
  species.send();

});

hanRequest.open("GET", "http://swapi.co/api/people/14/");
hanRequest.send();









//darth vader home world

// oReq2.homeWorld = function(){
//   var planet = JSON.parse(this.responseText);
//   document.getElementById("person4HomeWorld").innerHTML = planet.homeworld;
// };

// oReq2.open("GET", "http://swapi.co/api/planets/1/");
// oReq.send();





// var person4Section = document.getElementById('person4');
// var person4Name = document.getElementById('person4Name');
// var person4HomeWorld = document.getElementById('person4HomeWorld');


// function reqListener () {
//   var person4 = JSON.parse(this.responseText);
//   //console.log(test.name);
//   person4Section.innerHTML = person4.name;

// }

// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/people/4/");
// oReq.send();






// // han solo
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/people/14/");
// oReq.send();

// films
// var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
// oReq.open("GET", "http://swapi.co/api/films/");
// oReq.send(document.getElementById(films));

