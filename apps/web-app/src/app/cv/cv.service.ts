import { Injectable } from '@angular/core';
import { CVItem, Months } from './cv.interface';
import * as Showdown from 'showdown';

@Injectable({
  providedIn: 'root'
})
export class CvService {


  public get cv(): CVItem[] {
    const converter = new Showdown.Converter();

    const cvItems = [...this._cv];
    cvItems.forEach((cvItem) => {
      cvItem._DescriptionHtml = converter.makeHtml(cvItem.Description);
    });

    return cvItems;
  }

  public readonly _cv: CVItem[] = [
    {
      FromMonth: 'January',
      FromYear: 2022,
      InPost: true,
      Company: {
        Name: 'Bearingpoint',
        LogoUrl: 'https://www.bearingpoint.com/files/BrP_Logo_RGB_PS.png?max_w=160',
        Team: 'Products',
        LinkedInUrl: 'https://www.linkedin.com/company/bearingpoint/',
        Url: 'https://www.bearingpoint.com/en/store/',
      },
      Title: 'Lead Software Engineer',
      Location: 'Paris La Défense, Île-de-France, France',
      Description: '',
      Skills: [
        {
          name: 'HTML5',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg',
        },
        {
          name: 'CSS3',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg',
        },
        {
          name: 'SASS',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
        },
        {
          name: 'JavaScript',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        },
        {
          name: 'TypeScript',
          description: '',
          borderColor: 'gold',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        },
        {
          name: 'CSharp',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
        },
        {
          name: 'Python',
          description: '',
          borderColor: 'grey',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        },
        {
          name: 'Rust',
          description: '',
          borderColor: '#B87333',
          image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg',
        },
        // Software Development
        // Git
        // docker / podman
        // Angular
        // Angular Material
        // Python (Programming Language)
        // nrwl/nx (monorepo)
        // NestJS
        // PostgreSQL
        // MongoDB
        // Cypress
        // Node.js
        // Keycloak
        // Agile Methodologies
        // Azure DevOps
        // Amazon Web Services (AWS)
        // Microsoft Azure
        // SASS
        // CSS Flexbox
        // SQL
        // Design Patterns
        // TypeScript
        // HTML
        // JavaScript
        // CSS
        // Unit Testing
        // Software Project Management
        // Visual Studio Code
      ]
    },
    {
      FromMonth: 'April',
      FromYear: 2017,
      ToMonth: 'January',
      ToYear: 2022,
      Company: {
        Name: 'Bearingpoint',
        Team: 'Products',
        LinkedInUrl: 'https://www.linkedin.com/company/bearingpoint/',
        Url: 'https://www.bearingpoint.com/en/store/',
      },
      Title: 'Software Engineer',
      Location: 'Paris La Défense, Île-de-France, France',
      Description: '',
      Skills: [
        // Software Development
        // Git
        // docker / podman
        // Angular
        // Angular Material
        // Python (Programming Language)
        // nrwl/nx (monorepo)
        // NestJS
        // PostgreSQL
        // MongoDB
        // Cypress
        // Node.js
        // Keycloak
        // Agile Methodologies
        // Azure DevOps
        // Amazon Web Services (AWS)
        // Microsoft Azure
        // SASS
        // CSS Flexbox
        // SQL
        // Design Patterns
        // TypeScript
        // HTML
        // JavaScript
        // CSS
        // Unit Testing
        // Software Project Management
        // Visual Studio Code
      ]
    },
    {
      FromMonth: 'December',
      FromYear: 2011,
      ToMonth: 'April',
      ToYear: 2017,
      Company: {
        Name: 'Thomson Reuters',
        Team: 'Eikon',
        LinkedInUrl: 'https://www.linkedin.com/company/thomson-reuters/',
        Url: 'https://eikon.refinitiv.com/',
      },
      Title: 'Lead Software Engineer',
      Location: 'Paris La Défense, Île-de-France, France',
      Description: `
In 2016: Deputy Manager in charge of French and Thai teams.

Built a fully automated system to analyze and manage crashes sent from the client side software Eikon by a homemade crash reporter.
Using agile methodology, daily Scrum stand up, Kanban, in charge of the deployment (Dev, Prod and client side), we produced:

Front-end:
* Create a C++ Library to catch Native and Managed crashes, generate dumps, gather data on a multi process application.
* Create a WPF Application to generate dumps of another process, upload crashes to back-end using BITS or Web Services.

Back-end:
* Create and manage a SQL Server Database (tables, Triggers, security).
* Create a C# Entity Framework Repository library to be used on all back end projects.
* Create ASP.net Web Services and BITS server to receive, store dumps, and use HangFire to launch the dump analysis.
* Create a C# Windows Service to extract info from dumps using WinDBG; Analyze results and categorize them by issue types.
* Create an ASP.net MVC web portal to display dumps info as data tables, statistics, graphs or world maps; Issue management including feature to categorize dumps automatically and interact with Jira; Special pages for support or dev teams; Create an OAuth2 library based on Katana to manage security using company authentication system.

Created Eikon services in C++ and C#; Created multi-thread and thread-safe client to access a hosted file system on Thomson Reuters private Cloud. Worked on compilation process, development tools.
`,
      Skills: [
        // Software Development
        // Git
        // docker / podman
        // Angular
        // Angular Material
        // Python (Programming Language)
        // nrwl/nx (monorepo)
        // NestJS
        // PostgreSQL
        // MongoDB
        // Cypress
        // Node.js
        // Keycloak
        // Agile Methodologies
        // Azure DevOps
        // Amazon Web Services (AWS)
        // Microsoft Azure
        // SASS
        // CSS Flexbox
        // SQL
        // Design Patterns
        // TypeScript
        // HTML
        // JavaScript
        // CSS
        // Unit Testing
        // Software Project Management
        // Visual Studio Code
      ]
    },
    {
      FromMonth: 'September',
      FromYear: 2007,
      ToMonth: 'December',
      ToYear: 2011,
      Company: {
        Name: 'Thomson Reuters',
        Team: 'Eikon',
        LinkedInUrl: 'https://www.linkedin.com/company/thomson-reuters/',
        Url: 'https://eikon.refinitiv.com/',
      },
      Title: 'Software Engineer',
      Location: 'Paris La Défense, Île-de-France, France',
      Description: '',
      Skills: [
        // Software Development
        // Git
        // docker / podman
        // Angular
        // Angular Material
        // Python (Programming Language)
        // nrwl/nx (monorepo)
        // NestJS
        // PostgreSQL
        // MongoDB
        // Cypress
        // Node.js
        // Keycloak
        // Agile Methodologies
        // Azure DevOps
        // Amazon Web Services (AWS)
        // Microsoft Azure
        // SASS
        // CSS Flexbox
        // SQL
        // Design Patterns
        // TypeScript
        // HTML
        // JavaScript
        // CSS
        // Unit Testing
        // Software Project Management
        // Visual Studio Code
      ]
    },
    {
      FromMonth: 'September',
      FromYear: 2001,
      ToMonth: 'September',
      ToYear: 2007,
      Company: {
        Name: 'Thomson Reuters',
        Team: 'Eikon',
        LinkedInUrl: 'https://www.linkedin.com/company/thomson-reuters/',
        Url: 'https://eikon.refinitiv.com/',
      },
      Title: 'Software Engineer',
      Location: 'Paris La Défense, Île-de-France, France',
      Description: '',
      Skills: [
        // Software Development
        // Git
        // docker / podman
        // Angular
        // Angular Material
        // Python (Programming Language)
        // nrwl/nx (monorepo)
        // NestJS
        // PostgreSQL
        // MongoDB
        // Cypress
        // Node.js
        // Keycloak
        // Agile Methodologies
        // Azure DevOps
        // Amazon Web Services (AWS)
        // Microsoft Azure
        // SASS
        // CSS Flexbox
        // SQL
        // Design Patterns
        // TypeScript
        // HTML
        // JavaScript
        // CSS
        // Unit Testing
        // Software Project Management
        // Visual Studio Code
      ]
    },
    {
      FromMonth: 'September',
      FromYear: 2000,
      ToMonth: 'September',
      ToYear: 2001,
      Company: {
        Name: 'LOGFI (XFI)',
      },
      Title: 'Software Engineer',
      Location: 'Paris, Île-de-France, France',
      Description: '',
    },
    {
      FromMonth: 'September',
      FromYear: 1998,
      ToMonth: 'September',
      ToYear: 2000,
      Company: {
        Name: 'Statigest',
        LinkedInUrl: 'https://www.linkedin.com/company/statigest',
        Url: 'https://www.statigest.fr/',
      },
      Title: 'Software Engineer',
      Location: 'Paris, Île-de-France, France',
      Description: '',
    }
  ]
}
