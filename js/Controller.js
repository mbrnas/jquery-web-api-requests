import {Model} from './Model.js';

export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        this.view.renderSpinner();

        //1. send the request - the jqXHR object is returned, 
        //that will hold the response on success (available within the done() callback)
        let response = this.model.getData('/news');

        //2. specify what will be executed when the request is successful (done() callback)
        response.done((data) => {
            this.view.renderNewsSection(data);
        });
    }
}