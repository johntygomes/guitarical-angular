import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { WebcamImage } from 'ngx-webcam';
import {SharedService} from './shared/shared.service'


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
  title = 'guitarical';

}
