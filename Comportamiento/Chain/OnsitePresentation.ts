import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";

export class OnsitePresentation extends CoursePresentation{
    private location:string
    
    constructor(location:string, course:Course){
        super(course)
        this.location = location
    }

    public displayCourse():void{
        console.log('Este curso será impartido en la sala ' + this.location)
        this.course.displayCourseInfo()
    }  

    public showPrerrequisites():void{
        console.log('Presentarse 15 min antes en la sala asignada')
        console.log('Avisar de su asistencia en recepción')
    }

    public confirmAssistance(hasConfirmed:boolean):void{
        if(hasConfirmed){
            console.log('El asistente confirmó su reservación')
        } else {
            console.log('No se ha confirmado la asistencia')
        }
    }

}