import { UIFactory } from "./UIFactory";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
import { StudentButton } from "./UIObjects/StudentButton";
import { StudentDialog } from "./UIObjects/StudentDialog";

export class StudentUIFactory implements UIFactory{
    createButton(): IButton {
        return new StudentButton();
    }
    createDialog(): IDialog {
        return new StudentDialog();
    }
}