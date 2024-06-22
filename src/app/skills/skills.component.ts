import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  str: string = 'asset/icons/C.svg';
  skills: any = [
    { svg: 'assets/icons/C.svg', name: 'C' },
    { svg: 'assets/icons/C++.svg', name: 'C++' },
    { svg: 'assets/icons/javascript.svg', name: 'JavaScript' },
    { svg: 'assets/icons/angular.svg', name: 'Angular' },
    { svg: 'assets/icons/nodejs.svg', name: 'NodeJS' },
    { svg: 'assets/icons/express.svg', name: 'ExpressJS' },
    { svg: 'assets/icons/java.svg', name: 'Java' },
    { svg: 'assets/icons/git.svg', name: 'Git' },
    { svg: 'assets/icons/sql.svg', name: 'SQL' },
    { svg: 'assets/icons/rxjs.svg', name: 'RxJS' },
    { svg: 'assets/icons/github.svg', name: 'Github' },
    { svg: 'assets/icons/mongodb.svg', name: 'MongoDB' },
    { svg: 'assets/icons/firebase.svg', name: 'Firebase' },
    { svg: 'assets/icons/supabase.svg', name: 'Supabase' },
    { svg: 'assets/icons/html.svg', name: 'HTML' },
    { svg: 'assets/icons/css.svg', name: 'CSS' },
  ]
  constructor() { }
}
