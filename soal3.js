
let regex = /([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)/

function checkEmail(email){
	if(typeof(email) == 'string'){

		// ini digunakan untuk mengetest atau mengecek apakah email sudah sesuai dengan format yang ada di regex atau belum
		let validate = regex.test(email)
		if(validate == true){
			return "VALID"
		} else{
			return "INVALID"
		}
	} else{
		return "Alamat Email yang anda masukan tidak sesuai, mohon sesuai format"
	}
}

console.log(checkEmail())

