import { canUseDOM } from 'vtex.render-runtime'

import { PixelMessage } from './typings/events'

export function handleEvents(e: PixelMessage) {
console.log(e)
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
  eval("window.srestoresinit();");
  console.log("done!!!");
}
