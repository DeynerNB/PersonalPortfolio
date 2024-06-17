import { Component, OnInit  } from '@angular/core';

@Component({
    selector: 'component-main-section',
    standalone: true,
    imports: [],
    templateUrl: './main-section.component.html',
    styleUrl: './main-section.component.css'
})
export class MainSectionComponent {
    full_page_title: string = "Personal Portfolio"
    page_title: string = "P"

    ngOnInit() {
        this.setPageTile()
    }

    setPageTile = (): void => {
        let index: number = 1;
        let speed: number = 100;

        const typeTitle = (): void => {
            if (index < this.full_page_title.length) {
                this.page_title += this.full_page_title[ index ];

                const offsetDelay: number = Math.random() * 10 + -5
                speed -= offsetDelay;

                index++;
                setTimeout(typeTitle, speed)
            }
        };

        typeTitle();
    }
}
