/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
//import React, { useState } from 'react'
//import { injectIntl, FormattedMessage } from 'react-intl'
//import { Spinner } from 'vtex.styleguide'
//import { useCssHandles } from 'vtex.css-handles'


/*
const CSS_HANDLES = [
  'container',
  'storesListCol',
  'storesList',
  'storesMapCol',
  'noResults',
  'listingMapContainer',
  'loadAll',
] as const
*/
const StoreList = ({ }) => {


   return (
        <div id="cont">
            <div id="form">
                <h1>Nuestras Tiendas</h1>
                <label>Seleccione la región</label>
                <select id="address_region" title="Seleccionar región">
                </select>
                <label>Seleccione la comuna</label>
                <select id="address_commune" title="Seleccionar comuna" disabled="disabled">
                </select>
                <label>Seleccione la tienda</label>
                <select id="address_store" title="Seleccionar tienda" disabled="disabled">
                </select>
                <table id="store_info">
                    <tr>
                        <th>Nombre tienda</th>
                    </tr>
                    <tr>
                        <td id="slot_name"></td>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                    </tr>
                    <tr>
                        <td id="slot_address"></td>
                    </tr>
                    <tr>
                        <th>Horario</th>
                    </tr>
                    <tr>
                        <td id="slot_schedule"></td>
                    </tr>
                    <tr>
                        <th>Contacto</th>
                    </tr>
                    <tr>
                        <td id="slot_contact"></td>
                    </tr>
                </table>
            </div>
            <div id="map"><div></div></div>
        </div>
   )
}

export default StoreList

