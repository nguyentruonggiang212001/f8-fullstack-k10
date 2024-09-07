let soCanKiemTra = parseInt(prompt("Nhập số cần kiểm tra: "));
if (isNaN(soCanKiemTra)) {
  alert("Vui lòng nhập một số hợp lệ.");
} else {
  function checkInt(n) {
    if (n < 2) {
      return false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (checkInt(soCanKiemTra)) {
    alert(soCanKiemTra + " là số nguyên tố.");
  } else {
    alert(soCanKiemTra + " không phải là số nguyên tố.");
  }
}
