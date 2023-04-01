import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingMaterial } from '../models/building-material.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingMaterialService {
  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllMaterials(){
    return this.http.get<any>(this.baseUrl + "material")
  }

  addMaterial(addMaterialRequest: BuildingMaterial)
  {
    return this.http.post<BuildingMaterial>(this.baseUrl + "material",addMaterialRequest)
  }
  
}
