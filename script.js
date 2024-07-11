const rangeLabel = document.getElementById('range-label')
const rangeResult = document.getElementById('range-result')
const range = document.getElementById('range')

function update(provas) {
	const minutes = Math.round((provas) * 8.4)
	const hours = Math.floor(minutes / 60)
	const displayMinutes = Math.floor(minutes % 60)
	
	if (minutes >= 60) {
		stamp = "horas"
	}
	
	// gambiarra basica aqui kkkkk
	rangeResult.innerText = `${hours > 0 ? hours + " hora" : ""}${hours > 1 ? "s" : ""} ${hours > 0 ? " e " : ""} ${displayMinutes} minutos`
	rangeLabel.innerText = `Ao corrigir ${provas} ${provas > 1 ? "provas" : "prova"}, você economiza`
}

range.addEventListener('input', function(evt) {
	update(this.value)
});

update(1)