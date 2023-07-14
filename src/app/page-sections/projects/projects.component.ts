import {Component} from '@angular/core';
import {Project} from '../../interface/project';
import {PROJECT_LIST} from '../../project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = PROJECT_LIST;

  responsiveOptions = [
    {
      breakpoint: '2000px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1500px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '1000px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  constructor() {
    setTimeout(() => {

      let elements = Array.from(document.getElementsByClassName('p-link'));
      for (const element of elements) {
        element.ariaLabel = "Next project view";
      }

      let nextButton = Array.from(document.getElementsByClassName('p-carousel-next'));
      nextButton[0].ariaLabel = "Next project";

      let prevButton = Array.from(document.getElementsByClassName('p-carousel-prev'));
      prevButton[0].ariaLabel = "Previous project";
    }, 0);
  }

}
