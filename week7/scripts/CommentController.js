import CommentModel from './CommentModel.js';
import CommentView from './CommentView.js';

export default class CommentController {
    constructor(type, commentElementId) {
        this.type = type;
        this.commentElementId = commentElementId;
        this.model = new CommentModel(this.type);
        this.view = new CommentView();
    }

    addSubmitListener(postName) {
        document.getElementById('commentSubmit').ontouchend = () => {
            this.model.addComment(
                postName,
                document.getElementById('commentEntry').value
            );
            document.getElementById('commentEntry').value = '';
            this.showCommentList(postName);
        };
    }
    showCommentList(query = null) {
        try {
            const parent = document.getElementById(this.commentElementId);
            if (!parent) throw new Error('comment parent not found');

            if (parent.innerHTML === '') {
                parent.innerHTML = this.view.commentUI;
            }
            if (query !== null) {
                document.querySelector('.addComment').style.display = 'block';
                this.addSubmitListener(query);
            } else {
                document.querySelector('.addComment').style.display = 'none';
            }

            let comments = this.model.getComments(query);
            if (comments === null) {
                comments = [];
            }
            this.view.renderCommentList(parent.lastChild, comments);
        } catch (error) {
            console.log(error);
        }
    }
}