import {Component} from '@angular/core';
import {EDUCATION} from '../../education-list';
import {Education} from '../../interface/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

  education: Education[] = EDUCATION;

}
