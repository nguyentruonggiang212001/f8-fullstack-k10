let j = 7;
let k = 9;
let l = 8;

if (j > k) {
  [j, k] = [k, j];
}
if (j > l) {
  [j, l] = [l, j];
}
if (k > l) {
  [k, l] = [l, k];
}

console.log("Số theo thứ tự tăng dần là:", j, k, l);
