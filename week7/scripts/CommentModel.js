export default class CommentModel {
    constructor(type) {
        this.type = type;
        this.comments = JSON.parse(localStorage.getItem(this.type)) || [];
    }

    getComments(query = null) {
        if (query === null) {
            return this.comments;
        } else {
            return this.comments.filter(el => el.name === query);
        }
    }

    addComment(postName, comment) {
        const newComment = {
            name: postName,
            comment: comment,
            date: new Date()
        };
        this.comments.push(newComment);
        localStorage.setItem(this.type, JSON.stringify(this.comments));
    }
}