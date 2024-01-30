import { Address } from "./address";
import { Company } from "./company";

export interface User{
    id:number;
    username:string;
    name:string;
    email:string;
    address: Address;
    phone:string;
    website:string;
    company: Company;
}