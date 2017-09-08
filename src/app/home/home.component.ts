import {Component, OnInit} from '@angular/core';
import {HeroService} from '../hero.service';
import {LoggingService} from '../logging.service';
import {DataService} from '../data.service';

declare const firebase: any;

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [HeroService, LoggingService, DataService],
})

export class HomeComponent implements OnInit   {
    date = new Date();
    visible = true;
    countBirds: number;
    birds = [];
   /* auth = firebase.auth();
    database = firebase.database();
    storage = firebase.storage();*/

   /* birds = [
        {id: 1, name: 'Crow', color: '#98FB98', likes: 0, dislike: 0},
        {id: 2, name: 'Peacock', color: '#98FB98', likes: 0, dislike: 0},
        {id: 3, name: 'Sparrow', color: '#98FB98', likes: 0, dislike: 0},
        {id: 4, name: 'Cuckoo', color: '#98FB98', likes: 0, dislike: 0},
        {id: 5, name: 'Eagle', color: '#98FB98', likes: 0, dislike: 0},
        {id: 6, name: 'Swan', color: '#98FB98', likes: 0, dislike: 0},
        {id: 7, name: 'Duck', color: '#98FB98', likes: 0, dislike: 0},
        {id: 8, name: 'Hen', color: '#98FB98', likes: 0, dislike: 0},
        {id: 9, name: 'Parrot', color: '#98FB98', likes: 0, dislike: 0},
        {id: 10, name: 'Woodpecker', color: '#98FB98', likes: 0, dislike: 0}
    ];*/

    constructor(private logger: LoggingService, private dataService: DataService) {}
    ngOnInit(): void {
        this.birds = this.dataService.fetchData().subscribe(
            (data) => this.birds = data
            //(data: Response) => console.log(data)
        );
        //this.countBirds = JSON.parse(this.birds).length;
    }

     //id = this.birds.length + 1;

   /* logIt() {
        this.logger.log();
    }*/

    addLike(index: number): void {
        this.birds[index].likes++;
    }

    addDisLike(index: string): void {
        this.birds[index].dislike++;
    }

    remove(index: number): void {
        this.birds.splice(index, 1);
        this.countBirds--;
    };

    addBird(name: string): void {
        this.birds.push({id: 1, name: name, color: '#98FB98', likes: 0, dislike: 0});
        this.countBirds++;
    }

    /*updateNameBirds(name: string, index: number): void {
        this.birds[index] = {id: this.birds[index]['id'], name: name, color: '#98FB98', likes: 0, dislike: 0};
        console.log()
    }*/
    fbGetData() {
        firebase.database.ref().set(
            {id: 2, name: 'Peacock', color: '#98FB98', likes: 0, dislike: 0}
        );
    }
}

