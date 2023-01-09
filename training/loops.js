// // The famous for loop : GENERALY USED WHEN THE NUMBER OF ITTERATIONS IS KNOWN :

// for (let i = 0; i <= 10; i++) {
//   if (i === 7) {
//     console.log("7 is my favourite number ");
//     continue;
//   }
//   if (i === 9) {
//     console.log("we reached 9 ...let's Stop this loop");
//     break;
//   }
//   console.log("Number : " + i);
// }
// // THE WHILE LOOP : WHEN YOU DON'T KNOW HOW MANY TIMES ...
// let i = 0; // intialisation of the loop:
// while (i < 13) {
//   //condition just after the while
//   console.log("Number : " + i); // the return
//   i++; // the incrementation at the end
// }

// // DO WHILE LOOOOP : ALWAYS RUN NO MATTER WHAT
// let x = 100; // int...

// do {
//   // first the return wanted :
//   console.log("Number : " + x); //return
//   x++; // increment
//   //the do block would run even if the condition is not met
// } while (x < 12); // condition

// // Looping throug Arrays : really usefull :
// const cities = [
//   "Paris",
//   "Madrid",
//   "Berlin",
//   "Rabat",
//   "New York",
//   "Tenerife",
//   "Bagdad",
// ];
// cities.sort();

// for (let c = 0; c < cities.length; c++) {
//   console.log(cities[c]);
// }

// //FOR EACH METHOD : CLEAN AND USEFULL:
// cities.forEach(function (city, index, array) {
//   // single
//   console.log(city);
//   console.log(`${index} : ${city}`);
// });

// // MAP :
// const users = [
//   { id: 1, name: "Wika" },
//   { id: 2, name: "Laura" },
//   { id: 3, name: "Maya" },
//   { id: 4, name: "Elsa" },
//   { id: 5, name: "Sarah" },
// ];
// const ids = users.map(function (user) {
//   return user.id;
// });

// console.log(ids);

// // FOR IN : MOST USED IN OBJECTS :

// const wika = {
//   firstName: "Wika Diana",
//   lastName: "Baqouffa",
//   age: 36,
//   nationality: "Polish",
//   boobsSize: "80 D",
// };

// for (let x in wika) {
//   console.log(x);
//   console.log(`${x} : ${wika[x]}`);
// }
