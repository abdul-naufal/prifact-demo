import { Component } from '@angular/core';

interface CertificateRequest {
  traineeId: number;
  certificateNo: number;
  traineeName: string;
  courseBatch: string;
  requestedOn: string;
  reason: string;
  completionDate: string;
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
      traineeId: 101,
      certificateNo: 6001,
      traineeName: 'Amit Varma',
      courseBatch: 'PPL Batch A',
      requestedOn: '02-Feb-2024',
      reason: 'Course Completion',
      completionDate: '28-Jan-2024',
      approvedOn: '05-Feb-2024',
      approvedBy: 'Alex Carter'
    },
    {
      traineeId: 102,
      certificateNo: 6002,
      traineeName: 'Kristen Alvarez',
      courseBatch: 'CPL Batch B',
      requestedOn: '10-Feb-2024',
      reason: 'Certification',
      completionDate: '01-Feb-2024',
      approvedOn: '12-Feb-2024',
      approvedBy: 'Sarah Lee'
    },
    {
      traineeId: 103,
      certificateNo: 6003,
      traineeName: 'Samuel Green',
      courseBatch: 'Avionics',
      requestedOn: '08-Mar-2024',
      reason: 'Course Completion',
      completionDate: '28-Feb-2024',
      approvedOn: '10-Mar-2024',
      approvedBy: 'Rebecca Ng'
    }
  ];
}
