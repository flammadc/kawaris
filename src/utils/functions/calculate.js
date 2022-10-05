// let dataWaris = {
//   uang: 10000000,
//   almarhum: "suami",
//   bapak: true,
//   ibu: true,
//   cucu: { pria: 2, perempuan: 3, total: 5 },
// };

// let hasilWaris = {
//   bapak: 0,
//   ibu: 0,
//   cucu: { pria: 0, perempuan: 0 },
// };

// const hitungWaris = () => {
//   if (dataWaris.almarhum == "suami") {
//     hasilWaris = {
//       bapak: dataWaris.bapak ? (1 / 6) * dataWaris.uang : 0,
//       ibu: dataWaris.ibu ? (1 / 6) * dataWaris.uang : 0,
//       pasangan:
//         dataWaris.almarhum === "istri"
//           ? dataWaris.cucu.total
//             ? (1 / 8) * dataWaris.uang
//             : (1 / 4) * dataWaris.uang
//           : dataWaris.cucu.total
//           ? (1 / 4) * dataWaris.uang
//           : (1 / 2) * dataWaris.uang,
//     };
//     const uangAshobah =
//       dataWaris.uang -
//       (hasilWaris.bapak + hasilWaris.ibu + hasilWaris.pasangan);

//     hasilWaris.cucu = {
//       pria: (dataWaris.cucu.pria / dataWaris.cucu.total) * uangAshobah,
//       perempuan:
//         (dataWaris.cucu.perempuan / dataWaris.cucu.total) * uangAshobah,
//     };
//   }
// };

// hitungWaris();
// console.log(hasilWaris);
