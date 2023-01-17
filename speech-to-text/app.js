const colorText = document.querySelector('#color') 

window.addEventListener('load', () => {
	window.SpeechRecognition = window.webkitSpeechRecognition
	const recognition = new SpeechRecognition()
	
	recognition.lang = 'tr-TR'
	recognition.interimResults = true
	recognition.continuous = true
	recognition.start()
	
	recognition.addEventListener('result', e => {
		const color = e.results[e.results.length - 1][0].transcript.toLowerCase()
		colorText.style.color = 'black'

		if (color.includes('beyaz')) {
			document.body.style.background = 'white'
			colorText.innerHTML = 'Seçili Renk: Beyaz'
		} else if (color.includes('yeşil')) {
			document.body.style.background = 'green'
			colorText.innerHTML = 'Seçili Renk: Yeşil'
		}else if (color.includes('kırmızı')) {
			document.body.style.background = 'red'
			colorText.innerHTML = 'Seçili Renk: Kırmızı'
		} else if (color.includes('mavi')) {
			document.body.style.background = 'blue'
			colorText.innerHTML = 'Seçili Renk: Mavi'
		} else if (color.includes('siyah')) {
			document.body.style.background = 'black'
			colorText.innerHTML = 'Seçili Renk: Siyah'
			colorText.style.color = 'white'
		} else if (color.includes('sarı')) {
			document.body.style.background = 'yellow'
			colorText.innerHTML = 'Seçili Renk: Sarı'
		} else {
			document.body.style.background = 'white'
			colorText.innerHTML = 'Seçili Renk: Tanımlanamadı(Beyaz)'
		}
	})
})