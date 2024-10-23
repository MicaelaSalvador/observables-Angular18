import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppDataService } from './app-data.service';
import { Observable } from 'rxjs';
import { Post } from './commmon/interface';
import { AsyncPipe } from '@angular/common';
import { SubComponentComponent } from './sub-component/sub-component.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AsyncPipe,SubComponentComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  public subject:string="";
  public postData$!:Observable<Post>
  public subjectMessage$!:Observable<string>;


 constructor(private appDataService:AppDataService  ){

  // this.appDataService.getPost().subscribe((value:Post) =>{
  //   console.log(value);
  // });
   this.subjectMessage$=appDataService.messageSubject;
   this.postData$= this.appDataService.getPost();
 }

 updateSubject(){
  this.appDataService.editMessageSubject=this.subject;
 }

}
