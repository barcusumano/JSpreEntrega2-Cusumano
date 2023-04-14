// Course price
let teenCoursePrice = 500;
let adultCoursePrice = 700;

//Objeto
class Course{
    constructor (courseName, minAge, maxAge, price){
      this.courseName= courseName;
      this.minAge= minAge;
      this.maxAge= maxAge;
     this.price= price;
    }
}

const teenYogaCourse= new Course ("Teen Yoga Course", 10, 18, 500);
const adultYogaCourse= new Course ("Adult Yoga Course", 18, 40, 700);

//Array

const arrayCourses = [teenYogaCourse, adultYogaCourse]

// Name prompt
let fullName = prompt("Welcome to our yoga course website! Please enter your full name:");

// Age prompt 
let age;

function askForAge() {
  do {
    age = parseInt(prompt("How old are you?:"));
    if (isNaN(age) || age <= 0) {
      alert('Please enter a valid age');
    }
  } while (isNaN(age) || age <= 0);
  
  return age;
}

askForAge();

// .forEach 

let courseForYou = null;

arrayCourses.forEach(course => {
  if (age >= course.minAge && age <= course.maxAge) {
    courseForYou = course;
  }
});

//Price difference
let result = 0;
function priceDif(a, b) {
  result = a - b;
}
priceDif (adultCoursePrice, teenCoursePrice)


// Email Prompt
let email = prompt("Please enter your email address:");
let confirmEmail = prompt("Please confirm your email address:");



// Email verification
if (email === confirmEmail) 
  // courseForYou
  if (courseForYou) {
    let yesPlease = prompt("Hello " +fullName+", you are eligible for our " +courseForYou.courseName + ". Would you like to know the price? (yes/no)");
    if (yesPlease.toLowerCase() === "yes") {
      let payment = 0;
      while (payment < courseForYou.price) {
        payment = parseFloat ( prompt("Thank you for your interest, " +fullName+ "! The price of the "+courseForYou.courseName+" is " +courseForYou.price+ " euros and there's " + result + " euros difference with our other course. How much money are you going to pay?"));
        if (payment > courseForYou.price) {
          let change = payment - courseForYou.price;
          alert("Thank you, " +fullName+ "! Your payment of " +payment+ "euros has been received. Your change is " +change+ " euros. See you soon!");
        } else if (payment == courseForYou.price) {
          alert("Thank you," +fullName+ "! You have entered the exact amount. See you soon!") 
        } else {
          let remainingAmount = courseForYou.price - payment;
          alert("Sorry, "+fullName+". The amount you entered is not enough by a difference of "+remainingAmount+". Please enter an amount equal or higher than the course price");
        }
      }
    } else {
      alert("Nevermind then. Thank you for visiting our website. Have a great day!");
    }
  }else {
      alert("Sorry, there are no courses available for your age group."); 
} else {
  alert("Emails don't match");}

