import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FloorOnTheGround } from '../models/floorOnTheGround.model';

@Injectable({
  providedIn: 'root'
})
export class FloorOnTheGroundService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllFloorOnTheGround(){
    return this.http.get<any>(this.baseUrl + "floor-on-the-ground")
  }

  addFloorOnTheGround(addFloorOnTheGroundRequest: FloorOnTheGround)
  {
    return this.http.post<FloorOnTheGround>(this.baseUrl + "floor-on-the-ground",addFloorOnTheGroundRequest)
  }

  updateFloorOnTheGround(data: FloorOnTheGround, id: number)
  {
    return this.http.put<FloorOnTheGround>(this.baseUrl + "floor-on-the-ground/"+id,data)
  }

  deleteFloorOnTheGround(id: number)
  {
    return this.http.delete<FloorOnTheGround>(this.baseUrl + "floor-on-the-ground/"+id)
  }
}
