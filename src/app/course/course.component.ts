import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course',    
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  title ="List of courses";
  course: any; 

  constructor(service: CoursesService) {    
    this.course = service.getCourses();
  }
  
  
  ngOnInit(): void {
  }

  getTitle(){
    return this.title;
  }

  
  
  
}
