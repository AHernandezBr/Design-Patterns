
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
.setDescription('Template para cursos avanzados')
.setMaterials(['Libro', 'Videos', 'Proyectos', 'Diapositivas'])
.setSchedule({days:['Lunes'],time:'08:00am a 05:00pm'})
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
console.log('Imprimiendo clon para base de datos')


const advancedCourseDatabases = new CourseBuilder().fromPrototype(advancedCourse.clone())
.setName('Curso avanzado de bases de datos')
.setInstructor({ name: 'Emmanuel', email: 'emmanuel@example.com', experience: 10 })
.setSchedule({days:['Martes', 'Jueves'],time:'08:00am a 05:00pm'})
.buildCourse()

advancedCourseDatabases.displayCourseInfo()

console.log('*****************************************');
console.log('Impimiendo clon para avanzado de APIs')
const advancedCourseAPIs = new CourseBuilder().fromPrototype(advancedCourse.clone())
.setName('Curso avanzado de bases de datos')
.setInstructor({ name: 'Ivan', email: 'ivan@example.com', experience: 10 })
.setSchedule({days:['Miercoles', 'Viernes'],time:'08:00am a 05:00pm'})
.buildCourse()

advancedCourseDatabases.displayCourseInfo()

/* La propiedad name ahora es privada, por lo que no es posible reasignarle un valor
advancedCourseDatabases.name = 'x'
*/