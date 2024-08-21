import { UIFactory } from "./UIFactory";
import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";
import { InstructorButton } from "./UIObjects/InstructorButton";
import { InstructorDialog } from "./UIObjects/InstructorDialog";

export class InstructorUIFactory implements UIFactory{
    createButton(): IButton {
        return new InstructorButton();
    }

    createDialog(): IDialog {
        return new InstructorDialog();
    }
}