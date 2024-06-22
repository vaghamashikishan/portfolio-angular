import { Component } from '@angular/core';

interface EventItem {
  status?: string;
  date?: string;
  icon?: string;
  color?: string;
  image?: string;
}

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent {
  events: any;

  constructor() {
    this.events = [
      {
        header: 'Masters in Information Technology',
        subHeader: 'DAIICT, Gandhinagar  |  2023 - Pursuing',
        date: 'June-2022 - June-2023',
        cpi: '8.8 CPI (current)',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        header: 'Responscity Systems (P.) Ltd.',
        subHeader: 'Software Developer  |  June-2022 - June-2023',
        date: 'June-2022 - June-2023',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        header: 'Bachelors in Information Technology',
        subHeader: 'VNSGU, Surat  |  2019 - 2021',
        cpi: '7.92 CPI',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        header: 'Higher Secondary Education',
        subHeader: 'I.P.Savani  |  2017 - 2019',
        cpi: '84.28%',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
      {
        header: 'Secondary Education',
        subHeader: 'Archana Vidhya Sankul  |  2016 - 2017',
        cpi: '87.66%',
        icon: 'pi pi-cog',
        color: '#673AB7',
      },
    ];
  }
}
