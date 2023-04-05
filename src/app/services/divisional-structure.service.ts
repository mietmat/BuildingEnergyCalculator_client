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
}
