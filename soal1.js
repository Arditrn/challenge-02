
let kalimat1 = " aku adalah seorang patriot"
let kalimat2 = " aku akan menjadi seorang patriot"

function changeWord(selectedText, changedText, text){
	// replace() digunakan untuk mengembalikan string dengan pengganti
	let hasilText  = text.replace(selectedText,changedText)
	return hasilText
}

// aku sebagai value dari selected text, saya sebagai value dari changedText dan kalimat1 sebagai parameter yang bertujuan menunjukan kalimat tersebut yang akan diganti
console.log(changeWord("aku","saya",kalimat1))
console.log(changeWord("patriot","programmer",kalimat2))
