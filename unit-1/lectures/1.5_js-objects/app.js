/*********************************
  NOTES
*********************************/
// There are built in object like Math, but you can create your own objects using curly braces.
// Object properties are similar to elements in an array except they are made up of two items (key and value) called key:value pairs.
// Keys must be a string or symbol and acts as an identifier for the property.
// If you type "this" in chrome devtools it refers to the Window object. If you expand the drop-down you will see a series of functions (f) or objects ({}).
// Object literal notation is setting a curly brace to a variable. To add to an object you would do objectName.propertyName = 45;

// ? const myColorsArray = ["blue", "green", "red"];
// ? console.log(myColorsArray[1]); // green

/*********************************
  Built-In Objects
*********************************/
// ? Math.floor / max / min / round / random;
// ? Window.name

/*********************************
  Object Syntax
*********************************/
const student = {
  fullName: "Van Wilder",
  age: 18,
  isGrad: false,
  school: "General Assembly",
  // Can use this keyword because function declaration.
  greeting: function () {
    console.log(`Hello, my name is ${this.fullName}.`);
  }, // Same as function () greeting
  cry: () => {
    console.log("😢");
  },
  birthday: function () {
    this.age++;
  },
};

console.log(`The student object: ${student}`); // The full object
console.log(`The name of the student is: ${student.fullName}`); // Van Wilder
console.log(`The age of the student is: ${student.age}`);
console.log(`The school attended is: ${student.school}`);

// Less common, but you can use square bracket notation with objects. Usually this is done when the key is multiple words with a space.
console.log(student["fullName"]);

// Demoing how HTML elements are represented by objects in JS (Document Object Model (DOM)).
const header = document.querySelector("h1");
console.log(header.innerText);
console.log(header);

/*********************************
  Object Manipulation
*********************************/
const music = {};
console.log(typeof music); // object

// Add title property to music object.
music.title = "Rock";
console.log(music);

// When adding number properties that you want to edit usually you add a number to it because you won't know what the current value is.
music.volume = 10;
console.log(music);
// Add or increase volume.
music.volume += 5;
console.log(music);

// Deleting a property you use the delete keyword followed by the objectName.propertyName.
delete music.volume;
console.log(music);

/*********************************
  Add Functionality to Objects
*********************************/
// Added function with a console log for greeting to student object.
console.log(student);
// Call the function similar to object dot notation, but add parenthesis to end.
student.greeting();
student.cry();
student.birthday();
console.log(student);

// Add functionality to student object.
// Change default isGrad property to true using a function.
student.graduationCeremony = function () {
  console.log(`🎈 Congratulations!`);
  // ? this.isGrad = true;
  student.isGrad = true;
};
student.graduationCeremony();
console.log(student);

/*********************************
  Nested Objects
*********************************/
const gaStudents = {
  student1: "Evan",
  student2: "Terick",
  student3: "Pablo",
};

// Add nested properties to object.
gaStudents.student1 = {
  name: "Evan",
  hobbies: ["fishing", "hiking", "camping"],
};

console.log(gaStudents);
console.log(gaStudents.student1);
console.log(gaStudents.student1.hobbies[1]);
