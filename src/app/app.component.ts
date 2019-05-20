import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'List',
            url: '/menu-list',
            icon: 'list'
        }
    ];
    currentPage = '';

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private router: Router
    ) {
        this.initializeApp();
        this.monitorRouteChange();
    }

    monitorRouteChange() {
        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    this.currentPage = event.url;
                }
            });
    }

    go(pageLink) {
        this.router.navigateByUrl(pageLink);
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
