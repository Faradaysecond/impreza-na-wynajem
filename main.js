const burgerIcon = document.querySelector('.burger')
const menu = document.querySelector ('.menu')
const exitIcon = document.querySelector ('.exit')
const accBtnOne = document.querySelector ('.acc-one-btn')
const accBtnTwo = document.querySelector ('.acc-two-btn')
const accBtnThree = document.querySelector ('.acc-three-btn')
const accBtnFor = document.querySelector ('.acc-for-btn')
const accTextFor = document.querySelector ('.box-text-for')
const accTextThree = document.querySelector ('.box-text-three')
const accTextTwo = document.querySelector ('.box-text-two')
const accTextOne = document.querySelector ('.box-text-one')


function showMenu (){
    menu.classList.toggle(`show-menu`)
    menu.classList.remove(`hide-menu`)
}
function hideMenu (){
    menu.classList.remove(`show-menu`)
    menu.classList.add(`hide-menu`)
}

function accOneShow(){
    accTextOne.classList.toggle(`add-height`)
}
function accTwoShow(){
    accTextTwo.classList.toggle(`add-height`)
}
function accThreeShow(){
    accTextThree.classList.toggle(`add-height`)
}
function accForShow(){
    accTextFor.classList.toggle(`add-height`)
}


burgerIcon.addEventListener('click', showMenu )
exitIcon.addEventListener('click', hideMenu )
accBtnOne.addEventListener('click', accOneShow )
accBtnTwo.addEventListener('click', accTwoShow )
accBtnThree.addEventListener('click', accThreeShow )
accBtnFor.addEventListener('click', accForShow )
