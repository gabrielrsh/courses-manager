import { Component, OnInit } from "@angular/core";
import { Course } from "./course";
import { CourseService } from "./course.service";

@Component({
    selector: 'app-courses-list',
    templateUrl: './courses-list.component.html'
})
export class CoursesListComponent implements OnInit{
    _courses: Course[] = [];
    
    _filterBy: string="";
    filteredCourses: Course[] = [];

    constructor(private courseService: CourseService){}

    ngOnInit(): void {
        this._courses = this.courseService.retrieveAll();
        this.filteredCourses = this._courses;
    }

    set filter(value:string) {
        this._filterBy = value;

        this.filteredCourses = this._courses.filter((course: Course) => course.name.toLocaleLowerCase()
                                                                    .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter():string{
        return this._filterBy
    }
}