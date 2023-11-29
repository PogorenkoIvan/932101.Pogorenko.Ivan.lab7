const buttons = document.querySelectorAll('.btn')
const area = document.querySelector('.Content')
let figureIndex = 1

for (button of buttons){
    const buttonId = button.getAttribute('id')
    button.addEventListener('click', () => CreateFigure(buttonId))
}

function CreateFigure(id){
    const count = document.getElementById('count').value
    const con = document.querySelector('.Content')
    const maxX = con.offsetWidth
    const maxY = con.offsetHeight
    for (let i=0; i<Number(count); i++) {
        const figure = document.createElement('div')
        figure.id = figureIndex
        figureIndex++
        figure.className = `${id}`
        let size = Math.floor(Math.random()*(200-50)+50)
        let positionX = Math.floor(Math.random()*(maxX - size)+0)
        let positionY = Math.floor(Math.random()*(maxY - size)+0)
        if(id === 'triangle'){
            figure.style.borderLeft = `${size}px solid transparent`
            figure.style.borderRight = `${size}px solid transparent`
            figure.style.borderBottom = `${size}px solid blue`
            figure.style.left = `${positionX}px`
            figure.style.top = `${positionY}px`
        }
        else{
            figure.style.width = `${size}px`
            figure.style.height = `${size}px`
            figure.style.left = `${positionX}px`
            figure.style.top = `${positionY}px`
        }
        figure.addEventListener('click', () => changeColor(figure, size))
        figure.addEventListener('dblclick', () => Delete(figure.id))
        con.append(figure)
    }
}

function changeColor(figure, size){
    if (figure.className == 'triangle'){
        figure.style.borderBottom = `${size}px solid yellow`
    }
    else{
        figure.style.backgroundColor = 'yellow'
    }
}

function Delete(id){
    const deleteFigure = document.getElementById(id)
    deleteFigure.remove()
}
