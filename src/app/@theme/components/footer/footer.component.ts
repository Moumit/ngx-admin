import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      ©2023 Copyright: <b><a href="https://hertzcarsales.com/" target="_blank">Hertz CarSales</a></b>
    </span>
  `,
})
export class FooterComponent {
}
