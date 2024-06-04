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
            ProjectLink: "https://github.com/DeynerNB/ASCII-Image-Render"
        },
        {
            Title: "ASCII Shape Render",
            Description: "ASCII Image Renderer es un programa para Windows, creado por hobby, que crea representaciones en ASCII de figuras en 3D (Cubo, Esfera y un Cono), aplicado rotaciones como parte de la animación y lo muestra en la consola de comandos (CMD).",
            Image: "images/CMD_Shape_Renderer.png",
            ProjectLink: "https://github.com/DeynerNB/ASCII-Shapes-Render"
        },
        {
            Title: "Clínica ELS",
            Description: "Proyecto hecho en React donde se diseño una página web para el servicio de Clínica y Academia ELS. En este se implemento tanto el módulo de página principal, como el módulo de usuarios inscritos en cursos. Utilizando NodeJS + Typescript para el backend y MySQL como gestor de base de datos.",
            Image: "images/ClinicaELS.jpeg",
            ProjectLink: "#"
        },
        {
            Title: "Labyrinth solver with multiple threads (Linux)",
            Description: "Como parte del curso de Sistemas Operativos del Tecnológico de Costa Rica, se implemento un programa en Linux capaz de recorrer por completo un laberinto haciendo uso de threads. Cada thread muestra la información de su recorrido hasta encontrar una salida.",
            Image: "images/ThreadLabyrithm.png",
            ProjectLink: "https://github.com/JPabloA/Laberinto-con-threads-SO-"
        },
    ];

}
