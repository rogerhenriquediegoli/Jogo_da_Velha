var numClicks = 0
var gridGame = [[0,0,0], [0,0,0], [0,0,0]]

function clickTd(id){
    numClicks++
    console.log(numClicks, id)
    let fieldElement = document.getElementById(`td${id}`)
    if(fieldElement.innerHTML == ""){
        let image = document.createElement('img')
        if(numClicks % 2 == 0){
            image.src = 'images/simbol-x.png'
        }else{
            image.src = 'images/simbol-o.png'
        }

    
        fieldElement.appendChild(image)
    }
}

