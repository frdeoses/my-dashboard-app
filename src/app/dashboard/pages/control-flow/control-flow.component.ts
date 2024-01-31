import { Component, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``,
})
export default class ControlFlowComponent {
  title: string = 'Control Flow';

  showContent = signal(false);

  grade = signal<Grade>('A');

  frameWorks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  frameWorks2 = signal([]);

  toggleContent() {
    this.showContent.update((value) => !value);
  }
}
