import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../app-data.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-sub-component',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './sub-component.component.html',
  styleUrl: './sub-component.component.scss'
})
export class SubComponentComponent implements OnInit {

 public subjectMessage$!:Observable<string>;

 constructor(appDataService :AppDataService){
  this.subjectMessage$ = appDataService.messageSubject;
 }

  ngOnInit(): void {
    
  }

}
