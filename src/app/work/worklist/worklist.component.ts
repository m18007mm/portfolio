import { Component } from '@angular/core';

@Component({
  selector: 'app-worklist',
  templateUrl: './worklist.component.html',
  styleUrls: ['./worklist.component.scss']
})
export class WorklistComponent {
  works: any = [1, 2, 3, 4]
}
