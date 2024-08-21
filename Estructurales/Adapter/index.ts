
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';

const enrollmentService = new EnrollmentService();
const billingService = new BillingService();
const contactMail = 'Alejandro.HernandezB@axity.com'

enrollmentService.enrollStudent(contactMail);
billingService.notifyPaymentDue(contactMail)