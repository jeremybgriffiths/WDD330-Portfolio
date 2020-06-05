export default class CommentView {
    constructor() {
    this.commentUI = 
        `<div class="addComment">
        <h2>Add a comment</h2>
        <input type="text" id="commentEntry" />
        <button id="commentSubmit">Comment</button>
        </div>
        <h2>Comments</h2>
        <ul class="comments"></ul>`;
    }

    renderCommentList(element, comments) {
        element.innerHTML = '';
        comments.forEach(el => {
            let item = document.createElement('li');
            item.innerHTML = `${el.name}: ${el.comment}`;
            element.appendChild(item);
        });
    }
}