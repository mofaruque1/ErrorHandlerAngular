import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { GlobalErrorHandler } from '../../models/global-error-handler';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorText: string;
  responseText: string; //from authenticating user


  constructor(private dataservice: DataService, private globalErrorHandler: GlobalErrorHandler) { }

  ngOnInit() {
    this.testErrorHandler();
  }


  // Authenticate user given name and password 
  authentication(name: string, password: string) {

    this.dataservice.authenticateUser(name,password).subscribe((data)=>{
      console.log(data);
    },
    (error) => this.errorText = this.globalErrorHandler.handleError(error))
  }


  // Test if the Global error handler works  

  testErrorHandler() {
    this.dataservice.getDataFullResponse(1).subscribe((data) => {
      console.log(data);
      
      // if (data['id'] == 1) {
      //   this.errorText = this.globalErrorHandler.handleError(4);
      // }
      // else {
      //   console.log('Successful');
      // }
    },
      (error) => this.errorText = this.globalErrorHandler.handleError(error)
      //(error)=>console.log(error.status) 
    )
  }

}
