window.onload = () => {
    const getSeconds = document.getElementById('seconds')
    const getTens = document.getElementById('tens')
    const btnStart = document.getElementById('button-start')
    const btnStop = document.getElementById('button-stop')
    const btnReset = document.getElementById('button-reset')

    let seconds = 00
    let tens = 00
    let Interval = 0

    btnStart.addEventListener('click', () => {
        clearInterval(Interval)
        Interval = setInterval(startTimer, 10)
    })
    btnStop.addEventListener('click', () => {
        clearInterval(Interval)
    })
    btnReset.addEventListener('click', () => {
        clearInterval(Interval)
        tens = "00"
        seconds = "00"
        getSeconds.innerHTML = seconds
        getTens.innerHTML = tens
    })

    function startTimer() {
        tens++
        if (tens <= 9) {
            getTens.innerHTML = "0" + tens
        }
        if (tens > 9) {
            getTens.innerHTML = tens
        }
        if (tens > 99) {
            seconds++
            getSeconds.innerHTML = "0" + seconds
            tens = 0
            getTens.innerHTML = "0" + 0
        }
        if (seconds > 9) {
            getSeconds.innerHTML = seconds
        }

    }




}