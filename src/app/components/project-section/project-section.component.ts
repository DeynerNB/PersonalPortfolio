import { Component } from '@angular/core';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectInformation } from '../../interfaces/Projects.interface';

@Component({
    selector: 'component-project-section',
    standalone: true,
    templateUrl: './project-section.component.html',
    styleUrl: './project-section.component.css',
    imports: [
        ProjectCardComponent
    ],
})
export class ProjectSectionComponent {
    public projects_information: ProjectInformation[] = [
        {
            Title: "ASCII Image Render",
            Description: "ASCII Image Renderer es un programa hecho en C++ para Windows, creado por hobby, que convierte imágenes almacenadas en una carpeta en su representaciones ASCII y las muestra en la consola de comandos (CMD), en forma de animación.",
            Image: "images/CMD_Image_Renderer.png",
            ProjectLink: "https://github.com/DeynerNB/ASCII-Image-Render",
            Languages: ["C++", "CMD"]
        },
        {
            Title: "ASCII Shape Render",
            Description: "ASCII Image Renderer es un programa para Windows, creado por hobby, que crea representaciones en ASCII de figuras en 3D (Cubo, Esfera y un Cono), aplicado rotaciones como parte de la animación y lo muestra en la consola de comandos (CMD).",
            Image: "images/CMD_Shape_Renderer.png",
            ProjectLink: "https://github.com/DeynerNB/ASCII-Shapes-Render",
            Languages: ["C++", "CMD"]
        },
        {
            Title: "Tkinter MyDesigner",
            Description: "Proyecto que tiene como objetivo simplificar el proceso de crear interfaces gráficas de Tkinter. Simplemente debe seleccionar los elementos, colocarlos en la posición deseada y por último, generar el código de tkinter en cualquier momento.",
            Image: "images/TkinterMyDesigner.jpeg",
            ProjectLink: "https://tkinter-my-designer.vercel.app/",
            Languages: ["React", "Bootstrap"]
        },
        {
            Title: "Labyrinth solver with multiple threads (Linux)",
            Description: "Como parte del curso de Sistemas Operativos del Tecnológico de Costa Rica, se implemento un programa en Linux capaz de recorrer por completo un laberinto haciendo uso de threads. Cada thread muestra la información de su recorrido hasta encontrar una salida.",
            Image: "images/ThreadLabyrithm.png",
            ProjectLink: "https://github.com/JPabloA/Laberinto-con-threads-SO-",
            Languages: ["C", "Threads"]
        },
    ];

}
