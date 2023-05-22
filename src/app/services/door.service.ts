import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Doors } from '../models/doors.model';

@Injectable({
  providedIn: 'root'
})
export class DoorService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllDoors(){
    return this.http.get<any>(this.baseUrl + "door")
  }

  addDoor(addMaterialRequest: Doors)
  {
    return this.http.post<Doors>(this.baseUrl + "door",addMaterialRequest)
  }

  updateDoor(data: Doors, id: number)
  {
    return this.http.put<Doors>(this.baseUrl + "door/"+id,data)
  }

  deleteDoor(id: number)
  {
    return this.http.delete<Doors>(this.baseUrl + "door/"+id)
  }
}
