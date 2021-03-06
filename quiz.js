$(document).ready(function() {
// Do NOT modify the HTML document manually!!!!

// Question 1
// Use jQuery to add two more elements to the the UL in the 'question-1' div
$('#question-1 ul').append('<li>' + "Pigs" + '</li>');
$('#question-1 ul').append('<li>' + "Birds" + '</li>');
// Question 2
// Add a click event handler to the paragraph in the 'question-2' div
// which triggers a method called 'alertClicked',
// which will display an alert with the text of "Question 2 Success".

var alertClicked = function() {
  alert("Question 2 Success");
};
$('#question-2').click(alertClicked);

// Question 3
// Why won't the following code make clicking on anything the 'question-3' div
// invoke the alertClicked method?

$('#question-3').on('click', alertClicked);
// don't understand the question, my click on Q3 DOES trigger alertClicked()

// Question 4
// Make the HTML in the 'question-4' div fade out when you hover over it,
// and fade back in when you move your mouse away from it
var fadeOut = function() {
  $(this).hide('slow');
}

$('#question-4').hover(fadeOut);

// Question 5
// Make question 5's h2 turn blue when someone types 'winning'
// in its input element and hits enter
var turnBlue = function() {
  if ($(this).val() === 'winning') {
    $('h2').addClass('blue'); // i do not see however how to target 5's h2 only
  } else {
  }
}
$('#q-5-input').change(turnBlue);

// Question 6
// Add a method to the String prototype called 'reverse'
// which will return the string reversed.
// You should be able to run 'foo'.reverse() and get 'oof'
// Use this method to reverse the text in the h2 in the 'question-6' div
String.prototype.reverse = function() {
  str = this;
  str1 = str.split("").reverse().join("");
  return str1;
}

str = "foo";
console.log(str.reverse());


// Question 7
// Write a method called 'highLightHeaders' that will add a class of 'highlight'
// to all h2's when it is invoked
var highLightHeaders = function() {
  $('h2').addClass('highlight');
}

// Question 8
// Define a constructor function called `Cat`,that accepts a `name`,
// an `age`, and a `color`, and stores these values as properties.

var Cat = function(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
}

// Question 9
// Add a function called `description` to the `Cat` prototype that returns a string
// describing the cat in this format: "<name> is a <age>-year-old <color> cat."

Cat.prototype.description = function() {
  return name + " is a " + age + " year old " + color + " cat.";
};

// Question 10
// Use the methods of .map and .reduce to return the
// sum the prices of the objects in the array below.
// Do *not* use a for loop

var items = [
  {name: 'iPhone 5c', price: 99.99},
  {name: 'iPhone 5s', price: 149.99},
  {name: 'iPhone 6', price: 249.99},
  {name: 'iPhone 6 plus', price: 399.99}
];




});
