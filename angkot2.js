// pengulangan dengan while & for

let noAngkot = 1;
let angkotBeroperasi = 6;
let jmbAngkot = 10;

while(noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}

for(angkotBeroperasi = 6; angkotBeroperasi <= jmbAngkot; angkotBeroperasi++) {
  console.log(`Angkot No. ${angkotBeroperasi} sedang rusak`);
}
