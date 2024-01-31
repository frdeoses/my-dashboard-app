import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/request-response.interface';

import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],

  template: `
    <app-title [title]="titleLabel()"></app-title>

    @if (user()) {

    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
      <p>
        {{ user()?.email }}
      </p>
    </section>

    } @else {
    <p>Cargando información.....</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.userService.getUserById(id))
    )
  );

  titleLabel = computed(() => {
    if (this.user()) {
      return `Información del usuario: ${this.user()?.first_name}  ${
        this.user()?.last_name
      }`;
    }
    return 'Información del usuario:';
  });

  // user = signal<User | undefined>(undefined);

  // constructor() {
  //   console.log(this.route.params);
  // }
}
