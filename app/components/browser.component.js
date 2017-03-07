"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appModule_1 = require("../../appModule");
var BrowserController = (function () {
    function BrowserController(fsService) {
        this.fsService = fsService;
    }
    return BrowserController;
}());
appModule_1.appModule.component('fsBrowser', {
    controller: BrowserController,
    templateUrl: 'app/components/browser.component.html',
});
