import { Component, OnInit } from '@angular/core';
import { DataSharingService, Data } from '../data-sharing.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit{
  receivedData: Data = { text: '', text2: '', radio: '', range: 0};

  constructor(private dataSharingService: DataSharingService) {}

  ngOnInit() {
    this.dataSharingService.currentData.subscribe(data => {
      this.receivedData = data;
    });
  }
}
