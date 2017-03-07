import {appModule} from '../../appModule';


class BrowserController {

    private fsService: any;

    constructor(fsService) {
        this.fsService = fsService;
    }
}

appModule.component('fsBrowser', {
    controller: BrowserController,
    templateUrl: 'app/components/browser.component.html',
});

