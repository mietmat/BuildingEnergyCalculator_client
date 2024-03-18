import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Solution } from '../models/solution.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getProjectSolutions(projectId: number): Observable<Solution[]> {
    console.log("getSolutionsForProjectId:", projectId);
    return this.http.get<Solution[]>(this.baseUrl + "solution/" + projectId + "/solutions")
  }

  getAllSolutions(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.baseUrl + "solution/")
  }

  addSolution(data: Solution, projectId: number) {
    return this.http.post<Solution>(this.baseUrl + "solution/" + projectId, data)
  }

  updateSolution(data: Solution, id: number) {
    return this.http.put<Solution>(this.baseUrl + "solution/" + id, data)
  }

  deleteSolution(id: number) {
    return this.http.delete<Solution>(this.baseUrl + "solution/" + id)
  }
}
