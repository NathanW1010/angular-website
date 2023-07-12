import {Component} from '@angular/core';
import {Project} from '../../interface/project';
import {PROJECT_LIST} from '../../project-list';

import {OwlOptions,} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = PROJECT_LIST;
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
      750: {
        items: 2,
      },
      1600: {
        items: 4,
      }
    }
  };

}
