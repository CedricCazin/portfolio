import { Route } from '@angular/router';
import { AngularExamplesComponent } from '../angular/examples.component';

export const ANGULAR_MATERIAL_ROUTES: Route[] = [
    {
        path: '',
        component: AngularExamplesComponent,
        children: [
            {
                path: 'component',
                data: { navigation: { name: 'Component', icon: 'email', order: 0 } },
                children: [
                    {
                        path: 'lifecycle',
                        data: { navigation: { name: 'Lifecycle', icon: 'email', order: 0 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'view-encapsulation',
                        data: { navigation: { name: 'View encapsulation', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'interactions',
                        data: { navigation: { name: 'Component interactions', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'styles',
                        data: { navigation: { name: 'Component styles', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'sharing-data',
                        data: { navigation: { name: 'Sharing data', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'content-projection',
                        data: { navigation: { name: 'Content projection', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'dynamic',
                        data: { navigation: { name: 'Dynamic components', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'angular-elements',
                        data: { navigation: { name: 'Angular elements', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'template',
                data: { navigation: { name: 'template', icon: 'email', order: 0 } },
                children: [
                    {
                        path: 'interpolation',
                        data: { navigation: { name: 'Interpolation', icon: 'email', order: 0 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'property-binding',
                        data: { navigation: { name: 'Property Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'attribute-binding',
                        data: { navigation: { name: 'Attribute Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'class-binding',
                        data: { navigation: { name: 'Class Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'style-binding',
                        data: { navigation: { name: 'Style Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'event-binding',
                        data: { navigation: { name: 'Event Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'two-way-binding',
                        data: { navigation: { name: 'Two-way Binding', icon: 'email', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'pipe',
                data: { navigation: { name: 'Pipe', icon: 'email', order: 0 } },
                children: [],
            },
            {
                path: 'directive',
                data: { navigation: { name: 'Directive', icon: 'email', order: 0 } },
                children: [],
            },
        ],
    },
];
