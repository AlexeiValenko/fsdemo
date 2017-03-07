import {appModule} from '../../appModule';

class TreeViewController {

    private fsService : any;

    constructor(fsService) {
        this.fsService = fsService;
    }

    expand(item, $event) {
        item.expanded = !item.expanded;
        $event.stopPropagation();
    }

    select(item, $event) {
        this.fsService.activate(item);

        if(!item.children) {
            return;
        }

        if(!item.expanded) {
            item.expanded = !item.expanded;
        }
        this.fsService.showContextMenu(false);
        $event.stopPropagation();
    }

    showContextMenu(event, item) {
        if (event.which === 3){
            this.fsService.showContextMenu(true,event,item);
        } else {
            this.fsService.showContextMenu(false);
        }
    }
}

appModule.component('treeView', {
    controller: TreeViewController,
    templateUrl: 'app/components/treeView.component.html',
    bindings:{
        group: "<",
    }
});
