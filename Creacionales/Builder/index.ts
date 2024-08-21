
import { Course } from './Course';
import { CourseBuilder } from './CourseBuilder';

const basicCourse = new CourseBuilder()
.setName('Introducción a TypeScript')
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setCustomMethod((message:string)=>{
    console.log('Nueva funcionalidad agregada ' + message)
})
.buildCourse();

console.log('Curso 1:');
basicCourse.displayCourseInfo();
console.log('*****************************************');
basicCourse.addExtraBehavior('Este curso es sabatino') //Funcionalidad adicional por medio del builder

// Creación de un curso completo con todos los detalles
const advancedCourse = new CourseBuilder()
.setName('TypeScript Avanzado')
.setDescription('Un curso avanzado sobre TypeScript')
.setMaterials(['Libro', 'Videos', 'Proyectos'])
.setInstructor({ name: 'Bob', email: 'bob@example.com', experience: 10 })
.setStudents([
            { name: 'Kevin', email: 'Kevin@example.com' },
            { name: 'Victor', email: 'Victor@example.com' },
            { name: 'Camila', email: 'Camila@example.com' },
            { name: 'Jose', email: 'Jose@example.com' },
            { name: 'Amairani', email: 'Amairani@example.com' },
        ])
.setStartDate(new Date(2024, 8, 1))
.setEndDate(new Date(2024, 11, 30)).buildCourse()

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');

const newStudent = { name:"alex", email:"alex@example.com"}

// const addedFuctionCourse = new CourseBuilder()
// .addStudent(newStudent,basicCourse)
// .buildCourse()

// CourseBuilder.addStudent(basicCourse,newStudent)
// basicCourse.displayCourseInfo()

