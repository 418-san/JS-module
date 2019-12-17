//  task_3
// Реализовать возможность добавления комментариев.
// Комментарий вводится в textarea. Комментарий добавляется по нажатию на кнопку Комментировать.
// При добавлении комментария отображаются: аватар автора (пока у всех комментариев одинаковый), имя автора (пока у всех комментариев одинаковое), дата добавления комментария (текущая дата),
// текст комментария (тот, что был введен в textarea).

const template = document.getElementById(`comment-template`);
const comments__field = document.querySelector(`.comments__field`);
const comment__textarea = document.getElementById(`comment__textarea`);
const comment__send = document.getElementById(`comment__send`);
const comment__warning = document.querySelector(`.comment__warning`);
const comment__textarea_default_height = `80px`;


comment__textarea.addEventListener('input', function () {
    comment__warning.classList.remove(`comment__warning--active`);
    if (this.scrollHeight > this.clientHeight)
        this.style.height = this.scrollHeight + 'px';
});


comment__textarea.addEventListener('keydown', function (event) {
    if (event.key === `Enter` && !event.shiftKey) {
        event.preventDefault();
        sendComment();
    }
});


comment__send.addEventListener(`click`, function (event) {
    event.preventDefault();
    sendComment();
});

function sendComment() {
    const clone = document.importNode(template.content, true);
    const comment__date = clone.querySelector(`.comment__date`);
    const comment__text = clone.querySelector(`.comment__text`);
    let date = new Date();
    comment__date.innerText = `${date.getFullYear()}-${addZero(date.getMonth())}-${addZero(date.getDate())}   ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`;
    comment__text.innerText = comment__textarea.value.trim();
    if (!comment__text.innerText) {
    } else {
        comments__field.append(clone);
        comment__textarea.style.height = comment__textarea_default_height;
    }
    comment__textarea.value = ``;
    comment__textarea.scrollIntoView(true);
    comment__textarea.focus();
}

function addZero(i) {
    if (i < 10) {
        i = `0` + i;
    }
    return i;
}