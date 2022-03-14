

function checkTypeNumber(givenNUmber){

	// mengubah tipe data agar menjadi string menggunakan typeOf
	if(typeof(givenNUmber) == 'number'){	
		if(givenNUmber %2 == 0){
			return "GENAP"
		} else {
			return "GANJIL"
		}
	} else{
		return "Invalid data type"
	}
}

console.log(checkTypeNumber("3"))




