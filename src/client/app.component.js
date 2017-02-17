import {Component} from '@angular/core'

export class AppComponent {
  constructor () {}
}

AppComponent.annotations = [
  new Component({
    selector: 'app-root',
    template: '<h1>UV Index</h1>'
  })
]
