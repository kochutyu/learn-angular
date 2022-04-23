import {Component} from '@angular/core';
import {timer} from "rxjs";

const data1 = [1, 2, 3];

const data2 = [4, 5, 6];

const data3 = [7, 8, 9];

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  show = true;

  trackByItem(index: number, item: { id: number }) {
    return item.id;
  }

  loadDinamicData(state: 'open' | 'close', id: number, content: HTMLElement) {
    console.log(id);

    if (state === 'open') {
      console.log(state)
      timer(3000).subscribe(() => {
        if (id === 1) {
          content.innerHTML = JSON.stringify(data1);
        }
        if (id === 2) {
          content.innerHTML = JSON.stringify(data2);
        }
        if (id === 3) {
          content.innerHTML = JSON.stringify(data3);
        }
      });
    }
  }
}
