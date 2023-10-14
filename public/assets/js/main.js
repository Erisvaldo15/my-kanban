import '../sass/main.scss'
import { Drag } from './classes/Drag'

const tasks = document.querySelectorAll('.task')
const dropzones = document.querySelectorAll('.dropzone')
const iconMenu = document.querySelector('#icon-menu-mobile')
const menu = document.querySelector('nav')

dropzones.forEach(dropzone => dropzone.addEventListener('dragover', Drag.dragOver))
dropzones.forEach(dropzone => dropzone.addEventListener('touchmove', Drag.dragOver))

iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('activate')
    menu.classList.toggle('mobile')
})

tasks.forEach(task => { 
    task.draggable = true 

    task.addEventListener('dragstart', Drag.dragStart)
    task.addEventListener('dragend', Drag.dragEnd)

    task.addEventListener('touchstart', (e) => {
        // Impedir o comportamento padrão do toque
        e.preventDefault();

        // Obter o elemento tocado
        const touchedElement = e.target;

        // Salvar informações para cálculos de deslocamento
        touchedElement.startX = e.touches[0].clientX - touchedElement.getBoundingClientRect().left;
        touchedElement.startY = e.touches[0].clientY - touchedElement.getBoundingClientRect().top;

        // Adicionar classe para indicar arrastar
        touchedElement.classList.add('is-dragging');
    });

    task.addEventListener('touchmove', (e) => {
        e.preventDefault();

        const touchedElement = e.target;

        if (touchedElement.classList.contains('dragging')) {
            // Atualizar a posição do elemento conforme o movimento do toque
            touchedElement.style.left = e.touches[0].clientX - touchedElement.startX + 'px';
            touchedElement.style.top = e.touches[0].clientY - touchedElement.startY + 'px';
        }
    });
});
