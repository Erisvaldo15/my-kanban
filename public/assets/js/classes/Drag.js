class Drag {

    // I can acessing an element with "this"

    static dragEnd() {
        this.classList.remove('is-dragging')
        this.classList.remove('preview')
    }

    static dragStart() {
        this.classList.add('is-dragging')
    }

    static dragOver() {

        let task = document.querySelector('.is-dragging, .preview') // select by the class is-dragging or class preview

        if(task && !this.contains(task)) {
            task.classList.remove('is-dragging')
            this.prepend(task)
        }

    }
}

export { Drag }