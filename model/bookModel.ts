import { ObjectId } from "mongodb";

export class bookModel {
    public _id: ObjectId;
    public title: string;
    public author: string;
    public category: string;
    public numberOfPages: number; 
    public interesting: boolean;
    public description: string;

    constructor(title: string, author: string,  category:string,  numberOfPages: number, interesting: boolean, description: string) {
        this._id = new ObjectId();
        this.title = title;
        this.author = author;
        this.category = category
        this.numberOfPages = numberOfPages;
        this.interesting = interesting;
        this.description = description;
    }
}