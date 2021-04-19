import { canUseDOM } from 'vtex.render-runtime'

import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
  switch (e.data.eventName) {
    case 'vtex:pageView': {

	try{
      eval("window.srestoresinit();");
	}catch(e)
	{
	  console.log('dertp')
	}

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
