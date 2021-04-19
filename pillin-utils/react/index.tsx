import { canUseDOM } from 'vtex.render-runtime'

import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {
      document.querySelectorAll(".flex-grow-1")[2].innerHTML = document.getElementById('_locator').innerHTML
      srestoresinit()
      break
    }
    default: {
      break
    }
  }
}

if (canUseDOM) {
  window.addEventListener('message', handleEvents)
}
