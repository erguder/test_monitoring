import { Component } from '@angular/core';
import { DataSharingService, Data } from '../data-sharing.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent {
  textData: string = '';
  text2Data: string = '';
  radioData: string = 'option1';
  rangeData: number = 50;

  constructor(private dataSharingService: DataSharingService) {}

  updateData() {
    const combinedData: Data = {
      text: this.textData,
      text2: this.text2Data,
      radio: this.radioData,
      range: this.rangeData
    };
    this.dataSharingService.changeData(combinedData);
  }
  
  resetData() {
    this.textData = '';
    this.radioData = 'option1';
    this.rangeData = 50;
    this.dataSharingService.changeData({ text: '', text2: '', radio: 'option1', range: 50 });
  }
}
