(function () {
  console.log('tallas home ran !')

function find_parent(n: any,e: any)
{
  while ( e && e.nodeName !== n ) e = e.parentNode;
  return e;
}
document.addEventListener('click', function(evt)
{
  if (evt == null) return;

  let temp0 = <HTMLLIElement>evt.target;
  let filtrar = false;

  if ( (temp0.firstChild as any).data == "Filtrar") filtrar = true;
  if ( (temp0.firstChild as any).firstChild !== null && (temp0.firstChild as any).firstChild.data == "Filtrar") filtrar = true;

  if (filtrar)
  {
    let tallas = document.querySelectorAll('.selected_talla');
    let tipo   = document.querySelector('.vtex-tab-layout-0-x-listItemActive');
    let re1    = /listItem--([^-\s]+)--mapequals([^-\s]+)---([^-\s]+)[-]*specificationFilter-([0-9]+)/;
    let re2    = /menuItem--([^-\s]+)-specificationFilter_([0-9]+) /;
    let t = re1.exec( <string><unknown>tipo?.classList );

    let cat = '', map='', tip='', sf='';

    if ( t==null) return;
    if ( t.length == 4)
	{
      cat = t[1];
      map = t[2];
      tip = t[3];
      sf  = t[4];
    }
	else
	  return;

    let url = "/"+cat+"/";
    let uri = "";

    tallas.forEach( (x)=>
    {
      let d = re2.exec( <string><unknown>x.classList );
	  if (d==null) return;
      url += d[1] + "/";
      uri += ",specificationFilter_"+d[2];
    });
    url += tip + "?map=" + map + uri + ",specificationFilter_" + sf;
    top.location.href = url;
    return;
  }

  if ( temp0.className.indexOf("-specificationFilter")>0 )
  {
    if ( temp0.nodeName != "LI" )
    {
      temp0 = find_parent("LI",temp0);
      if (temp0 == null) return;
    }

    if (temp0.classList.contains('selected_talla'))
    {
      temp0.classList.remove("selected_talla");
      temp0.style.background = '';
    }
    else
    {
      temp0.classList.add("selected_talla");
      temp0.style.background = '#91e68a';
    }
  }

}
, false);

})()
