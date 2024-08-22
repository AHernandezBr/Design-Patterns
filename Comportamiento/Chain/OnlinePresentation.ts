import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";

export class OnlinePresentation extends CoursePresentation{
    private platform:string;

    constructor(platform:string, course:Course){
        super(course)
        this.platform = platform
    }

    public displayCourse():void{
        console.log('Este curso se está presentando en la plataforma ' + this.platform)
        this.course.displayCourseInfo()
    }  

    public showMaterials():void{
        console.log('Los materiales son')
        this.course.getMaterials.forEach(material => {console.log(material)})
    }

    public sendReminder(text:string):void{
        console.log('Este es un recordatorio de un curso en línea ' +text)
    }
}