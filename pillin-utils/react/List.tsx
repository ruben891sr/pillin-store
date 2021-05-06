/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import { Helmet } from 'vtex.render-runtime'
import './List.css'
 

var StoreList = ({ }) => {

   return (
     <>
	 {(
        <Helmet>
          <title>parsedTitle</title>
          <meta name="description" content="parsedDescription" />
			<script>
				document.addEventListener("DOMContentLoaded", srestoresinit);

				function srestoresinit ()
				{
					if (!document.getElementById("map"))
						return;
					setTimeout(srvtexinit, 0);
					var script = document.createElement("script");
					script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAKvpKOzDVG8dsSz90L6OQZuUJ0qh0CvSc&v=beta";
					script.addEventListener("load", srmapinit);
					document.head.appendChild(script);
				}

				var map, geo, mark, info;

				function srmapinit (ev)
				{
					var div = document.querySelector("#map > div");
					map = new google.maps.Map(div, {
						center: { lat: -34.397, lng: 150.644 },
						zoom:   8,
						gestureHandling: "none",
						disableDefaultUI: true });
					map.panTo({ lat: -33.589958, lng: -70.695051 });
					mark = new google.maps.Marker({ map, visible: false });
					info = new google.maps.InfoWindow;
					geo  = new google.maps.Geocoder;
				}

				async function mappancoord (coord, title)
				{
					if (!map)
						return;
					map.panTo(coord);
					map.setZoom(16);
					mark.setPosition(coord);
					mark.setVisible(true);
					info.setContent(title);
					info.open(map, mark);
				}
				async function mappanarray (order)
				{
					if (!map || !geo)
						return;
					mark.setVisible(false);
					info.close();
					var component = [ "Chile" ];
					for (var select of order)
					if (select.value != 0)
						component.unshift(select.value);
					else break;
					console.log(component);
					var ret = await geo.geocode({ address: component.join(",") });
					console.log("ret", ret.results.length, ret);
					map.fitBounds(ret.results[0].geometry.bounds, 10);
				}
				async function srvtexinit ()
				{ 
				  var fetched = window.data = await fetch("/api/logistics/pvt/configuration/pickuppoints", { headers: { "X-VTEX-API-AppKey":   "vtexappkey-pillin-KTRDYS", "X-VTEX-API-AppToken": "QHMNBTTFTYSQIBJWBUCRZLKNWZNPYATTCKERYJYDVRUZETBXRIYVUNCFXYRCFDHSEYOXXRXSWZVIRLICXQYQCXYOIZUZRWXRJBUGFEAZKFZVRUNLQPEPFRQHAZPXXXAA"}});
					var list = fetched.json();
					var places  = {};
					var reglat  = {};
					var regarr  = [];
					var regtree = {};
					for (var item of list)
					{
						var region  = item.address.state;
						var commune = item.address.neighborhood;
						if (places[region] == undefined)
						{
							places[region] = {};
							reglat[region] = item.address.location.latitude;
							regarr.push(region);
						}
						if (places[region][commune] == undefined)
							places[region][commune] = {};
						places[region][commune][item.name] = item;
					}
					regarr.sort((a, b) => reglat[b] - reglat[a]);
					for (var region of regarr)
						regtree[region] = places[region];
					console.log("REG", regtree);
					var order = [
						document.getElementById("address_region"),
						document.getElementById("address_commune"),
						document.getElementById("address_store")
					];
					populate(order[0], regtree);
					for (var item of order)
						item.addEventListener("input", change);
					function change (ev)
					{
						console.log("change", this);
						var index = order.indexOf(this);
						if (order[index].options[0].value == 0)
							order[index].remove(0);
						for (var select of order.slice(index +1))
						{
							while (select.options.length)
								select.remove(0);
							select.disabled = true;
						}
						var tree = regtree;
						var i    = 0;
						do
						{
							if (order[i] == undefined)
							{
								i = undefined;
								break;
							}
							if (order[i].value)
								tree = tree[order[i].value];
							else break;
						}
						while (++i)
						if (i != undefined)
						{
							var select = order[i];
							populate(select, tree);
							fillcard();
							mappanarray(order);
						}
						else
						{
							var store = tree;
							setTimeout(mappancoord, 0, {
									lat: store.address.location.latitude,
									lng: store.address.location.longitude },
								store.name);
							fillcard(store);
						}
					}
					function populate (select, collection)
					{
						console.log("populating", select);
						var option = document.createElement("option");
						option.text  = "Seleccionar";
						option.value = 0;
						select.add(option);
						for (var name in collection)
						{
							var option = document.createElement("option");
							option.text = name;
							select.add(option);
						}
						select.disabled = false;
					}
					function fillcard (store)
					{
						console.log("store", store);
						var data = {
							name:     "n/a",
							address:  "n/a",
							schedule: "n/a",
							contact:  "n/a",
						};
						if (store != undefined)
						{
							var today = (new Date).getDay();
							var hours;
							var sched;
							for (var item of store.businessHours)
							if  (item.dayOfWeek == today)
							{
								hours = item;
								break;
							}
							if (hours == undefined)
								hours = store.businessHours[0];
							sched = (hours != undefined) ?
								`${/^\d\d:\d\d/.exec(hours.openingTime)[0]}hrs - ` +
								`${/^\d\d:\d\d/.exec(hours.closingTime)[0]}hrs` :
								"n/a";
							data.name     = store.name;
							data.address  = `${store.address.street} ${store.address.number}`;
							data.schedule = sched;
							data.contact  = store.address.complement;
							document.getElementById("store_info").classList.add("populated");
						}
						else
							document.getElementById("store_info").classList.remove("populated");
						for (var key in data)
							document.getElementById(`slot_${key}`).textContent = data[key];
					}
				}
			</script>
        </Helmet>
      )}
        <div id={`cont`} className={`pillin-pillin-utils-0-x-cont srtest0`}>
            <div id={`form`} className={`pillin-pillin-utils-0-x-form`}>
                <h1>Nuestras Tiendas 2</h1>
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






