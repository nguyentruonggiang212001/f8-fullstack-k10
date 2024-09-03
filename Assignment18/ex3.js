let e = 5;
let f = 10;
let g = 15;

let max;

if (e > f &&  e > g){
    max = e;
} else if(f > e && f > g){
    max = f;
} else {
    max = g;
}

console.log("Số lớn nhất là ", max);