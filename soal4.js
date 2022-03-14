let regex = /(^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$)/

function isvalidPassword(email){
	if(typeof(email) == 'string'){
		// ini digunakan untuk mengetest atau mengecek apakah password sudah sesuai dengan format yang ada di regex atau belum
		let givenNUmber = regex.test(email)
		if(givenNUmber == true){
			return "VALID"
		} else{
			return "INVALID"

		}
	} else{
		return "password yang anda masukan tidak sesuai, mohon sesuai format"
	}
}

console.log(isvalidPassword())