import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

//Link : https://angular.io/guide/http
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() {

    }
    handleError(error: any) {

        if (error instanceof HttpErrorResponse) {

            if (error.status / 100 == 4) {
                return 'Client Side Error with status code : ' + error.status;
            }
            else if (error.status / 100 == 5) {
                return 'Server Side Error with status code : ' + error.status;
            }
            else {
                return 'Unknown Error';
            }
        }
        else {
            console.log('some other error');

        }

    }
}
