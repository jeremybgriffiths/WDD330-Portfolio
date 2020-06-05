import HikeModel from './HikeModel.js';
import HikesView from './HikesView.js';
import CommentController from './CommentController.js';

export default class HikesController {
    constructor(parentId) {
        this.parentElement = document.getElementById(parentId);
        this.hikeModel = new HikeModel();
        this.hikesView = new HikesView(parentId);
        this.commentController = new CommentController('hikes', 'comments');
    }
    showHikeList() {
        const hikeList = this.hikeModel.getAllHikes();
        this.hikesView.renderHikeList(this.parentElement, hikeList);
        this.addHikeListener();
        this.commentController.showCommentList();
    }
    showOneHike(hikeName) {
        const hike = this.hikeModel.getHikeByName(hikeName);
        this.hikesView.renderOneHikeFull(this.parentElement, hike).ontouchend = () => {
            this.showHikeList();
        };

        this.commentController.showCommentList(hikeName);
    }

    addHikeListener() {
        const childrenArray = Array.from(this.parentElement.children);
        childrenArray.forEach(child => {
            child.addEventListener('touchend', e => {
                this.showOneHike(e.currentTarget.dataset.name);
            });
        });
    }
}