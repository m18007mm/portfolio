import { Component ,OnInit} from '@angular/core';
import { works } from 'src/app/works';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent {
  works: any
  ngOnInit(){
    this.works = works
  }
}
