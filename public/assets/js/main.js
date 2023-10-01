import '../sass/main.scss'
import { Drag } from './classes/Drag'

const tasks = document.querySelectorAll('.task')
const dropzones = document.querySelectorAll('.dropzone')
const iconMenu = document.querySelector('#icon-menu')
const body = document.querySelector('body')
const navbarMobile = document.querySelector('#navbar-mobile')

tasks.forEach(task => { 
    task.draggable = true 
    task.addEventListener('dragstart', Drag.dragStart)
    task.addEventListener('dragend', Drag.dragEnd)
})

dropzones.forEach(dropzone => dropzone.addEventListener('dragover', Drag.dragOver))

iconMenu.addEventListener('click', () => {

    navbarMobile.classList.toggle('activate')

    if(body.style.overflow !== 'hidden') {
        body.style.overflow = 'hidden'
        iconMenu.src = '/assets/img/icons/icon-menu-close.svg'
        return
    }

    iconMenu.src = '/assets/img/icons/icon-menu.svg'
    body.style.overflow = 'auto'
})