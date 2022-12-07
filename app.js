// create dino constructor
class Dinos {
  constructor(species, weight, height, diet) {
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
  }
}

// save dino objects in an array
const dinos = [];

// save facts in an array
const facts = [];

// Create Dino Objects
fetch("dino.json")
  .then((res) => res.json())
  .then((res) => {
    const dinosObj = res.Dinos;

    dinosObj.forEach((dino) => {
      const createDino = new Dinos(
        dino.species,
        dino.weight,
        dino.height,
        dino.diet
      );

      // push the created object to dinos array
      dinos.push(createDino);

      // push each fact array to facts array
      facts.push([dino.fact]);
    });
  });

// a function returns human object when the form is submitted
const human = () => {
  // get the data from the form and assign them to human object
  const humanName = document.getElementById("name").value;
  const humanFeet = document.getElementById("feet").value;
  const humanInches = document.getElementById("inches").value;
  const humanWeight = document.getElementById("weight").value;
  const humanDiet = document.getElementById("diet").value;

  // calculate the height of the human
  const humanHeight = +humanFeet * 12 + +humanInches;

  return {
    name: humanName,
    height: humanHeight,
    weight: humanWeight,
    diet: humanDiet,
  };
};

console.log(dinos); // I get the objects in array here
console.log(dinos[0]); // but trying to get any of them, give me undefiend

// Create Dino Compare Method 2

// Create Dino Compare Method 3

// Generate Tiles for each Dino in Array

// Add tiles to DOM

// Remove form from screen

// On button click, prepare and display infographic
