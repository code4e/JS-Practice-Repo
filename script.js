// function Person(name) {
//   this.name = name;
//   }
//   var p1 = new Person("Joy");
//   var p2 = new Person("Julie");
//   Person.prototype.getName = function() { return this.name };
//   console.log(p1.getName() + " is friend with " + p2.getName());
  

// console.log("start");
const p = new Promise((resolve, reject) => {
  reject("succ")
});

p.then((res) => {console.log("Result:" + res); return res}).then(res => console.log("sucess 1")).catch(err => {throw err; return "rre";}).then(res => console.log(res));

// console.log("end");