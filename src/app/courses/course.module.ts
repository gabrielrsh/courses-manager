import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { StarModule } from "../shared/component/star/star.module";
import { AppPipeModule } from "../shared/pipe/app-pipe.module";
import { CourseInfoComponent } from "./course-info.component";
import { CoursesListComponent } from "./courses-list.component";

@NgModule({
    declarations: [
        CoursesListComponent,
        CourseInfoComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        StarModule,
        AppPipeModule,
        RouterModule.forChild([
            {
                path: 'courses', component: CoursesListComponent
            },
            {
                path: 'courses/info/:id', component: CourseInfoComponent
            },
        ])
    ]
})
export class CourseModule{}