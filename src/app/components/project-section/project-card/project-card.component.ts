import { Component, INJECTOR, Input } from '@angular/core';

@Component({
    selector: 'component-project-card',
    standalone: true,
    templateUrl: './project-card.component.html',
    styleUrl: './project-card.component.css',
    imports: []
})
export class ProjectCardComponent {
    @Input()
    public cardTitle: string = "Default title";

    @Input()
    public cardDescription: string = "Default description"

    @Input()
    public cardImage: string = "https://variety.com/wp-content/uploads/2024/01/Dwayne-Johnson_credHuyDoan-e1705977711715.jpg?w=1000&h=667&crop=1";

    @Input()
    public cardLink: string = "#";

    public openProjectPage() {
        window.open(this.cardLink, "_blank");
    }
}
