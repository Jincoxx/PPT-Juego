const rock = 1
const paper = 2
const scissor = 3

let shiftMachine = 0
let shiftUser = 0

let countUser = 0
let countMachine = 0

const btnRock = document.getElementById('rock')
const btnPaper = document.getElementById('paper')
const btnScissor = document.getElementById('scissor')
const result = document.getElementById('result')

const getRandonNumber = (min,max) => Math.round(Math.round() * (min - max) + min)

btnRock.addEventListener('click', chooseRock)
btnPaper.addEventListener('click', choosePaper)
btnScissor.addEventListener('click', chooseScissor)

function chooseRock () {
    document.getElementById('shift-user').textContent = 'usuario eligio piedra'
    document.getElementById('shift-cpu').textContent = chooseCpu()
    shiftUser = rock
    result.textContent = validateWinner()
}


function choosePaper () {
    document.getElementById('shift-user').textContent = 'usuario eligio papel'
    console.log(Math.random())
    shiftUser = paper
    result.textContent = validateWinner()
}


function chooseScissor () {
    document.getElementById('shift-user').textContent = 'usuario eligio tijeras'
    shiftUser = scissor
    result.textContent = validateWinner()
}

function chooseCpu() {
    let shiftCpu = getRandonNumber(1,3)
    if (shiftCpu === rock) {
        shiftMachine = rock
        return 'la maquina eligio piedra'
    } else if (shiftCpu === paper) {
        shiftMachine = paper
        return 'la maquina eligio papel'
    } else {
        shiftMachine = scissor
        return 'la maquina eligio tijeras'
    }
}

function validateWinner() {
    if (shiftUser === shiftMachine) {
        return 'empate'
    } else if (
        (shiftUser === rock && shiftMachine === scissor) || 
        (shiftUser === paper && shiftMachine === rock) || 
        (shiftUser === scissor && shiftMachine === paper) ){
            countUser++
        return 'usurio gana'
    } else {
        return 'maquina gana'
    }
}

//agregar el contador

function countwiner() {
    if (countUser == 3) {
        alert("Gano el usuario")
        countMachine = 0
        countUser = 0
    } else if (countMachine == 3) {
        alert("Gano la maquina")
        countMachine = 0
        countUser = 0
    }
}