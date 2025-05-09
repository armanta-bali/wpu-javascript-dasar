let items = prompt(`Masukan makanan atau minuman \n (contoh: nasi, daging, susu, hamburger, softdrink)`);

switch(items) {
  case "nasi":
  case "daging":
  case "susu":
    alert(`makanan atau minuman sehat`);
    break;
  case "humberger":
  case "softdrink":
    alert(`makanan atau miniman tidak sehat`);
    break;
  default:
    alert("Anda memasukan makanan atau minuman yang salah");
}
