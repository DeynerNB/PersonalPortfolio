import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';

@Component({
    selector: 'component-page-slider',
    standalone: true,
    imports: [],
    templateUrl: './page-slider.component.html',
    styleUrl: './page-slider.component.css'
})
export class PageSliderComponent {
    @ViewChild("SliderBall") slider!: ElementRef<HTMLDivElement>;

    private isDragging: boolean = false;
    private offsetY: number = 0;

    private scaleValues = (value: number, inMin: number, inMax: number, outMin: number, outMax: number) => {
        return (value - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    onSliderMovement(event: MouseEvent) {
        this.isDragging = true;
        this.offsetY = event.clientY - this.slider.nativeElement.offsetTop;
    }

    @HostListener("document:mousemove", ["$event"])
    onMouseMove(event: MouseEvent) {
        if (this.isDragging) {

            let newTop: number = event.clientY - this.offsetY;

            const windowHeight: number = window.innerHeight;
            const documentHeight: number = document.documentElement.scrollHeight;
            const elementHeight: number = this.slider.nativeElement.offsetHeight;

            if (newTop < 0) { newTop = 0; }
            else if (newTop + elementHeight > windowHeight) { newTop = windowHeight - elementHeight; }

            this.slider.nativeElement.style.top = `${newTop}px`;

            const minScroll = 0;
            const maxScroll = documentHeight / 2;

            // Calculate scroll position
            const scrollPosition: number = this.scaleValues(newTop, 0, windowHeight, 0, maxScroll);
            window.scrollTo(0, scrollPosition);
        }
    }

    @HostListener("document:mouseup", ["$event"])
    onMouseUp(event: MouseEvent) {
        this.isDragging = false;
    }
}
