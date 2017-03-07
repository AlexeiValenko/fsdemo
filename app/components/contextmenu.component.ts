import {appModule} from '../../appModule';

class ContextMenuComponent {

    private fsService: any;

    constructor(fsService) {
        this.fsService = fsService;
    }

    hideMe(event) {
        this.fsService.showContextMenu(false);
    }

    onNewFolder() {
        this.fsService.showContextMenu(false);
    }

    onNewFile() {
        this.fsService.showContextMenu(false);
    }

    onRenameFile() {
        this.fsService.showContextMenu(false);
    }
}

appModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu.component.html',
    controller: ContextMenuComponent
});