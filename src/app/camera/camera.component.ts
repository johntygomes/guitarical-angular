import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {
  @Output() getPicture = new EventEmitter<WebcamImage>();
  showWebcam = true;
  isCameraExist = true;
  switchCameraValue='false';

  errors: WebcamInitError[] = [];

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  private nextWebcam: Subject<boolean | string> = new Subject<boolean | string>();
  public videoOptions: MediaTrackConstraints = {
    facingMode: { ideal: 'user' }
  };


  constructor(private router: Router,
              private shared:SharedService,
              private http: HttpClient) { }


  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.isCameraExist = mediaDevices && mediaDevices.length > 0;
      });
      // this.changeWebCame(true);
      
  }
  takeSnapshot(): void {
    this.trigger.next();
    this.router.navigate(['/display']);
  }

  onOffWebCame() {
    this.showWebcam = !this.showWebcam;
    window.location.reload()

  }

  handleInitError(error: WebcamInitError) {
    this.errors.push(error);
  }

  changeWebCame(directionOrDeviceId: boolean | string) {
    this.nextWebcam.next(directionOrDeviceId);
  }

  async handleImage(webcamImage: WebcamImage) {
    this.getPicture.emit(webcamImage);
    this.showWebcam = true;
    this.shared.setMessage(webcamImage.imageAsDataUrl);
    console.log(webcamImage.imageAsDataUrl)

    // this.http.post('http://127.0.0.1:8000/api/person-create/', {'img_url':webcamImage.imageAsDataUrl}).subscribe(
    this.http.post('https://no-smoking-backend.herokuapp.com/api/person-create/', {'img_url':webcamImage.imageAsDataUrl}).subscribe(
      (response) => {console.log(response)},
      (error) => console.log(error),
    )
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean | string> {
    return this.nextWebcam.asObservable();
  }


}
