import * as angular from 'angular';
import {appModule} from './appModule'
import  './app/components/browser.component'
import  './app/components/content.component'
import  './app/components/contextmenu.component'
import  './app/components/treeView.component'
import './app/services/fs.service'


angular.bootstrap(document, [appModule.name]);
