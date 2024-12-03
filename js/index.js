let age = 25;
console.log(age);

let name = "Іван";
console.log(name);

let isStudent = true;
console.log(isStudent);

let myString = "Будь ласка, дайте мені знати, якщо у вас є питання.";
console.log(myString);

let myNumber = 5;
myNumber += 10;
console.log(myNumber);

let myNull = null;
console.log(myNull);

let userName = prompt("Введіть ваше ім'я:");
alert("Привіт, " + userName + "!");

if (confirm("Ви підтверджуєте дію?")) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}

alert("Ця дія небезпечна! Підтверджуєте її?");
if (confirm("Ви підтверджуєте дію?")) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
