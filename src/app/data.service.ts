import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
    constructor(private http: Http) {}

    fetchData() {
        return this.http.get('https://angularrapp.firebaseio.com/.json').map(
            res => res.json()
        );
        /*this.http.get('/app/public/birds.json').subscribe(
            (data) => console.log(data)
        );*/
    }
}