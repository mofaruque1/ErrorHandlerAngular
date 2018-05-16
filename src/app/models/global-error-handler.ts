import { ErrorHandler, Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

//Link : https://angular.io/guide/http
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
    constructor() {

    }
    handleError(error: any) {
        //console.log('global error handler');

        if (error instanceof HttpErrorResponse) {
            //console.log('File not found from the global error handler');
            return 'File not found from the global error handler : '+error.status;

        }
        else {
            console.log('some other error');

        }

    }
}
