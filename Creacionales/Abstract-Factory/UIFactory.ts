import { IButton } from "./UIObjects/IButton";
import { IDialog } from "./UIObjects/IDialog";

export interface UIFactory {
    createButton():IButton;
    createDialog():IDialog;
}