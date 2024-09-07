function calcTotal(n) {
  if (isNaN(n)) {
    alert("Vui lòng nhập một số nguyên.");
  } else {
    let S = 0;
    for (let i = 1; i <= n; i++) {
      S += i * (i + 1);
    }
    alert(`n là ${n} thì Tổng S = 1*2 + 2*3 + 3*4 + ... + n*(n+1) là: ${S}`);
  }
}
let n = parseInt(
  prompt("Nhập giá trị của n: để tính Tổng S = 1*2 + 2*3 + 3*4 + ... + n*(n+1)")
);
calcTotal(n);
