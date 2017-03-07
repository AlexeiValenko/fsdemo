"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appModule_1 = require("../../appModule");
var FsService = (function () {
    function FsService() {
        this.fs = [
            {
                id: 0, name: 'root', children: [
                    { id: 5, name: 'tmpppppppppppppppppppppppppppp', content: '5 file' },
                    {
                        id: 1, name: 'sub1', children: [
                            { id: 4, name: 'tmp', content: '4 file' },
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
    FsService.prototype.activate = function (item) {
        this.currentItem = item;
        this.currentType = item.children ? 'folder' : 'file';
    };
    FsService.prototype.showContextMenu = function (show, event, item) {
        this.contextMenu = show;
        if (event) {
            this.posX = event.clientX;
            this.posY = event.clientY;
        }
        item = item || this.currentItem;
        if (item) {
            this.item = item;
            this.contextType = item.children ? 'folder' : 'file';
        }
    };
    Object.defineProperty(FsService.prototype, "positionX", {
        get: function () {
            return this.posX;
        },
        set: function (x) {
            this.posX = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsService.prototype, "positionY", {
        get: function () {
            return this.posY;
        },
        set: function (y) {
            this.posY = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsService.prototype, "showMenu", {
        get: function () {
            return this.contextMenu;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FsService.prototype, "currentType", {
        get: function () {
            return this.currType;
        },
        set: function (type) {
            this.currType = type;
        },
        enumerable: true,
        configurable: true
    });
    return FsService;
}());
appModule_1.appModule.service("fsService", FsService);
