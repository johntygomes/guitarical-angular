import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared/shared.service'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  photoUrl: string;
  
  constructor(private shared: SharedService) { }

  ngOnInit(): void {
    this.photoUrl = this.shared.getMessage();  
    console.log(this.photoUrl) 
  }
  

}
