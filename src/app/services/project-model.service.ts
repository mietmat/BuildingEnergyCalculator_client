import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project-model.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectModelService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllProjects(){
    return this.http.get<any>(this.baseUrl + "project")
  }

  addProject(addMaterialRequest: ProjectModel)
  {
    return this.http.post<ProjectModel>(this.baseUrl + "project",addMaterialRequest)
  }

  updateProject(data: ProjectModel, id: number)
  {
    return this.http.put<ProjectModel>(this.baseUrl + "project/"+id,data)
  }

  deleteProject(id: number)
  {
    return this.http.delete<ProjectModel>(this.baseUrl + "project/"+id)
  }
}
