import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-defer-option',
  standalone: true,
  imports: [HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defer-option.component.html',
  styles: ``,
})
export default class DeferOptionComponent {}
