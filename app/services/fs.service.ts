import {appModule} from '../../appModule';

class FsService {

    private fs: any[];
    private currentItem: any;
    private currType: string;

    private contextMenu: boolean;
    private posX: number;
    private posY: number;
    private item: any;
    private contextType: string;

    constructor() {
        this.fs = [
            {
                id: 0, name: 'root', children: [
                { id: 5, name: 'tmpppppppppppppppppppppppppppp', content: '5 file'},
                {
                    id: 1, name: 'sub1', children: [
                    { id: 4, name: 'tmp', content: '4 file'},
                    { id: 2, name: 'sub2', children: [] },
                    { id: 3, name: 'sub3', children: [] }
                ]
                }
            ]
            }
        ];
        this.currentItem = null;
        this.currType = undefined;

        this.contextMenu = false;
        this.posX = 0;
        this.posY = 0;
    }

    activate(item) {
        this.currentItem = item;
        this.currentType = item.children ? 'folder' : 'file';
    }

    showContextMenu(show, event, item) {
        this.contextMenu = show;

        if (event) {
            this.posX = event.clientX;
            this.posY = event.clientY;
        }

        item = item || this.currentItem;
        if(item) {
            this.item = item;
            this.contextType = item.children ? 'folder' : 'file';
        }
    }

    get positionX() {
        return this.posX;
    }

    set positionX(x) {
        this.posX = x;
    }

    get positionY() {
        return this.posY;
    }

    set positionY(y) {
        this.posY = y;
    }

    get showMenu() {
        return this.contextMenu;
    }

    get currentType() {
        return this.currType;
    }
    set currentType(type) {
        this.currType = type;
    }
}

appModule.service("fsService", FsService);
