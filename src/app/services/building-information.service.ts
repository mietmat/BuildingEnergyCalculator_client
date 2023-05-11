import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingInformation } from '../models/building-information.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingInformationService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllBuildingInformation(){
    return this.http.get<any>(this.baseUrl + "buildinginformation")
  }

  addBuildingInformation(addMaterialRequest: BuildingInformation)
  {
    return this.http.post<BuildingInformation>(this.baseUrl + "buildinginformation",addMaterialRequest)
  }

  updateBuildingInformation(data: BuildingInformation, id: number)
  {
    return this.http.put<BuildingInformation>(this.baseUrl + "buildinginformation/"+id,data)
  }

  deleteBuildingInformation(id: number)
  {
    return this.http.delete<BuildingInformation>(this.baseUrl + "buildinginformation/"+id)
  }
}
