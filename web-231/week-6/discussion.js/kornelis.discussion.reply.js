var pet = {
    animal: "cat",
    breed: "Maine Coon",
    color: "orange",
    age: "2",
    name: {
      firstName: "Billy",
      lastName: "Catlin"
    }
  };
  
  var oldPet = {
    animal: "cat",
    breed: "American Shorthair",
    color: "black",
    age: "10",
    name: {
      firstName: "Cheaka",
      lastName: "Choo"
    }
  }
  
  // Output
  // expected output "Billy is a orange Maine Coon who is 2."
  console.log (pet.name + pet.firstName + " is a " + pet.color + pet.breed + " who is " + pet.age + ".")
  
  // expected output "Cheaka is a black American Shorthair who is 10."
  console.log (pet.firstName + " is a " + pet.color + pet.breed + " who is " + pet.age + ".")
  