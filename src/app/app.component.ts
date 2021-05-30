import { Component } from '@angular/core';
import {Event, Router, NavigationStart, NavigationEnd} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.scss']
  styles: [`
  :host ::ng-deep button {
      margin-right: .25em;
  }
`]


})
export class AppComponent {
  // title = 'guitarical';
  showLoadingIndicator = true;
  constructor(private _router: Router){
    this._router.events.subscribe((routerEvent: Event) => {
        if(routerEvent instanceof NavigationStart){
          this.showLoadingIndicator = true;
        }

        if(routerEvent instanceof NavigationEnd){
          this.showLoadingIndicator = false;
        }
    });
  }

}
