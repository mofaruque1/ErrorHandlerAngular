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


  constructor(private dataservice: DataService, private globalErrorHandler: GlobalErrorHandler) { }

  ngOnInit() {

    this.dataservice.getData(400).subscribe((data) => {
      console.log(data);
      
      // this is just dummy test
      if (data['id'] == 1) {
        this.errorText = this.globalErrorHandler.handleError(4);
      }
      else {
        console.log('Successful');
      }
    },
      (error) => this.errorText = this.globalErrorHandler.handleError(error)
      //(error)=>console.log(error.status) 
    )
  }

}
