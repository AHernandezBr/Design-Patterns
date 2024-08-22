import { CoursePresentationValidator } from './CoursePresentationValidator';
import { Course } from './Course';

export class StudentEnrollmentValidator extends CoursePresentationValidator {
    public validate(course: Course): void {
        if (!course.getStudents|| course.getStudents?.length === 0) {
            throw new Error('El curso no tiene estudiantes inscritos.');
        }
        super.validate(course);
    }
}

export class MaterialAvailabilityValidator extends CoursePresentationValidator {
    public validate(course: Course): void {
        if (!course.getMaterials || course.getMaterials?.length === 0) {
            throw new Error('El curso no tiene materiales disponibles.');
        }
        super.validate(course);
    }
}

export class CourseStartDateValidator extends CoursePresentationValidator {
    public validate(course: Course): void {
        const currentDate = new Date();
        if (course.getStartDate! > currentDate) {
            console.log(course.getStartDate);
            throw new Error('El curso aún no ha comenzado.');
        }
        super.validate(course);
    }
}
