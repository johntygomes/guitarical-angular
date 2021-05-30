import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'
import html2canvas from 'html2canvas';
import { Router} from '@angular/router';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  photoUrl: string;
  
  constructor(private shared: SharedService,
              private router: Router) { }

  ngOnInit(): void {
    this.photoUrl = this.shared.getMessage();  
    console.log(this.photoUrl)

  }

  public downloadDivs() {
    let docElem = document.getElementById('combinedImg');
      html2canvas(docElem).then((canvas) => {
        let generatedImage = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
        let a = document.createElement('a');
        a.href = generatedImage;
        a.download = `download.png`;
        a.click();
        // at this point, image has been downloaded, then call the next download.
        // this._download(index + 1, array)
      });
  }

  retry(): void {
    this.router.navigate(['']);
  }



}
