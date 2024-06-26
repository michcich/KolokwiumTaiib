import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MouseResponseDTO } from '../models/mouse-responseDTO.interface';
import { MouseRequestDTO } from '../models/mouse-requestDTO.interface';

@Injectable({
  providedIn: 'root'
})
export class MouseService {
  constructor(private client:HttpClient) { }

  public get():Observable<MouseResponseDTO[]>{
    return this.client.get<MouseResponseDTO[]>('https://localhost:7203/api/Mouse');
  }

  public delete(id:number):Observable<any>{
    return this.client.delete<any>('https://localhost:7203/api/Mouse' + {params: {id}});
  }

  public post(form: MouseRequestDTO): Observable<any> {
    return this.client.post<any>('https://localhost:7203/api/Mouse', form);
  }
}
