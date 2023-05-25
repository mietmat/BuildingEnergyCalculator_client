import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Windows } from '../models/window.model';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  private baseUrl: string = 'https://localhost:5001/api/'

  constructor(private http: HttpClient) { }

  getAllWindows(){
    return this.http.get<any>(this.baseUrl + "window")
  }

  addWindow(addWindowRequest: Windows)
  {
    return this.http.post<Window>(this.baseUrl + "window",addWindowRequest)
  }

  updateWindow(data: Window, id: number)
  {
    return this.http.put<Window>(this.baseUrl + "window/"+id,data)
  }

  deleteWindow(id: number)
  {
    return this.http.delete<Window>(this.baseUrl + "window/"+id)
  }
}
