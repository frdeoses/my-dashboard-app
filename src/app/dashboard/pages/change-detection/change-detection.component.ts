import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  imports: [TitleComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title [title]="currentFramework()"></app-title>

    <pre>
    {{ frameWorkAsSignal() | json }}
  </pre
    >
    <pre>
    {{ frameWorkAsProperty | json }}
  </pre
    >
  `,
  styles: ``,
})
export default class ChangeDetectionComponent {
  currentFramework = computed(
    () => `Change detection - ${this.frameWorkAsSignal().name}`
  );

  frameWorkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  });

  frameWorkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      console.log('Hecho');
      // this.frameWorkAsProperty.name = 'React';

      this.frameWorkAsSignal.update((value) => {
        value.name = 'React';
        return { ...value };
      });
    }, 3000);
  }
}
