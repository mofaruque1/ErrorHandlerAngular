import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GlobalErrorHandler } from '../../models/global-error-handler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorText:string;

  constructor(private dataservice: DataService, private globalErrorHandler:GlobalErrorHandler) { }

  ngOnInit() {
    
    this.dataservice.getData(1).subscribe((data)=>{
      
      if(data['userId']==1){
        //console.log('works');
        this.errorText = this.globalErrorHandler.handleError('01-20-01-0200-accountLocked');
        
      }
      else{
        console.log('Successful');
      }
    },
    (error)=> this.errorText = this.globalErrorHandler.handleError(error)
    //(error)=>console.log(error.status) 
  )
    
    
  }

}
