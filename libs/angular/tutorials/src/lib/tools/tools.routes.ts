import { Route } from '@angular/router';
import { AngularExamplesComponent } from './tools.component';

export const TOOLS_ROUTES: Route[] = [
    {
        path: '',
        component: AngularExamplesComponent,
        children: [
            {
                path: 'component',
                data: { name: 'Component', order: 0 },
                children: [
                    {
                        path: 'lifecycle',
                        data: { name: 'Lifecycle', order: 0 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'view-encapsulation',
                        data: { name: 'View encapsulation 🚧', order: 1 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'interactions',
                        data: { name: 'Component interactions 🚧', order: 2 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'styles',
                        data: { name: 'Component styles 🚧', order: 3 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'sharing-data',
                        data: { name: 'Sharing data 🚧', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'content-projection',
                        data: { name: 'Content projection 🚧', order: 5 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'dynamic',
                        data: { name: 'Dynamic components 🚧', order: 6 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'angular-elements',
                        data: { name: 'Angular elements 🚧', order: 7 },
                        component: AngularExamplesComponent,
                        children: [],
                    },

                    {
                        path: 'template',
                        data: { name: 'template', order: 8 },
                        children: [
                            {
                                path: 'interpolation',
                                data: { name: 'Interpolation 🚧', order: 0 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'property-binding',
                                data: { name: 'Property Binding 🚧', order: 1 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'attribute-binding',
                                data: { name: 'Attribute Binding 🚧', order: 2 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'class-binding',
                                data: { name: 'Class Binding 🚧', order: 3 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'style-binding',
                                data: { name: 'Style Binding 🚧', order: 4 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'event-binding',
                                data: { name: 'Event Binding 🚧', order: 5 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'two-way-binding',
                                data: { name: 'Two-way Binding 🚧', order: 6 },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                path: 'template',
                data: { name: 'template', order: 1 },
                children: [
                    {
                        path: 'interpolation',
                        data: { name: 'Interpolation 🚧', order: 0 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'property-binding',
                        data: { name: 'Property Binding 🚧', order: 1 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'attribute-binding',
                        data: { name: 'Attribute Binding 🚧', order: 2 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'class-binding',
                        data: { name: 'Class Binding 🚧', order: 3 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'style-binding',
                        data: { name: 'Style Binding 🚧', order: 4 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'event-binding',
                        data: { name: 'Event Binding 🚧', order: 5 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'two-way-binding',
                        data: { name: 'Two-way Binding 🚧', order: 6 },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'pipe',
                data: { name: 'Pipe 🚧', order: 3 },
                children: [],
            },
            {
                path: 'directive',
                data: { name: 'Directive 🚧', order: 4 },
                children: [],
            },
        ],
    },
];
