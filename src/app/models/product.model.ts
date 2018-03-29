import { Category } from "./category.model";

export class Product {
    public _id: number;
    public name: string;
    public description: string;
    public quantity: number;

    public category: Category;
}