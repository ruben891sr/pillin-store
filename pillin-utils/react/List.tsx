/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Helmet } from 'vtex.render-runtime'
import './List.css'
 

const StoreList = ({ }) => {

   return (
     <>
	 {(
        <Helmet>
          <title>parsedTitle</title>
          <meta name="description" content="parsedDescription" />
          <script src="/files/pillin-custom.js"></script>
          <link rel="stylesheet" href="/files/pillin-custom.css" />
        </Helmet>
      )}
        <div id={`cont`} className={`pillin-pillin-utils-0-x-cont srtest0`}>
            <div id={`form`} className={`pillin-pillin-utils-0-x-form`}>
                <h1>Nuestras Tiendas</h1>
                <label>Seleccione la región</label>
                <select id={`address_region`} title={`Seleccionar región`}>
                </select>
                <label>Seleccione la comuna</label>
                <select id={`address_commune`} title={`Seleccionar comuna`} disabled={true}>
                </select>
                <label>Seleccione la tienda</label>
                <select id={`address_store`} title={`Seleccionar tienda`} disabled={true}>
                </select>
                <table id={`store_info`} className={`pillin-pillin-utils-0-x-store_info`}>
				<tbody>
                    <tr>
                        <th>Nombre tienda</th>
                    </tr>
                    <tr>
                        <td id={`slot_name`}></td>
                    </tr>
                    <tr>
                        <th>Dirección</th>
                    </tr>
                    <tr>
                        <td id={`slot_address`}></td>
                    </tr>
                    <tr>
                        <th>Horario</th>
                    </tr>
                    <tr>
                        <td id={`slot_schedule`}></td>
                    </tr>
                    <tr>
                        <th>Contacto</th>
                    </tr>
                    <tr>
                        <td id={`slot_contact`}></td>
                    </tr>
				</tbody>
                </table>
            </div>
            <div id={`map`} className={`pillin-pillin-utils-0-x-map`}><div></div></div>
        </div>
      </>
   )
}

export default StoreList






