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

  /*
  customOwlOptions: OwlOptions = {
    loop: true,
    center: true,
    dots: true,
    margin: 100,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      800: {
        items: 2,
      },
      1600: {
        items: 4,
      }
    }
  };
   */

}
