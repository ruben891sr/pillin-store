(function () {
    console.log('tallas home ran !');
    function find_parent(n, e) {
        while (e && e.nodeName !== n)
            e = e.parentNode;
        return e;
    }
    document.addEventListener('click', function (evt) {
        if (evt == null)
            return;
        var temp0 = evt.target;
        var filtrar = false;
        if (temp0.firstChild.data == "Filtrar")
            filtrar = true;
        if (temp0.firstChild.firstChild !== null && temp0.firstChild.firstChild.data == "Filtrar")
            filtrar = true;
        if (filtrar) {
            var tallas = document.querySelectorAll('.selected_talla');
            var tipo = document.querySelector('.vtex-tab-layout-0-x-listItemActive');
            var re1 = /listItem--([^-\s]+)--mapequals([^-\s]+)---([^-\s]+)[-]*specificationFilter-([0-9]+)/;
            var re2_1 = /menuItem--([^-\s]+)-specificationFilter_([0-9]+) /;
            var t = re1.exec(tipo === null || tipo === void 0 ? void 0 : tipo.classList);
            var cat = t[1];
            var map = t[2];
            var tip = t[3];
            var sf = t[4];
            var url_1 = "/" + cat + "/";
            var uri_1 = "";
            tallas.forEach(function (x) {
                var d = re2_1.exec(x.classList);
                url_1 += d[1] + "/";
                uri_1 += ",specificationFilter_" + d[2];
            });
            url_1 += tip + "?map=" + map + uri_1 + ",specificationFilter_" + sf;
            top.location.href = url_1;
            return;
        }
        if (temp0.className.indexOf("-specificationFilter") > 0) {
            if (temp0.nodeName != "LI") {
                temp0 = find_parent("LI", temp0);
                if (temp0 == null)
                    return;
            }
            if (temp0.classList.contains('selected_talla')) {
                temp0.classList.remove("selected_talla");
                temp0.style.background = '';
            }
            else {
                temp0.classList.add("selected_talla");
                temp0.style.background = '#91e68a';
            }
        }
    }, false);
})();
