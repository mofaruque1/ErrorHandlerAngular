import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

//Link : https://angular.io/guide/http
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    errorMessage: string;

    constructor() {

    }
    handleError(error: any) {

        if (error instanceof HttpErrorResponse) {

            if (error.status / 100 == 4) {
                this.errorMessage = 'Client Side Error with status code : ' + error.status;
            }
            else if (error.status / 100 == 5) {
                this.errorMessage = 'Server Side Error with status code : ' + error.status;
            }
            else {
                this.errorMessage = 'Unknown Error : '+ error.status;
            }
        }
        else {
            switch (error) {
                case 1:
                    this.errorMessage = 'Your entries must match';
                    break;
                case 2:
                    this.errorMessage = 'Please enter a wireless phone number';
                    break;
                case 3:
                    this.errorMessage = 'Phone number must be 10 digits';
                    break;
                case 4:
                    this.errorMessage = 'Please enter 7-digit code';
                    break;
                    /* Can add more case depending on the requiremnet*/
                default:
                    this.errorMessage = 'Unknown Error : '+ error.status;
            }

        }

        return this.errorMessage;

    }
}
