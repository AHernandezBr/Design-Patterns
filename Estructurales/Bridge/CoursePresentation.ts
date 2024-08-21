import { Course } from "./Course";

export abstract class CoursePresentation {
    protected course:Course;

    constructor (course:Course){
        this.course = course;
    }

    public abstract displayCourse():void;
}