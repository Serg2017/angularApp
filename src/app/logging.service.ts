import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
    constructor() {}
    log(): void {
        console.log('Logging Service');
    }
}