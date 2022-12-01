//QUESTION NO-1:-

//The class Movie is stated below. An instance of class Movie represents a film.
//This class has the following three properties:

//=>title, which is a String representing the title of the movie.
//=>studio, which is a String representing the studio that made the movie.
//=>rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
//   a String representing the studio, and a String representing the rating as its arguments,
//   and sets the respective class properties to these values.

class Movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;

    //b) The constructor for the class Movie will set the class property rating to "PG" as default
    //   when no rating is provided.

    if (rating == undefined) {
      this.rating = "PG";
    } else {
      this.rating = rating;
    }
  }

  //c) Write a method getPG, which takes an array of base type Movie as its argument,
  //   and returns a new array of only those movies in the input array with a rating of "PG".
  //   You may assume the input array is full of Movie instances. The returned array need not be full.

  getPG(array) {
    var result = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i].rating == "PG") {
        result.push(array[i]);
      }
    }

    return result;
  }
}

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
//   the studio “Eon Productions”, and the rating “PG­13”.

var obj4 = new Movie("CASINO ROYALE", "EON PRODUCTIONS", "PG-13");
console.log(obj4);

//--------------------------------------------------------------------

var obj1 = new Movie("TITANIC", "7G STUDIO", "PG-13");
var obj2 = new Movie("BULLET TRAIN", "THE NEXT BIG THING");
var obj3 = new Movie("AVATAR", "MASTER MOTION PICTURES");
console.log(obj1, obj2, obj3, obj4);
console.log(obj2, obj3);
console.log(obj1.getPG([obj1, obj2, obj3, obj4]));

//---------------------------------------------------------------------------------------------------------------
//QUESTION NO-2:-

//Circle - Class
//Convert the UML diagram to Typescript class. - use number for double

class Circle {
  constructor(radius, color) {
    this.radius = radius;
    this.color = color;
  }
  get RadiusCircle() {
    return `THE RADIUS OF THE CIRCLE IS ${this.radius}`;
  }
  get colorCircle() {
    return `THE COLOR OF THE CIRCLE IS ${this.color}`;
  }
  set RadiusCircle(radius) {
    `THE NEW RADIUS OF THE CIRCLE IS ${(this.radius = radius)}`;
  }
  set colorCircle(color) {
    this.color = color;
  }
  get toString() {
    return `THE Circle IS [radius=${this.radius}, AND color=${this.color}]`;
  }
  get areaCircle() {
    return `THE AREA OF THE CIRCLE IS ${Math.PI * this.radius * this.radius}`;
  }
  get circumferenceCircle() {
    return `THE CIRCUMFERENCE OF THE CIRCLE IS ${2 * Math.PI * this.radius}`;
  }
}
var obj1 = new Circle(1.0, "RED");
console.log(obj1.RadiusCircle); //get
console.log(obj1.colorCircle); //get
console.log(obj1.toString); //get
console.log(obj1.areaCircle); //get
console.log(obj1.circumferenceCircle); //get
console.log((obj1.RadiusCircle = 3.0)); //set
console.log((obj1.colorCircle = "BLUE")); //set

//------------------------------------------------------------------------------------------------------------------
//QUESTION NO-3:-

//Write a “person” class to hold all the details:-

class Person {
  constructor(NAME, AGE, NUMBER, QUALIFICATION, EMAIL_ID, COURSE) {
    this.NAME = NAME;
    this.AGE = AGE;
    this.NUMBER = NUMBER;
    this.QUALIFICATION = QUALIFICATION;
    this.EMAIL_ID = EMAIL_ID;
    this.COURSE = COURSE;
  }
}
var person_details = new Person(
  "ARUN PRAVEEN R",
  25,
  8344236645,
  "BE-COMPUTER SCIENCE AND ENGINEERING",
  "arunfbfb78@gmail.com",
  "MERN STACK DEVELOPER"
);
console.log(person_details);

//------------------------------------------------------------------------------------------------------------------------------

//QUESTION NO-4:-

//write a class to calculate the uber price:-

class Uber_price {
  constructor(
    BASE_FARE,
    COST_PER_MINUTE,
    COST_PER_MILE,
    BOOKING_FEE,
    SURGE_FEE
  ) {
    this.BASE_FARE = BASE_FARE;

    this.COST_PER_MINUTE = COST_PER_MINUTE;

    this.COST_PER_MILE = COST_PER_MILE;

    this.BOOKING_FEE = BOOKING_FEE;

    this.SURGE_FEE = SURGE_FEE;
  }
  uberfare(TIME_OF_RIDE, RIDE_DISTANCE) {
    var fare =
      this.BASE_FARE +
      (this.COST_PER_MINUTE * TIME_OF_RIDE +
        this.COST_PER_MILE * RIDE_DISTANCE * this.SURGE_FEE) +
      this.BOOKING_FEE;
    return `THE FARE YOU HAVE TO PAY IS RS. ${fare}`;
  }
}
var object = new Uber_price(10, 3, 18, 5, 2);
console.log(object.uberfare((1 / 2) * 60, 5 * (5 / 8)));

//-----------------------------------------------------------------------------------------------------------------
