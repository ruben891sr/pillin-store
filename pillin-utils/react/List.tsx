/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react'
import { injectIntl, FormattedMessage } from 'react-intl'
import { graphql, compose, useLazyQuery } from 'react-apollo'
import { Spinner } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'container',
  'storesListCol',
  'storesList',
  'storesMapCol',
  'noResults',
  'listingMapContainer',
  'loadAll',
] as const

const StoreList = ({
  orderForm: { called: ofCalled, loading: ofLoading, orderForm: ofData },
  googleMapsKeys,
  filterByTag,
  icon,
  iconWidth,
  iconHeight,
}) => {


   return (
     <div>
       <h1>Countdown Test</h1>
     </div>
   )
}

export default injectIntl()

  )(StoreList)
)
