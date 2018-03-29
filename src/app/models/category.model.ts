export class Category {
    public id: number;
    public name: string;
    public description: string;
    public isActive: boolean;

    constructor(id:number, name:string, description:string, isActive = false) {
        this.id =id;
        this.name= name;
        this.description = description;
    }
}