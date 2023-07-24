import {Education} from './interface/education';

export const EDUCATION: Education[] = [
  {
    name: 'Wright State University',
    startDate: 'August 2020',
    endDate: 'Present',
    activities: [
      'Teaching Assistant / Lab Leader',
      'Student Ambassador',
      'Student Conduct Panel Member',
      'Campus Scholarship and Innovation Campaign (CSIC)',
      'Annual Fall Mailing Photoshoot',
      'Spring 2023 Appeal Photoshoot'
    ],
    icon: 'wrightstate.jpeg',
    iconWidth: 375,
    iconHeight: 250,
    GPA: '3.923',
    degree: 'Bachelor of Science in Computer Science (BSCS)'
  },
  {
    name: 'Middletown High School',
    startDate: 'August 2016',
    endDate: 'May 2020',
    activities: [
      'MHS Bowling Team',
      'MHS Esports Team',
      'National Honors Society',
      'American Legion Buckeye Boys State'
    ],
    icon: 'pc-icon.png',
    iconWidth: 512,
    iconHeight: 512,
    GPA: 'Unweighted: 4.000, Weighted: 4.534',
    degree: 'High school diploma'
  }
];
