
const elementoChute = document.getElementById("chute")

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'

recognition.start()

recognition.addEventListener('result', onSpeech)

function onSpeech(e){
    let chute = e.results[0][0].transcript
    exibeChuteNaTela(chute)
    verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
        <div>Você disse</div>
        <span class="box">${chute}<span>    
    `
}

recognition.addEventListener('end', () => recognition.start())
