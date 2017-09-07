import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home-app',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit   {

    visible = true;
    birds = [
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
    ];
    id = this.birds.length + 1;
    constructor() {}
    ngOnInit(): void {
    }

    addLike(index): void {
        this.birds[index].likes++;
    }

    addDisLike(index): void {
        this.birds[index].dislike++;
    }

    remove(index): void {
        this.birds.splice(index, 1);
    };

    addBird(name): void {
        this.birds.push({id: this.id++, name: name, color: '#98FB98', likes: 0, dislike: 0});
    }
}

