function dividirAsync(a, b, callback) {
  setTimeout(() => {
    if (b === 0) {
      callback(new Error("No se puede dividir entre cero"), null);
    } else {
      callback(null, a / b);
    }
  }, 1500);
}

dividirAsync(10, 0, (err, res) => {
  if (err) return console.log(err.message);
  console.log(res);
});
