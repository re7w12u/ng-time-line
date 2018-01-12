


export class OrderModel {
    public id: number;
    public Name: string;
    public content: string;
    public StartDate: Date;
    public EndDate: Date;
    public Style: string;
    public Group:String;

    constructor(json) {
        this.id = json.id;
        this.Name = json.name;
        this.content = json.content;
        this.StartDate = json.start;
        this.EndDate = json.end;
        this.Style = json.style;
        this.Group = json.group;
    }
}