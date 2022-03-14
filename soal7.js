const dataPenjualanPakAldi = [
	{
		namaProduk : 'Sepatu Futsal Nike Pavor Academy',
		hargaSatuan : '760000',
		kategori : 'Sepatu Sport',
		totalTerjual : 90,
	},
	{
		namaProduk : 'Sepatu Warior Tristan Black Brown High',
		hargaSatuan : '960000',
		kategori : 'Sepatu Sneaker',
		totalTerjual : 37,
	},
	{
		namaProduk : 'Sepatu Warior Trinstan Maroon High',
		hargaSatuan : '360000',
		kategori : 'Sepatu Sneaker',
		totalTerjual : 90,
	},
	{
		namaProduk : 'Sepatu Warior Rainbow Tosca Corduroy',
		hargaSatuan : '120000',
		kategori : 'Sepatu Sneaker',
		totalTerjual : 90,
	}
]




function HitungTotalPenjualan(params){
	let hitung = (params[0].totalTerjual + params[1].totalTerjual + params[2].totalTerjual + params[3].totalTerjual);
	return hitung
}	

console.log("Total Penjualan adalah " + HitungTotalPenjualan(dataPenjualanPakAldi))