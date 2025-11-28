import { Component, OnInit } from '@angular/core';

interface FileItem {
  id: string;
  name: string;
  type: 'folder' | 'pdf' | 'doc' | 'image' | 'video';
  size?: string;
  date: Date;
}

interface FilterOption {
  category: string;
  values: string[];
}

interface SelectedFilter {
  category: string;
  value: string;
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  searchQuery: string = '';
  viewMode: 'grid' | 'list' = 'grid';

  files: FileItem[] = [
    { id: '1', name: 'Training Materials', type: 'folder', date: new Date('2023-11-20') },
    { id: '2', name: 'Exam Guidelines', type: 'folder', date: new Date('2023-11-18') },
    { id: '3', name: 'Pilot Handbook 2024.pdf', type: 'pdf', size: '4.2 MB', date: new Date('2023-11-25') },
    { id: '4', name: 'Safety Procedures.docx', type: 'doc', size: '1.5 MB', date: new Date('2023-11-24') },
    { id: '5', name: 'Cockpit Diagram.png', type: 'image', size: '2.8 MB', date: new Date('2023-11-22') },
    { id: '6', name: 'Navigation Charts.pdf', type: 'pdf', size: '8.1 MB', date: new Date('2023-11-21') },
    { id: '7', name: 'Emergency Protocols.docx', type: 'doc', size: '500 KB', date: new Date('2023-11-15') },
    { id: '8', name: 'Training Session.mp4', type: 'video', size: '125 MB', date: new Date('2023-11-10') },
    { id: '9', name: 'Aircraft Specs.pdf', type: 'pdf', size: '3.5 MB', date: new Date('2023-11-05') },
    { id: '10', name: 'Crew Roster.xlsx', type: 'doc', size: '45 KB', date: new Date('2023-11-01') }
  ];

  filteredFiles: FileItem[] = [];
  isUploadModalOpen: boolean = false;

  newDoc = {
    title: '',
    description: '',
    category: 'general',
    keywords: '',
    filters: [] as SelectedFilter[],
    file: null
  };

  // Filter Configuration
  availableFilters: FilterOption[] = [
    { category: 'Phase of Flight', values: ['CLB - Climb', 'CRZ - Cruise', 'DES - Descent', 'APR - Approach'] },
    { category: 'Core Competencies', values: ['COM - Communications', 'LDR - Leadership', 'SIT - Situational Awareness'] },
    { category: 'Aircraft Type', values: ['A320', 'B737', 'Cessna 172'] }
  ];

  isFilterDropdownOpen: boolean = false;
  activeFilterCategory: string | null = null;

  constructor() { }

  ngOnInit() {
    this.filteredFiles = this.files;
  }

  openUploadModal() {
    this.isUploadModalOpen = true;
  }

  closeUploadModal() {
    this.isUploadModalOpen = false;
    this.resetForm();
  }

  onFileSelected(event: any) {
    console.log('File selected:', event.target.files[0]);
  }

  toggleFilterDropdown() {
    this.isFilterDropdownOpen = !this.isFilterDropdownOpen;
    this.activeFilterCategory = null;
  }

  selectFilterCategory(category: string) {
    this.activeFilterCategory = category;
  }

  selectFilterValue(value: string) {
    if (this.activeFilterCategory) {
      this.newDoc.filters.push({
        category: this.activeFilterCategory,
        value: value
      });
      this.isFilterDropdownOpen = false;
      this.activeFilterCategory = null;
    }
  }

  removeFilter(index: number) {
    this.newDoc.filters.splice(index, 1);
  }

  uploadDocument() {
    console.log('Uploading document:', this.newDoc);
    this.closeUploadModal();
  }

  resetForm() {
    this.newDoc = {
      title: '',
      description: '',
      category: 'general',
      keywords: '',
      filters: [],
      file: null
    };
    this.isFilterDropdownOpen = false;
    this.activeFilterCategory = null;
  }

  onSearch() {
    if (!this.searchQuery) {
      this.filteredFiles = this.files;
      return;
    }

    const query = this.searchQuery.toLowerCase();
    this.filteredFiles = this.files.filter(file =>
      file.name.toLowerCase().includes(query)
    );
  }

  clearSearch() {
    this.searchQuery = '';
    this.filteredFiles = this.files;
  }

  getIcon(type: string): string {
    switch (type) {
      case 'folder': return 'folder';
      case 'pdf': return 'picture_as_pdf';
      case 'doc': return 'description';
      case 'image': return 'image';
      case 'video': return 'movie';
      default: return 'insert_drive_file';
    }
  }
}
