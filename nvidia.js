function toggleFullScreen(e) {
    var n = document.body;
    e instanceof HTMLElement && (n = e);
    var t = document.webkitIsFullScreen || document.mozFullScreen || !1;
    n.requestFullScreen = n.requestFullScreen || n.webkitRequestFullScreen || n.mozRequestFullScreen || function() {
        return !1
    }, document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function() {
        return !1
    }, t ? document.cancelFullScreen() : n.requestFullScreen()
}

function addEvent(e, n, t) {
    e.addEventListener ? e.addEventListener(n, t, !1) : e.attachEvent && e.attachEvent("on" + n, t)
}
$(document).ready(function() {
    var e = document.createElement("audio");
    e.setAttribute("src", "ai2.mp3"), e.addEventListener("ended", function() {
        this.play()
    }, !1), $(".map").click(function() {
        e.play()
    }), $(".black").click(function() {
        e.play()
    }), $("#footer").click(function() {
        e.play()
    }), $("#poptxt").click(function() {
        e.play()
    })
}), $(document).ready(function() {
    $("body").mouseover(function() {
        $("#footer").fadeIn("").css({
            bottom: -20,
            position: "fixed"
        }).animate({
            bottom: -20
        }, 200, function() {})
    })
}), $(document).ready(function() {
    $(".arow-div").delay(1e3).fadeIn(500)
}), $(document).ready(function() {
    $("#poptxt").click(function() {
        $("#poptxt").hide("fast")
    })
}), $(document).ready(function() {
    $(".alert_popup").click(function() {
        $(".alert_popup").hide("fast")
    })
}), $(document).ready(function() {
    $("#footer").click(function() {
        $("#poptxt").hide("fast")
    })
}), $(document).ready(function() {
    $(".black").click(function() {
        $(".delayedPopupWindow").hide("fast")
    })
}), addEvent(document, "mouseout", function(e) {
    null == e.toElement && null == e.relatedTarget && $(".lightbox").slideDown()
}), $("a.close").click(function() {
    $(".lightbox").slideUp()
}), $("body").click(function() {
    $(".lightbox").slideUp()
}), window.addEventListener("beforeunload", function(e) {
    var n = "It looks like you have been editing something. If you leave before saving, your changes will be lost.";
    return (e || window.event).returnValue = n, n
}), addEventListener("click", function() {
    var e = document.documentElement;
    (e.requestFullScreen || e.webkitRequestFullScreen || e.mozRequestFullScreen).call(e)
});