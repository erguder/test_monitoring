import { Component } from '@angular/core';

interface Patient {
  name: string;
  dob: string;
  gender: string;
  status: string;
  diagnosis: string | null;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patients: Patient[] = [
    { name: 'John Doe', dob: '1979-05-15', gender: 'Male', status: 'Examined', diagnosis: 'Cough and Cold' },
    { name: 'Jane Smith', dob: '1985-09-22', gender: 'Female', status: 'Waiting for Appointment', diagnosis: null },
    { name: 'Michael Johnson', dob: '1990-07-10', gender: 'Male', status: 'Examined', diagnosis: 'Flu Symptoms' },
    { name: 'Emily Williams', dob: '1973-12-05', gender: 'Female', status: 'Waiting for Appointment', diagnosis: null },
    { name: 'David Brown', dob: '1988-01-30', gender: 'Male', status: 'Examined', diagnosis: 'Headache' },
    { name: 'Sarah Jones', dob: '1995-06-17', gender: 'Female', status: 'Waiting for Appointment', diagnosis: null },
    { name: 'Robert Miller', dob: '1976-09-08', gender: 'Male', status: 'Examined', diagnosis: 'Fever' },
    { name: 'Amy Davis', dob: '1983-04-25', gender: 'Female', status: 'Examined', diagnosis: 'Stomach Pain' },
    { name: 'William Wilson', dob: '1992-11-13', gender: 'Male', status: 'Waiting for Appointment', diagnosis: null },
    { name: 'Olivia Martinez', dob: '1980-08-20', gender: 'Female', status: 'Examined', diagnosis: 'Injury' },
    { name: 'Andrew Taylor', dob: '1971-03-03', gender: 'Male', status: 'Waiting for Appointment', diagnosis: null },
    { name: 'Samantha White', dob: '1986-10-25', gender: 'Female', status: 'Examined', diagnosis: 'Flu Symptoms' },
    { name: 'Nathan Thomas', dob: '1993-07-18', gender: 'Male', status: 'Examined', diagnosis: 'Allergies' },
  ];

  sortedPatients: Patient[] = [...this.patients];

  sort(key: keyof Patient) {
    this.sortedPatients = [...this.patients].sort((a, b) => {
      const valueA = a[key] || '';
      const valueB = b[key] || '';
      if (valueA < valueB) return -1;
      if (valueA > valueB) return 1;
      return 0;
    });
  }

}
