import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit{
    courses: Course[] = [];
    
    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: "Angular: Forms",
                imageUrl: '',
                price: 99.99,
                code: 'KDA-8888',
                duration: 120,
                rating: 5,
                releaseDate: 'December, 2, 2019'
            },
            {
                id: 2,
                name: "Angular: HTTP",
                imageUrl: '',
                price: 99.99,
                code: 'LSA-7532',
                duration: 80,
                rating: 4,
                releaseDate: 'November, 4, 2019'
            }
        ]
    }
}