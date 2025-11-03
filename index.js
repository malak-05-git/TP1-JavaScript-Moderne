// index.js
import message, { PI, carre } from "./mathUtils.js";

// === Variables et portée ===
var x = 5;
let y = 10;
const z = 15;

try {
  x = 7;
  y = 12;
  z = 20; // erreur
} catch (err) {
  console.error("Erreur:", err.message);
}

function testScope() {
  if (true) {
    var a = "var visible partout";
    let b = "let visible ici seulement";
  }
  console.log(a);
  try {
    console.log(b);
  } catch {
    console.log("Erreur: b n'est pas défini ici");
  }
}
testScope();

// === Fonctions classiques et fléchées ===
function sayHello(name) {
  return `Bonjour ${name}`;
}
const sayHelloArrow = (name) => `Bonjour ${name}`;

console.log(sayHello("Sara"));
console.log(sayHelloArrow("Ali"));


// === Test de this ===
const person = {
  name: "Sara",
  sayHello: function () {
    console.log("Bonjour " + this.name);
  },
  sayHelloArrow: () => {
    console.log("Bonjour (arrow) sans this :", "this.name =", this?.name);
  }
}; // <== cette accolade est très importante !

person.sayHello();
person.sayHelloArrow();


// === Import / Export ===
message();
console.log("PI =", PI);
console.log("Carré de 5 =", carre(5));

// === Tableaux ===
const fruits = ["pomme", "banane", "orange"];
fruits.push("kiwi");
fruits.pop();
console.log("Fruits :", fruits);

const nums = [1, 2, 3, 4, 5];
console.log("x2 :", nums.map((n) => n * 2));
console.log("Pairs :", nums.filter((n) => n % 2 === 0));
console.log("Somme :", nums.reduce((sum, n) => sum + n, 0));

console.log("Premier >3 :", nums.find((n) => n > 3));
console.log("Y a-t-il un <0 ?", nums.some((n) => n < 0));
console.log("Tous >0 ?", nums.every((n) => n > 0));

// === Objets et déstructuration ===
const user = { id: 1, name: "Ali", city: "Rabat" };
const { name, city } = user;
console.log(`${name} habite à ${city}`);
const { name: fullName, ...rest } = user;
console.log(fullName, rest);

// === Promesse simple ===
const p = new Promise((resolve) => {
  setTimeout(() => resolve("Opération terminée !"), 2000);
});
p.then((result) => console.log(result));

// === async/await ===
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log("Utilisateurs récupérés :", data.length);
  } catch (e) {
    console.error("Erreur :", e.message);
  }
}
getUsers();

// === Template literals ===
const name2 = "Nadia";
const hour = new Date().getHours();
console.log(`Bonjour ${name2}, il est ${hour}h`);

// === Spread / Rest ===
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];
console.log(arr2);

function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("Somme totale:", sum(1, 2, 3, 4));

// === Optional chaining et Nullish coalescing ===
const settings = { theme: null };
console.log(settings.theme ?? "light");

const user2 = { profile: { email: "x@y.com" } };
console.log(user2.profile?.email);
console.log(user2.address?.city);
