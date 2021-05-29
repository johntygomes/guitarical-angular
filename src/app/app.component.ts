import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { WebcamImage } from 'ngx-webcam';


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
  visibleSidebar1;
  webcamImage: WebcamImage = null;

  handleImage(webcamImage: WebcamImage) {
    this.webcamImage = webcamImage;
  }


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
