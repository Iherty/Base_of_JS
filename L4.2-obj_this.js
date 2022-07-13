//'use strict'
// let user = {
//     name: 'Saglai',
//     hi() {
//         let he = () => {
//             return this.name;
//         };
//         return this.name;
//     },
// };

// let hi = user.hi;
// /* hi = hi() {
//     return this.name;
// } */
// name = 'GLOBAL';
// let he = user.he;
// console.log(he());
// console.log(user.he());

let user = {
    name: "Илья",
    sayHi() {
      let arrow = () => alert(this.name);
      arrow();
    }
};
  
//user.sayHi();
name =  'Saglai';
let hi = user.sayHi;
console.log(hi());