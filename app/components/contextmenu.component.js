"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appModule_1 = require("../../appModule");
var ContextMenuComponent = (function () {
    function ContextMenuComponent(fsService) {
        this.fsService = fsService;
    }
    ContextMenuComponent.prototype.hideMe = function (event) {
        this.fsService.showContextMenu(false);
    };
    ContextMenuComponent.prototype.onNewFolder = function () {
        this.fsService.showContextMenu(false);
    };
    ContextMenuComponent.prototype.onNewFile = function () {
        this.fsService.showContextMenu(false);
    };
    ContextMenuComponent.prototype.onRenameFile = function () {
        this.fsService.showContextMenu(false);
    };
    return ContextMenuComponent;
}());
appModule_1.appModule.component('contextMenu', {
    templateUrl: 'app/components/contextmenu.component.html',
    controller: ContextMenuComponent
});
