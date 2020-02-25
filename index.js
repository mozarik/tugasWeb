do {
  var bilangan1 = window.prompt("sometext", "Masukan angka kesatu");
  var bilangan2 = window.prompt("sometext", "Masukan angka kedua");
  var operator = window.prompt("sometext", "Masukan operator yang dimau");

  if (operator == "+") {
    var c = parseInt(bilangan1) + parseInt(bilangan2);
    window.alert("Hasil tambah adalah = " + c);
  } else if (operator == "-") {
    var c = parseInt(bilangan1) - parseInt(bilangan2);
    window.alert("Hasil kurang adalah = " + c);
  } else if (operator == "*") {
    var c = parseInt(bilangan1) * parseInt(bilangan2);
    window.alert("Hasil kali adalah = " + c);
  } else {
    var c = parseInt(bilangan1) / parseInt(bilangan2);
    window.alert("Hasil bagi adalah = " + c);
  }

  var result = window.confirm("Apakah mau lanjut gan?");
} while (result == true);
