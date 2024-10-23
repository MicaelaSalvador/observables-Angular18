import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from './commmon/interface';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private message:BehaviorSubject<string> = new BehaviorSubject<string>('Hola');

  constructor(// private httpClient: HttpClient
) { }

  httpClient =inject (HttpClient);

  getPost():Observable<Post>{
    return this.httpClient.get<Post>(`https://jsonplaceholder.typicode.com/posts/1`);
  }
  
  get messageSubject(): Observable<string>{
    return this.message.asObservable();
  }

  set editMessageSubject(newValue:string){
    this.message.next(newValue);
  }
  
}
