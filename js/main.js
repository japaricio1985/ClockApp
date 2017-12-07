function checkTime(i){
	if (i < 10) {
			i = "0" + i
		}

	return i
}

function startTime() {
	var currentTime = new Date()

	var hour = currentTime.getHours()
	var minute = currentTime.getMinutes()
	var second = currentTime.getSeconds()

	if (hour > 12) {
		hour = hour - 12;
	}
	
	hour = checkTime(hour)
	minute = checkTime(minute)
	second = checkTime(second)

	document.getElementById('min').textContent = minute
	document.getElementById('hrs').textContent = hour
	document.getElementById('sec').textContent = second

	setTimeout(function () {
		startTime()
	}, 1000)
}

document.getElementById('min').addEvenListener('onload', startTime(), false)
document.getElementById('hrs').addEvenListener('onload', startTime(), false)
document.getElementById('sec').addEvenListener('onload', startTime(), false)


