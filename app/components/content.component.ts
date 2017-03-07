import {appModule} from '../../appModule';


class ContentController {

    private fsService: any;
    private newContent: string;

    constructor(fsService) {
        this.fsService = fsService;
        this.newContent = '';
    }

    select(item, $event) {
        this.fsService.activate(item);
        this.fsService.showContextMenu(false);

        $event.stopPropagation();
    }

    typeOf(item) {
        if(!item) return;
        if(item.content) this.newContent = item.content;
        return item.children ? 'folder' : 'file';
    }

    save(newContent) {
        this.fsService.currentItem.content = this.newContent;
    }

    cancel() {
        this.newContent = this.fsService.currentItem.content;
    }

    get current() {
        return this.fsService.currentItem;
    }

    get type() {
        return this.fsService.currentType;
    }

    showContextMenu(event, item) {
        if (event.which === 3){
            this.fsService.showContextMenu(true,event, item);//, { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
        } else {
            this.fsService.showContextMenu(false);
        }
    }
}

appModule.component('content', {
    controller: ContentController,
    templateUrl: 'app/components/content.component.html',
});
