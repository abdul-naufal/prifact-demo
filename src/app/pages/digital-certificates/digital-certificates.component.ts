import { Component } from '@angular/core';

interface CertificateRequest {
  rollNo: number;
  tcNo: number;
  studentName: string;
  classDivision: string;
  requestedOn: string;
  reason: string;
  dateOfLeaving: string;
  approvedOn: string;
  approvedBy: string;
}

@Component({
  selector: 'app-digital-certificates',
  templateUrl: './digital-certificates.component.html',
  styleUrls: ['./digital-certificates.component.css']
})
export class DigitalCertificatesComponent {
  requests: CertificateRequest[] = [
    {
      rollNo: 45,
      tcNo: 1636,
      studentName: 'Humberto Elisha Sumner',
      classDivision: 'Preparatory Division A',
      requestedOn: '02-Sep-2022',
      reason: 'Other',
      dateOfLeaving: '26-Aug-2022',
      approvedOn: '08-Sep-2022',
      approvedBy: 'Sharon Kathy Joyce'
    },
    {
      rollNo: 0,
      tcNo: 1639,
      studentName: 'Norma Wilma Augusta',
      classDivision: '7th Division A',
      requestedOn: '10-Sep-2022',
      reason: 'Other',
      dateOfLeaving: '09-Sep-2022',
      approvedOn: '14-Sep-2022',
      approvedBy: 'Sharon Kathy Joyce'
    },
    {
      rollNo: 0,
      tcNo: 1638,
      studentName: 'Faye Jeannette Hester',
      classDivision: '8th Division A',
      requestedOn: '08-Sep-2022',
      reason: 'Other',
      dateOfLeaving: '04-Sep-2022',
      approvedOn: '14-Sep-2022',
      approvedBy: 'Sharon Kathy Joyce'
    },
    {
      rollNo: 39,
      tcNo: 1641,
      studentName: 'Rikki Annemarie Karyn',
      classDivision: 'Preparatory Division D',
      requestedOn: '09-Sep-2022',
      reason: 'Other',
      dateOfLeaving: '04-Sep-2022',
      approvedOn: '09-Oct-2022',
      approvedBy: 'Sharon Kathy Joyce'
    },
    {
      rollNo: 1,
      tcNo: 1640,
      studentName: 'Shelli Marisa Brigitte',
      classDivision: '5th Division D',
      requestedOn: '03-Oct-2022',
      reason: 'Other',
      dateOfLeaving: '08-Oct-2022',
      approvedOn: '09-Oct-2022',
      approvedBy: 'Sharon Kathy Joyce'
    },
    {
      rollNo: 22,
      tcNo: 1645,
      studentName: 'John Doe',
      classDivision: '10th Division B',
      requestedOn: '15-Oct-2022',
      reason: 'Relocation',
      dateOfLeaving: '20-Oct-2022',
      approvedOn: '25-Oct-2022',
      approvedBy: 'Admin User'
    },
    {
      rollNo: 15,
      tcNo: 1646,
      studentName: 'Jane Smith',
      classDivision: '9th Division C',
      requestedOn: '18-Oct-2022',
      reason: 'Personal',
      dateOfLeaving: '22-Oct-2022',
      approvedOn: '28-Oct-2022',
      approvedBy: 'Admin User'
    },
    {
      rollNo: 8,
      tcNo: 1647,
      studentName: 'Michael Brown',
      classDivision: '6th Division A',
      requestedOn: '01-Nov-2022',
      reason: 'Health',
      dateOfLeaving: '05-Nov-2022',
      approvedOn: '10-Nov-2022',
      approvedBy: 'Principal'
    },
    {
      rollNo: 33,
      tcNo: 1648,
      studentName: 'Emily Davis',
      classDivision: '12th Division Science',
      requestedOn: '05-Nov-2022',
      reason: 'Higher Studies',
      dateOfLeaving: '10-Nov-2022',
      approvedOn: '15-Nov-2022',
      approvedBy: 'Principal'
    },
    {
      rollNo: 12,
      tcNo: 1649,
      studentName: 'David Wilson',
      classDivision: '11th Division Commerce',
      requestedOn: '12-Nov-2022',
      reason: 'Transfer',
      dateOfLeaving: '18-Nov-2022',
      approvedOn: '22-Nov-2022',
      approvedBy: 'Vice Principal'
    }
  ];
}
