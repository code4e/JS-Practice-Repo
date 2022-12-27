// console.log("Hello", varname);
// var varname = 110;
// console.log("Hey", varname);
// console.log(this);
// function fn(){
//     console.log("Hola", varname);
//     var varname = 20;
//     console.log("amigo", varname);
//     console.log(this);
//     var vname2 = 30;
   
//     b();
// }
// function b () {
//     console.log("Unos", varname);
//     console.log(this);
// }
// fn();

// console.log("Utos", varname);


// var a = 10;
// console.log("line number 24", a);
// function fn(){
//     console.log("line number 26", a);
//     var a = 20;
//     a++;
//     console.log("line number 29", a);
//     if(a){
//         var a = 30;
//         a++;
//         console.log("line number 33", a);
//     }
//     console.log("line number 35", a);
// }
// fn();
// console.log("line number 38", a);

let arr = [1, 2, 3, 4, 5];
arr.name = "Chaman";
arr.myFn = function(){
    console.log("Yo");
    console.log(this.name);
}

console.log(arr);

arr.myFn();
