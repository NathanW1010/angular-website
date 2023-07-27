import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {Project} from '../../interface/project';
import {PROJECT_LIST} from '../../project-list';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = PROJECT_LIST;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: false,
    center: true,
    dots: true,
    autoHeight: false,
    autoWidth: true,
    responsive: {
      0: {
        items: 1
      },
      650: {
        items: 2
      },
      1300: {
        items: 3
      },
      1700: {
        items: 4
      },
      2000: {
        items: 5
      }
    }
  };

}
