import { Route } from '@angular/router';
import { AngularExamplesComponent } from '../angular/examples.component';

export const ANGULAR_MATERIAL_ROUTES: Route[] = [
    {
        path: '',
        component: AngularExamplesComponent,
        children: [
            {
                path: 'component',
                data: { name: 'Component', icon: 'email', order: 0 },
                children: [
                    {
                        path: 'lifecycle',
                        data: { name: 'Lifecycle', icon: 'email', order: 0 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'view-encapsulation',
                        data: { name: 'View encapsulation', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'interactions',
                        data: { name: 'Component interactions', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'styles',
                        data: { name: 'Component styles', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'sharing-data',
                        data: { name: 'Sharing data', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'content-projection',
                        data: { name: 'Content projection', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'dynamic',
                        data: { name: 'Dynamic components', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'angular-elements',
                        data: { name: 'Angular elements', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'template',
                data: { name: 'template', icon: 'email', order: 0 },
                children: [
                    {
                        path: 'interpolation',
                        data: { name: 'Interpolation', icon: 'email', order: 0 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'property-binding',
                        data: { name: 'Property Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'attribute-binding',
                        data: { name: 'Attribute Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'class-binding',
                        data: { name: 'Class Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'style-binding',
                        data: { name: 'Style Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'event-binding',
                        data: { name: 'Event Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'two-way-binding',
                        data: { name: 'Two-way Binding', icon: 'email', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'pipe',
                data: { name: 'Pipe', icon: 'email', order: 0 },
                children: [],
            },
            {
                path: 'directive',
                data: { name: 'Directive', icon: 'email', order: 0 },
                children: [],
            },
        ],
    },
];
