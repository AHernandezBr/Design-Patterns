
import { IButton } from './UIObjects/IButton';
import { IDialog } from './UIObjects/IDialog';
import { UIFactory } from './UIFactory';

export class UIManager {
    private factory:UIFactory

    constructor (factory:UIFactory){
        this.factory = factory;
    }

    public createUI(userType: string): { button: IButton, dialog: IDialog } {
        const button = this.factory.createButton()
        const dialog = this.factory.createDialog()        
        return { button, dialog };
    }
}
