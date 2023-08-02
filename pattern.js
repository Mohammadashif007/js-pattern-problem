// 1. Squire star pattern

// let n = 5;
// let string = "";

// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string);


// 2. Hollow squire pattern

// let n = 5;
// let string = "";
// for(let i = 0; i < n; i++){
//     for(let j = 0; j < n; j++){
//         if(i == 0 || i == n-1){
//             string += "*";
//         }
//         else {
//             if(j == 0 || j == n-1){
//                 string += "*";
//             }
//             else {
//                 string += " ";
//             }
//         }
//     }
//     string += "\n";
// }
// console.log(string)


// 3. Right triangle pattern 

// let n = 5;
// let string = "";
// for(let i = 0; i < n; i++){
//     for(let j = 0; j <= n- i; j++){
//         string += " ";
//     }
//     for(let k = 0; k <=i; k++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string)


// 4. Left triangle pattern 

// let n = 5;
// let string = "";
// for(let i = 0; i < n; i++){
//     for(let j = 0; j <= i; j++){
//         string += "*";
//     }
//     string += "\n";
// }

// console.log(string);

// 5. Downward triangle star pattern 

let n = 5;

let string = "";
for(let i = 0; i < n; i++){
    for(let j = 0; j < n -i; j ++){
        string += "*";
    }
    string += "\n";
}

console.log(string)


