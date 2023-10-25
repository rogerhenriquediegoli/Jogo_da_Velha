var numClicks = 0
var modoJogo = document.getElementById('select-mode-game')
var status_jogador = document.getElementById('text-status-game')
var positionsX = []
var positionsO = []
var controlJogada = false
//Math.random() * (max - min) + min
function clickTd(id){
        if(numClicks != -1){
            let fieldElement = document.getElementById(`td${id}`)
            switch (modoJogo.value) {
                case "mode-easy":
                    let numRandom = 0
                    while (true){
                        numRandom = Math.trunc(Math.random() * (8 - 0) + 0)
                        let element = document.getElementById(`td${numRandom}`)
                        if(numRandom != id && element.innerHTML == ""){
                            break;
                        }else if(positionsX.length == 4){
                            break;
                        }
                    }   
                    let fieldElementRandom = document.getElementById(`td${numRandom}`)
                        if(fieldElement.innerHTML == "" && numClicks != -1 && controlJogada == false){
                            controlJogada = true
                            let imageX = document.createElement('img')
                            imageX.src = 'images/simbol-x.png'
                            fieldElement.appendChild(imageX)
                            status_jogador.innerHTML = `Vez do <strong>O</strong>`
                            positionsX.push(id)
                            numClicks++
                            endGame()
                        }
                        setTimeout(() => {
                            if(fieldElementRandom.innerHTML == "" && numClicks != -1 && controlJogada == true){
                                controlJogada = false
                                let imageO = document.createElement('img')
                                imageO.src = 'images/simbol-o.png'
                                fieldElementRandom.appendChild(imageO)
                                status_jogador.innerHTML = `Vez do <strong>X</strong>`
                                positionsO.push(numRandom)
                                numClicks++
                                endGame()
                            }
                        }, 1000);
                    break;
                case "mode-medium":
                    alert("Medio")
                    break;
                case "mode-hard":
                    alert("Dificil")
                    break;
                case "mode-impossible":
                    alert("Impossivel")
                    break;
                case "mode-multiplayer":
                    if(fieldElement.innerHTML == "" && numClicks != -1){
                        let image = document.createElement('img')
                        if(numClicks % 2 == 0){
                            status_jogador.innerHTML = `Vez do <strong>O</strong>`
                            image.src = 'images/simbol-x.png'
                            positionsX.push(id)
                        }else{
                            image.src = 'images/simbol-o.png'
                            status_jogador.innerHTML = `Vez do <strong>X</strong>`
                            positionsO.push(id)
                        }
                        fieldElement.appendChild(image)
                        numClicks++
                        endGame()
                    }
                    break;
                default:
                    alert("Selecione um modo de jogo para iniciar!")
                    break;
            }
        }
}

function endGame(){
    if (positionsX.includes(0) && positionsX.includes(4) && positionsX.includes(8) || positionsX.includes(2) && positionsX.includes(4) && positionsX.includes(6)|| positionsX.includes(0) && positionsX.includes(1) && positionsX.includes(2) || positionsX.includes(6) && positionsX.includes(7) && positionsX.includes(8) || positionsX.includes(0) && positionsX.includes(3) && positionsX.includes(6) || positionsX.includes(2) && positionsX.includes(5) && positionsX.includes(8) || positionsX.includes(1) && positionsX.includes(4) && positionsX.includes(7) || positionsX.includes(3) && positionsX.includes(4) && positionsX.includes(5)){
        numClicks = -1
        status_jogador.innerHTML = `Jogador <strong>X</strong> foi o vencedor 🏆`
        setTimeout(() => {
            alert("O jogador X venceu!")
        }, 30);
    }else if(positionsO.includes(0) && positionsO.includes(4) && positionsO.includes(8) || positionsO.includes(2) && positionsO.includes(4) && positionsO.includes(6)|| positionsO.includes(0) && positionsO.includes(1) && positionsO.includes(2) || positionsO.includes(6) && positionsO.includes(7) && positionsO.includes(8) || positionsO.includes(0) && positionsO.includes(3) && positionsO.includes(6) || positionsO.includes(2) && positionsO.includes(5) && positionsO.includes(8) || positionsO.includes(1) && positionsO.includes(4) && positionsO.includes(7) || positionsO.includes(3) && positionsO.includes(4) && positionsO.includes(5)){
        numClicks = -1
        status_jogador.innerHTML = `Jogador <strong>O</strong> foi o vencedor 🏆`
        setTimeout(() => {
            alert("O jogador O venceu!")
        }, 30);
    }else if(positionsX.length == 5){
        status_jogador.innerHTML = `<strong>Empate 🤝</strong>`
        setTimeout(() => {
            alert("Empate!")
        }, 30);
        numClicks = -1
    }   
}

function reload(){
    for(let i = 0 ; i <= 8 ; i++){
        document.getElementById(`td${i}`).innerHTML = ""
    }
    status_jogador.innerHTML = "Começe o Jogo!"
    positionsX = []
    positionsO = []
    numClicks = 0
    controlJogada = false
}

modoJogo.addEventListener('change', () =>{
    reload()
})