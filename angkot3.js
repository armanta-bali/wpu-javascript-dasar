//pengulangan dengan for dan pengkondisian if
let angkotBeroperasi = 6;
let jumblahAngkot = 10;

for(nomorAngkot = 1; nomorAngkot <= jumblahAngkot; nomorAngkot++) {
  if(nomorAngkot <= angkotBeroperasi) {
    console.log(`Angkot No. ${nomorAngkot} beroperasi dengan baik.`);
  }
  else {
    console.log(`Angkot No. ${nomorAngkot} sedang rusak.`);
  }
}
