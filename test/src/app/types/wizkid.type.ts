export class Wizkid{

    _id?: string;
    name!:string;
    email!:string;
    role!:Role;
    picture!:string;
    password?:string;
    fired?:boolean;
}


export enum Role {
    BOSS = "boss",
    DEVELOPER = "developer",
    DESIGNER="designer",
    INTERN="intern"
}