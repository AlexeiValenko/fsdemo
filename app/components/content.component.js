"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appModule_1 = require("../../appModule");
var ContentController = (function () {
    function ContentController(fsService) {
        this.fsService = fsService;
        this.newContent = '';
    }
    ContentController.prototype.select = function (item, $event) {
        this.fsService.activate(item);
        this.fsService.showContextMenu(false);
        $event.stopPropagation();
    };
    ContentController.prototype.typeOf = function (item) {
        if (!item)
            return;
        if (item.content)
            this.newContent = item.content;
        return item.children ? 'folder' : 'file';
    };
    ContentController.prototype.save = function (newContent) {
        this.fsService.currentItem.content = this.newContent;
    };
    ContentController.prototype.cancel = function () {
        this.newContent = this.fsService.currentItem.content;
    };
    Object.defineProperty(ContentController.prototype, "current", {
        get: function () {
            return this.fsService.currentItem;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ContentController.prototype, "type", {
        get: function () {
            return this.fsService.currentType;
        },
        enumerable: true,
        configurable: true
    });
    ContentController.prototype.showContextMenu = function (event, item) {
        if (event.which === 3) {
            this.fsService.showContextMenu(true, event, item); //, { event: event, id: this.folder.id, type: this.folder.children ? 'folder' : 'file' });
        }
        else {
            this.fsService.showContextMenu(false);
        }
    };
    return ContentController;
}());
appModule_1.appModule.component('content', {
    controller: ContentController,
    templateUrl: 'app/components/content.component.html',
});
