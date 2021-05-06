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
		  <style>
            .gm-style-iw button {
                display: none !important;
            }
            * {
                box-sizing: border-box;
            }
            #cont {
                position: relative;
                overflow: hidden;
                min-height: 30em;
            }
            #form {
                text-align: left;
                vertical-align: top;

                position: relative;
                z-index: 1;
                padding: 2em;
                background-color: #F7F1E7;
                box-shadow: 0 0 1em -0.2em black;
            }
            #map {
                position: relative;
                height: 20em;
            }
            #map > * { 
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
            }
            #form > * { 
                margin: 0;
                padding: 0.5em;
            }
            #form > label {
                display: block;
            }
            #form > select {
                min-width: 100%;
            }
            #store_info {
                visibility: collapse;
            }
            #store_info.populated {
                visibility: visible;
            }
            @media (min-width: 991px)
            {
                #form {
                    margin: 4em;
                    width: 30em;
                    border-radius: 0.5em;
                }
                #map {
                    position: absolute;
                    height: auto;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                }
            }
			</style>
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






