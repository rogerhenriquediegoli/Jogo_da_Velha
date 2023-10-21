var numClicks = 0
var status_jogador = document.getElementById('text-status-game')
var positionsX = []
var positionsO = []

function clickTd(id){
    if(numClicks != -1){
        let fieldElement = document.getElementById(`td${id}`)
        if(fieldElement.innerHTML == ""){
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
    }
    
}

function endGame(){
    if (positionsX.includes(0) && positionsX.includes(4) && positionsX.includes(8) || positionsX.includes(2) && positionsX.includes(4) && positionsX.includes(6)|| positionsX.includes(0) && positionsX.includes(1) && positionsX.includes(2) || positionsX.includes(6) && positionsX.includes(7) && positionsX.includes(8) || positionsX.includes(0) && positionsX.includes(3) && positionsX.includes(6) || positionsX.includes(2) && positionsX.includes(5) && positionsX.includes(8) || positionsX.includes(1) && positionsX.includes(4) && positionsX.includes(7) || positionsX.includes(3) && positionsX.includes(4) && positionsX.includes(5)){
        setTimeout(() => {
            status_jogador.innerHTML = `Jogador <strong>X</strong> foi o vencedor`
            alert("O jogador X venceu!")
        }, 10);
        numClicks = -1
    }else if(positionsO.includes(0) && positionsO.includes(4) && positionsO.includes(8) || positionsO.includes(2) && positionsO.includes(4) && positionsO.includes(6)|| positionsO.includes(0) && positionsO.includes(1) && positionsO.includes(2) || positionsO.includes(6) && positionsO.includes(7) && positionsO.includes(8) || positionsO.includes(0) && positionsO.includes(3) && positionsO.includes(6) || positionsO.includes(2) && positionsO.includes(5) && positionsO.includes(8) || positionsO.includes(1) && positionsO.includes(4) && positionsO.includes(7) || positionsO.includes(3) && positionsO.includes(4) && positionsO.includes(5)){
        setTimeout(() => {
            status_jogador.innerHTML = `Jogador <strong>O</strong> foi o vencedor`
            alert("O jogador O venceu!")
        }, 10);
        numClicks = -1
    }else if(positionsX.length == 5){
        setTimeout(() => {
            status_jogador.innerHTML = `<strong>Empate</strong>`
            alert("Empate!")
        }, 10);
    }   
}

function reload(){
    location.reload()
}

