import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingParameters } from '../models/building-parameters.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingParametersService {
  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllBuildingParameters() {
    return this.http.get<any>(this.baseUrl + "buildingparameters")
  }

  addBuildingParameters(addParametersRequest: BuildingParameters) {
    return this.http.post<BuildingParameters>(this.baseUrl + "buildingparameters", addParametersRequest)
  }

  updateBuildingParameters(data: BuildingParameters, id: number) {
    return this.http.put<BuildingParameters>(this.baseUrl + "buildingparameters/" + id, data)
  }

  deleteBuildingParameters(id: number) {
    return this.http.delete<BuildingParameters>(this.baseUrl + "buildingparameters/" + id)
  }

  getBuildingParametersBySolutionId(solutionId: number) {
    console.log("getBuildingParametersBySolutionIdEndPoint");
    return this.http.get<any>(this.baseUrl + "buildingparameters/" + solutionId);

  }

  saveBuildingParameters(formData: any, solutionId: number) {
    return this.http.post<any>(this.baseUrl + "buildingparameters/" + solutionId, formData);
  }

}
