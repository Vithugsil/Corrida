var button = document.getElementById('startStopButton');
var roadSize = document.getElementById('road').offsetWidth;
var globalSpeed = 0;
var isStoped = true;
var load = document.getElementById('loadLimit');

function startRace() {
    var selectedCar = document.getElementById('selectedCar');

    let uno = document.getElementById('uno');
    let marea = document.getElementById('marea');
    let renegade = document.getElementById('renegade');
    let fusca = document.getElementById('fusca');
    let veloster = document.getElementById('veloster');

    isStoped = !isStoped;
    selectedCar.disabled = !selectedCar.disabled;

    let Interval = setInterval(
        () => {

            if (!isStoped) {

                if (globalSpeed < (roadSize - 74)) {
                    globalSpeed += 10;

                    if (selectedCar.value == 'uno') {
                        let unoSpeed = 0;
                        unoSpeed += (globalSpeed + 20);

                        uno.style.left = unoSpeed + 'px';
                        marea.style.left = globalSpeed + 'px';
                        renegade.style.left = globalSpeed + 'px';
                        fusca.style.left = globalSpeed + 'px';
                        veloster.style.left = globalSpeed + 'px';
                    }
                    if (selectedCar.value == 'marea') {
                        let mareaSpeed = 0;
                        mareaSpeed += (globalSpeed + 20);
                        marea.style.left = mareaSpeed + 'px';
                        uno.style.left = globalSpeed + 'px';
                        renegade.style.left = globalSpeed + 'px';
                        fusca.style.left = globalSpeed + 'px';
                        veloster.style.left = globalSpeed + 'px';
                    }
                    if (selectedCar.value == 'renegade') {
                        let renegadeSpeed = 0;
                        renegadeSpeed += (globalSpeed + 20);
                        renegade.style.left = renegadeSpeed + 'px';
                        uno.style.left = globalSpeed + 'px';
                        marea.style.left = globalSpeed + 'px';
                        fusca.style.left = globalSpeed + 'px';
                        veloster.style.left = globalSpeed + 'px';
                    }
                    if (selectedCar.value == 'fusca') {
                        let fuscaSpeed = 0;
                        fuscaSpeed += (globalSpeed + 20);

                        fusca.style.left = fuscaSpeed + 'px';
                        uno.style.left = globalSpeed + 'px';
                        marea.style.left = globalSpeed + 'px';
                        renegade.style.left = globalSpeed + 'px';
                        veloster.style.left = globalSpeed + 'px';
                    }
                    if (selectedCar.value == 'veloster') {
                        let velosterSpeed = 0;
                        velosterSpeed += (globalSpeed + 20);

                        veloster.style.left = velosterSpeed + 'px';
                        uno.style.left = globalSpeed + 'px';
                        marea.style.left = globalSpeed + 'px';
                        renegade.style.left = globalSpeed + 'px';
                        fusca.style.left = globalSpeed + 'px';
                    }
                }
                else {
                    button.innerHTML = button.innerHTML === 'Stop' ? 'Reload' : button.innerHTML;
                    button.style.background = button.innerHTML === 'Reload' ? 'yellow' : button.style.background;
                }

            }
        }
        , 50
    )

    if (button.style.background == 'yellow' && button.innerHTML == 'Reload') {
        globalSpeed = 0;
        veloster.style.left = '0px';
        uno.style.left = '0px';
        marea.style.left = '0px';
        renegade.style.left = '0px';
        fusca.style.left = '0px';
        clearInterval(Interval);
    }

}

function toggletext() {
    var button = document.getElementById('startStopButton');
    button.innerHTML = button.innerHTML === 'Start' ? 'Stop' : 'Start';
    button.style.background = button.innerHTML === 'Start' ? 'green' : 'tomato';
}

function loadVerifier() {
    let inputValue = Number(document.getElementById("betInput").value);
    let loadLimit = 1000.00
    if (inputValue > loadLimit) {
        alert("Load limit exceeded");
        location.reload();
    }
    else {
        loadLimit -= inputValue;
        load.innerHTML = 'R$' + `${loadLimit}`
    }

}

