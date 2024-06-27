import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        CommonModule,
        MainSectionComponent,
        AboutSectionComponent,
        ProjectSectionComponent,
        ContactSectionComponent,
        PageSliderComponent
    ],
})
export class AppComponent {
    title = 'personal-portfolio';

    @ViewChild('mouse_div')
    mouse_div!: ElementRef<HTMLDivElement>;

    mouseX: number = 0;
    mouseY: number = 0;

    offsetW: number = 0;
    offsetH: number = 0;

    ngAfterViewInit() {
        if (!this.mouse_div) {
            return;
        }

        const rect = this.mouse_div.nativeElement.getBoundingClientRect();
        this.offsetW = rect.width / 2;
        this.offsetH = rect.height / 2;
    }

    onMouseMove(event: MouseEvent) {
        this.mouseX = event.clientX - this.offsetW;
        this.mouseY = event.clientY - this.offsetH + window.scrollY;
    }
}
