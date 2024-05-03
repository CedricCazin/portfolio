import { Route } from '@angular/router';
import { AngularExamplesComponent } from './tools.component';

export const TOOLS_ROUTES: Route[] = [
    {
        path: '',
        component: AngularExamplesComponent,
        children: [
            {
                path: 'component',
                data: { navigation: { name: 'Component', order: 0 } },
                children: [
                    {
                        path: 'lifecycle',
                        data: { navigation: { name: 'Lifecycle', order: 0 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'view-encapsulation',
                        data: { navigation: { name: 'View encapsulation 🚧', order: 1 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'interactions',
                        data: { navigation: { name: 'Component interactions 🚧', order: 2 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'styles',
                        data: { navigation: { name: 'Component styles 🚧', order: 3 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'sharing-data',
                        data: { navigation: { name: 'Sharing data 🚧', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'content-projection',
                        data: { navigation: { name: 'Content projection 🚧', order: 5 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'dynamic',
                        data: { navigation: { name: 'Dynamic components 🚧', order: 6 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'angular-elements',
                        data: { navigation: { name: 'Angular elements 🚧', order: 7 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },

                    {
                        path: 'template',
                        data: { navigation: { name: 'template', order: 8 } },
                        children: [
                            {
                                path: 'interpolation',
                                data: { navigation: { name: 'Interpolation 🚧', order: 0 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'property-binding',
                                data: { navigation: { name: 'Property Binding 🚧', order: 1 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'attribute-binding',
                                data: { navigation: { name: 'Attribute Binding 🚧', order: 2 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'class-binding',
                                data: { navigation: { name: 'Class Binding 🚧', order: 3 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'style-binding',
                                data: { navigation: { name: 'Style Binding 🚧', order: 4 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'event-binding',
                                data: { navigation: { name: 'Event Binding 🚧', order: 5 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                            {
                                path: 'two-way-binding',
                                data: { navigation: { name: 'Two-way Binding 🚧', order: 6 } },
                                component: AngularExamplesComponent,
                                children: [],
                            },
                        ],
                    },
                ],
            },
            {
                path: 'template',
                data: { navigation: { name: 'template', order: 1 } },
                children: [
                    {
                        path: 'interpolation',
                        data: { navigation: { name: 'Interpolation 🚧', order: 0 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'property-binding',
                        data: { navigation: { name: 'Property Binding 🚧', order: 1 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'attribute-binding',
                        data: { navigation: { name: 'Attribute Binding 🚧', order: 2 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'class-binding',
                        data: { navigation: { name: 'Class Binding 🚧', order: 3 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'style-binding',
                        data: { navigation: { name: 'Style Binding 🚧', order: 4 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'event-binding',
                        data: { navigation: { name: 'Event Binding 🚧', order: 5 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                    {
                        path: 'two-way-binding',
                        data: { navigation: { name: 'Two-way Binding 🚧', order: 6 } },
                        component: AngularExamplesComponent,
                        children: [],
                    },
                ],
            },
            {
                path: 'pipe',
                data: { navigation: { name: 'Pipe 🚧', order: 3 } },
                children: [],
            },
            {
                path: 'directive',
                data: { navigation: { name: 'Directive 🚧', order: 4 } },
                children: [],
            },
        ],
    },
];
