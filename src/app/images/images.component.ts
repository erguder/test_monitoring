import { Component } from '@angular/core';

interface ImageData {
  sampleType: string;
  patientName: string;
  dateTaken: string;
  imageUrl: string;
}

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent {

  imageData: ImageData[] = [
    { sampleType: 'Blood', patientName: 'John Doe', dateTaken: '2024-04-01', imageUrl: 'path/to/blood_sample_1.jpg' },
    { sampleType: 'Urine', patientName: 'Jane Smith', dateTaken: '2024-04-02', imageUrl: 'assets/histological-staining-kidney.webp' },
    { sampleType: 'MRI', patientName: 'Michael Johnson', dateTaken: '2024-04-03', imageUrl: 'path/to/mri_scan_1.jpg' },
    { sampleType: 'X-ray', patientName: 'Emily Williams', dateTaken: '2024-04-04', imageUrl: 'path/to/xray_image_1.jpg' },
    { sampleType: 'CT Scan', patientName: 'David Brown', dateTaken: '2024-04-05', imageUrl: 'path/to/ct_scan_1.jpg' },
    { sampleType: 'Ultrasound', patientName: 'Sarah Jones', dateTaken: '2024-04-06', imageUrl: 'path/to/ultrasound_image_1.jpg' },
    { sampleType: 'Endoscopy', patientName: 'Robert Miller', dateTaken: '2024-04-07', imageUrl: 'path/to/endoscopy_image_1.jpg' },
    { sampleType: 'EKG', patientName: 'Amy Davis', dateTaken: '2024-04-08', imageUrl: 'path/to/ekg_reading_1.jpg' },
    { sampleType: 'Dental X-ray', patientName: 'William Wilson', dateTaken: '2024-04-09', imageUrl: 'path/to/dental_xray_1.jpg' },
    { sampleType: 'Skin Biopsy', patientName: 'Olivia Martinez', dateTaken: '2024-04-10', imageUrl: 'path/to/skin_biopsy_1.jpg' },
    { sampleType: 'EEG', patientName: 'Andrew Taylor', dateTaken: '2024-04-11', imageUrl: 'path/to/eeg_scan_1.jpg' },
  ];
  

  selectedImageUrl: string = '';

  showImage(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
  }

}
