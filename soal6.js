
var dataNumbers = [2,3,5,6,6,4] 

function getAngkaTerbesarKedua(dataNumbers){
	// filter digunakan untuk mencari elemen didalam yang sama
	// indexof digunakan untuk menghapus elemen yang sama didalam array
	return dataNumbers.filter((item,index) => dataNumbers.indexOf(item) === index)
}


var dataNumbers1 = getAngkaTerbesarKedua(dataNumbers)
	// sort digunakan untuk mengurutkan nilai / elemen didalam array
	dataNumbers1.sort(function(a,b){
		// disini yaitu untuk menemukan elemen dengan nilai tertinggi
		return b-a
});

console.log("Angka terbesar ke 2 nya adalah = " + dataNumbers1[1])
