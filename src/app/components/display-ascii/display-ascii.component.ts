import { Component } from '@angular/core';
import { COMPUTER_ASCII } from '../../../../public/resources/computer_ascii';

@Component({
    selector: 'components-display-ascii',
    standalone: true,
    imports: [],
    templateUrl: './display-ascii.component.html',
    styleUrl: './display-ascii.component.css'
})
export class DisplayAsciiComponent {
    ascii_design: string = COMPUTER_ASCII;
    ascii_value: string = "";

    

    ngOnInit() {
        this.setPageTile()
    }

    setPageTile = (): void => {
        let index: number = 1;
        let speed: number = 10;

        const typeTitle = (): void => {
            if (index < this.ascii_design.length) {
                this.ascii_value += this.ascii_design[ index ];

                const offsetDelay: number = Math.random() * 10 + -5
                speed -= offsetDelay;

                index++;
                setTimeout(typeTitle, speed)
            }
        };

        typeTitle();
    }
}
