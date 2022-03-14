const dataPenjualanNovel = [
  {
    idProduct: 'BOOK002421',
    namaProduk: 'Pulang - Pergi',
    penulis: 'Tere Liye',
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: 'BOOK002351',
    namaProduk: 'Selamat Tinggal',
    penulis: 'Tere Liye',
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Garis Waktu',
    penulis: 'Fiersa Besari',
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: 'BOOK002941',
    namaProduk: 'Laskar Pelangi',
    penulis: 'Andrea Hirata',
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];


function getInfoPenjualan(params){


let totalDana
let untung
let data = []
let bukuLaris
let namaBuku
let penulis

// foreach digunakan untuk perulangan
params.forEach(items => {
  // .push untuk memasukan data kedalam array
  data.push(items.totalTerjual)
  totalDana = (items.hargaBeli*(items.sisaStok + items.totalTerjual))
  untung = ((items.hargaJual - items.hargaBeli) * items.totalTerjual)
 
  bukuLaris = Math.max.apply(Math, data)
})

  // mengeksekusi dan mengembalikan nilai apabila ditemukan elemen dari array
  params.find(items => {
    if(items.totalTerjual === bukuLaris){
      namaBuku = items.namaProduk
      penulis = items.penulis
    }
  })

  // menghitung persen dari total keuntungan
  let persenUntung = 0
  persenUntung = (untung / totalDana) * 100
  // untuk pembulatan angka desimal'
  persen = persenUntung.toFixed(1)


  // mengubah prototype array menjadi objek dengan membuat objek baru
  let obj = {
    totalModal: totalDana,
    totalKeuntungan: untung, 
    persentaseKeuntungan: persen,
    produkBukuTerlaris: namaBuku,
    penulisTerlaris: penulis
  } 

  return obj

}

console.log(getInfoPenjualan(dataPenjualanNovel))
