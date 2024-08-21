import { UIFactory } from "./UIFactory"
import { AdminButton } from "./UIObjects/AdminButton"
import { AdminDialog } from "./UIObjects/AdminDialog"
import { IButton } from "./UIObjects/IButton"
import { IDialog } from "./UIObjects/IDialog"

export class AdminUIFactory implements UIFactory {
    public createButton(): IButton {
        return new AdminButton();
    }

    public createDialog(): IDialog {
        return new AdminDialog();
    }
}
