
import { AdminUIFactory } from './AdminUIFactory';
import { InstructorUIFactory } from './InstructorUIFactory';
import { StudentUIFactory } from './StudentUIFactory';
import { UIManager } from './UIManager';

const adminUiFactory = new AdminUIFactory()
const studentUiFactory = new StudentUIFactory()
const instructorUiFactory = new InstructorUIFactory()
const adminUiManager = new UIManager(adminUiFactory)
const studentUiManager = new UIManager(studentUiFactory)
const instructorUiManager = new UIManager(instructorUiFactory)

const adminUI = adminUiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

const studentUI = studentUiManager.createUI('student');
studentUI.button.render();
studentUI.dialog.show();

const instructorUI = instructorUiManager.createUI('instructor');
instructorUI.button.render();
instructorUI.dialog.show();