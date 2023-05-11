import { Address } from './address.model';
import { Investor } from './investor.model';

export interface BuildingInformation{
    name: string;
    description: string;  
    address:Address;
    investor: Investor;
}