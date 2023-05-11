import { Address } from "./address.model";

export interface Investor{
    name: string;
    lastName: string;
    phoneNumber: string;
    email: string;
    address: Address;    

}