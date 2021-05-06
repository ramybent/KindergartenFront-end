export class Publication{

    public voteCount: number;
    public description: string;
    public attachment: string;

  
    constructor(

        description:string,
        attachment:string,
        voteCount:number
    ){

        this.description = description;
        this.attachment = attachment;
        this.voteCount = voteCount;



    }
}
