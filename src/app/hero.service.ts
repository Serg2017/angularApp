import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

    show(): string {
        console.log('sdfsdfds');
        return 'test service';
    }
}