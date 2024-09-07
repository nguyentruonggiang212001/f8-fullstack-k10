function printMultiplicationTable() {
  for (let x = 1; x <= 10; x++) {
    console.log(`Bảng cửu chương ${x}:`);
    for (let y = 1; y <= 10; y++) {
      console.log(`${x} x ${y} = ${x * y}`);
    }
  }
}
printMultiplicationTable();
