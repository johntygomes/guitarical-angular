import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'
import html2canvas from 'html2canvas';
import { Router} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  photoUrl: string;
  
  constructor(private shared: SharedService,
              private router: Router,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.photoUrl = this.shared.getMessage();  
    // console.log(this.photoUrl)

  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async demo() {
    console.log('Taking a break...');
    await this.sleep(2000);
    console.log('Two seconds later, showing sleep in a loop...');
  
    // Sleep in loop
    for (let i = 0; i < 5; i++) {
      if (i === 3)
        await this.sleep(2000);
      console.log(i);
    }
  }
  

  public async downloadDivs() {
    window.scroll(0,0);
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
    await this.sleep(500);
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
