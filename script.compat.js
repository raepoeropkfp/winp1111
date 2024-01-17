! function() {
    "use strict";
    var t, a = window.location,
        o = window.document,
        r = o.getElementById("plausible"),
        l = r.getAttribute("data-api") || (t = (t = r).src.split("/"), u = t[0], t = t[2], u + "//" + t + "/api/event");

    function s(t, e) {
        t && console.warn("Ignoring Event: " + t), e && e.callback && e.callback()
    }

    function e(t, e) {
        if (/^localhost$|^127(\.[0-9]+){0,2}\.[0-9]+$|^\[::1?\]$/.test(a.hostname) || "file:" === a.protocol) return s("localhost", e);
        if (window._phantom || window.__nightmare || window.navigator.webdriver || window.Cypress) return s(null, e);
        try {
            if ("true" === window.localStorage.plausible_ignore) return s("localStorage flag", e)
        } catch (t) {}
        var i = {},
            n = (i.n = t, i.u = a.href, i.d = r.getAttribute("data-domain"), i.r = o.referrer || null, e && e.meta && (i.m = JSON.stringify(e.meta)), e && e.props && (i.p = e.props), new XMLHttpRequest);
        n.open("POST", l, !0), n.setRequestHeader("Content-Type", "text/plain"), n.send(JSON.stringify(i)), n.onreadystatechange = function() {
            4 === n.readyState && e && e.callback && e.callback()
        }
    }
    var i = window.plausible && window.plausible.q || [];
    window.plausible = e;
    for (var n, p = 0; p < i.length; p++) e.apply(this, i[p]);

    function c() {
        n !== a.pathname && (n = a.pathname, e("pageview"))
    }
    var d, u = window.history;
    u.pushState && (d = u.pushState, u.pushState = function() {
        d.apply(this, arguments), c()
    }, window.addEventListener("popstate", c)), "prerender" === o.visibilityState ? o.addEventListener("visibilitychange", function() {
        n || "visible" !== o.visibilityState || c()
    }) : c()
}();