// pengulangan dengan while & for

let noAngkot = 1;
let angkotBeroperasi = 6;
let jmbAngkot = 10;

while(noAngkot <= angkotBeroperasi) {
  console.log(`Angkot No. ${noAngkot} beroperasi dengan baik.`);
  noAngkot++;
}

for(noAngkot = angkotBeroperasi + 1; noAngkot <= jmbAngkot; noAngkot++) {
  console.log(`Angkot No. ${noAngkot} sedang rusak`);
}
