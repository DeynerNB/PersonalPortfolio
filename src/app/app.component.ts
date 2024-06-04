import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MainSectionComponent } from './components/main-section/main-section.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ProjectSectionComponent } from './components/project-section/project-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { PageSliderComponent } from './components/page-slider/page-slider.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styles: '',
    imports: [
        MainSectionComponent,
        AboutSectionComponent,
        ProjectSectionComponent,
        ContactSectionComponent,
        PageSliderComponent
    ],
})
export class AppComponent {
    title = 'personal-portfolio';
}
