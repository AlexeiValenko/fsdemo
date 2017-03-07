"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appModule_1 = require("../../appModule");
var TreeViewController = (function () {
    function TreeViewController(fsService) {
        this.fsService = fsService;
    }
    TreeViewController.prototype.expand = function (item, $event) {
        item.expanded = !item.expanded;
        $event.stopPropagation();
    };
    TreeViewController.prototype.select = function (item, $event) {
        this.fsService.activate(item);
        if (!item.children) {
            return;
        }
        if (!item.expanded) {
            item.expanded = !item.expanded;
        }
        this.fsService.showContextMenu(false);
        $event.stopPropagation();
    };
    TreeViewController.prototype.showContextMenu = function (event, item) {
        if (event.which === 3) {
            this.fsService.showContextMenu(true, event, item);
        }
        else {
            this.fsService.showContextMenu(false);
        }
    };
    return TreeViewController;
}());
appModule_1.appModule.component('treeView', {
    controller: TreeViewController,
    templateUrl: 'app/components/treeView.component.html',
    bindings: {
        group: "<",
    }
});
