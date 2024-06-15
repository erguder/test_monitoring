import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Data {
  text: string;
  text2: string;
  radio: string;
  range: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  private dataSource = new BehaviorSubject<Data>({ text: '', text2: '', radio: '', range: 0 });
  currentData = this.dataSource.asObservable();

  changeData(data: Data) {
    this.dataSource.next(data);
  }
}
