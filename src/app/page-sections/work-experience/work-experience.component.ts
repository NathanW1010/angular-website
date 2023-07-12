import {Component} from '@angular/core';
import {Experience} from '../../interface/experience';
import {WORK_EXPERIENCE} from '../../work-experience';

@Component({
  selector: 'app-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent {

  workExperience: Experience[] = WORK_EXPERIENCE;

}
