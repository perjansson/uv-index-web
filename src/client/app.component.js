import {Component} from '@angular/core'

import './app.component.sass'

export class AppComponent {
  constructor () {}
}

AppComponent.annotations = [
  new Component({
    selector: 'app-root',
    templateUrl: 'src/client/app.component.html'
  })
]
