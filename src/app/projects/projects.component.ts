import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: any = [
    {
      title: 'Olympics Database Management System',
      techStack: 'PostgreSQL',
      description: 'I designed and implemented an Olympics Database Management System using PostgreSQL. This project involved creating an ER diagram to model the entities and relationships, which I translated into a relational database schema. The database efficiently supports the storage, retrieval, and management of Olympic data.',
      keyFeatures: [
        {
          heading: 'ER Diagram Design:',
          desc: 'Detailed mapping of entities and relationships.'
        },
        {
          heading: 'Relational Database Implementation:',
          desc: 'Creation of tables, constraints, and indexes for data integrity and efficient querying.'
        },
        {
          heading: 'Stored Procedures:',
          desc: 'Reusable SQL code for common operations and complex queries.'
        },
      ],
      end: 'This project demonstrates my skills in database design, SQL programming, and working with relational database management systems.'
    }
  ]
}
