//pengulangan dengan for dan pengkondisian if
let angkotBeroperasi = 6;
let jumlahAngkot = 10;

for(let nomorAngkot = 1; nomorAngkot <= jumlahAngkot; nomorAngkot++) {
  if(nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
  }
  else {
    console.log(`Angkot No. ${nomorAngkot} sedang rusak.`);
  }
}
