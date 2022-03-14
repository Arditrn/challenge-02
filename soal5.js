

function getSplitName(personName){

	// untuk melakukan ujicoba apakah kode dibawah akan berjalan atau tidak
	try{
	// split() digunakan untuk membagi array
	let givenNUmber = personName.split(" ")
	// .length digunakan untuk menghitung ada berapa string yang ada didalam array tersebut 
	let count = givenNUmber.length

		if(count > 3){
			return "ERROR"
		} else if(count == 3){
			let obj = {
			firstName : givenNUmber[0],
			middleName : givenNUmber[1],
			lastName : givenNUmber[2]
			}
			return obj
		} else if(count == 2){
			let obj = {
			firstName : givenNUmber[0],
			middleName : null,
			lastName : givenNUmber[1]
			}
			return obj
		} else if(count == 1){
			let obj = {
			firstName : givenNUmber[0],
			middleName : null,
			lastName : null
			}
			return obj
		} 
	// untuk melakukan eksekusi kode apabila terjadi kesalahan pada kode yang ada di dalam try
	} catch{
		return "ERROR"
	}
}

console.log(getSplitName(0))