import { BuildingMaterial } from "./building-material.model";

export interface DivisionalStructure{
    name: string;
    description: string;
    buildingMaterials: any[];
    divisionalThickness: number;
    R:number;
    U:number;
    Rsi:number;
    Rse:number;

  
}