import { Course } from "./Course";
import { IInstructorDetails } from "./IInstructorDetails";
import { IStudent } from "./IStudent";
import { ISchedule } from "./ISchedule";

export class CourseBuilder {
    private name: string = '';
    private description: string = '';
    private materials: string[] = [];
    private instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: ISchedule | null = null;
    private students: IStudent[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;
    private customMethod:(text:string) => void = (text:string) =>{}
 
    public setName(name:string):CourseBuilder{
        this.name = name;
        return this;
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    // public setSchedule(schedule:ISchedule){
    //     this.schedule = schedule
    //     return this
    // }

    public setStudents(students:IStudent[]){
        this.students = students
        return this
    }

    public setStartDate(startDate:Date){
        this.startDate = startDate
        return this
    }

    public setEndDate(endDate:Date){
        this.endDate = endDate
        return this
    }
 
    public buildCourse():Course{
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehavior = this.customMethod
        return course;
    }

    //Ejercicio correcto:

    public setCustomMethod(method:(text:string)=>void):CourseBuilder{
        this.customMethod = method;
        return this;
    }




    // Intentos incorrectos
    // public static addedFuction(course:Course):Course{
    //     console.log('Test')
    //     return course
    // }

    // public static addStudent(course:Course, student:IStudent){
    //     course.students?.push(student)
    //     return this
    // }

    
    // public static addStudent(course:Course, student:IStudent){
    //     console.log('Nueva funcion implementada')
    //     return this
    // }

    // public useFunction(course:Course, text:string):Course{
    //     course.addExtraBehavior(text)
    // }

    
}