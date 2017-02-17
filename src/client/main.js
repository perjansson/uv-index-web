import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './app.module'

let boot = document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => {
    console.log(`Bootstrap success`)
  })
  .catch(err => console.error(err))
})

module.exports = boot
