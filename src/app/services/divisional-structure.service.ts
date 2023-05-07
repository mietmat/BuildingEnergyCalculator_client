import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DivisionalStructure } from '../models/divisional-structures.model';

@Injectable({
  providedIn: 'root'
})
export class DivisionalStructureService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllDivisionalStructures(){
    return this.http.get<any>(this.baseUrl + "divisionalstructure")
  }

  addDivisionalStructure(addDivisionalStructureRequest: DivisionalStructure)
  {
    return this.http.post<DivisionalStructure>(this.baseUrl + "divisionalstructure",addDivisionalStructureRequest)
  }

  updateStructure(data: DivisionalStructure, id: number)
  {
    return this.http.put<DivisionalStructure>(this.baseUrl + "divisionalstructure/"+id,data)
  }

  deleteStructure(id: number)
  {
    return this.http.delete<DivisionalStructure>(this.baseUrl + "divisionalstructure/"+id)
  }

    
}
