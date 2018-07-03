
$(function() {
    if ($a = null, $current = "" == ($current = $(location).attr("href").split("/").pop()) ? "index.html" : $current, localStorage && comparePasstime(localStorage.getItem("menu_datetime"), 10) && localStorage.getItem("menu")) {
      var e = $(localStorage.getItem("menu"));
      e.find("a[href$='" + $current + "']").addClass("active"), $a = e.find(".box a"), $("#sidemenu").append(e)
    } else {
      sidemenuHandler();
    }

    if ($(".date").length <= 0) {
      var n = new Date;
      $(".folder").append($("<span/>").addClass("date").append(n.toISOString().substring(0, 10)))
    }

    $(".change_page").length <= 0 && $("body").append($("<div/>").addClass("change_page").append([$("<div/>").addClass("icon-chevron-thin-up"), $("<div/>").addClass("icon-chevron-thin-down")])), $("#logo").length <= 0 && $("body").append($("<div/>").attr("id", "logo").text("by Chestnut Wu")), $(".icon-chevron-thin-up, .icon-chevron-thin-down").click(function() {
        if (null === $a) return !1;
        if (-1 === (index = $a.index($a.filter(".active")))) return !1;
        switch (this.className) {
            case "icon-chevron-thin-up":
                index = --index < 0 ? $a.length - 1 : index;
                break;
            case "icon-chevron-thin-down":
                index = ++index > $a.length - 1 ? 0 : index;
                break;[]
        }
        window.location.assign($a.eq(index).attr("href"));

    }), $(document).keydown(function(e) {
        if (null === $a) return !1;
        if (-1 === (index = $a.index($a.filter(".active"))) ) return !1;
        switch (e.keyCode) {
            case 38:
                index = --index < 0 ? $a.length - 1 : index;
                break;
            case 40:
                index = ++index > $a.length - 1 ? 0 : index;
                break;
            default:
                return;
        }
        window.location.assign($a.eq(index).attr("href"));
    })
});

function sidemenuHandler() {
    $.get("sidemenu.html?t=" + new Date().getTime(), function(e) {
        localStorage && (localStorage.setItem("menu", e), localStorage.setItem("menu_datetime", new Date));
        var n = $(e);
        n.find("a[href$='" + $current + "']").addClass("active"), $a = n.find(".box a"), $("#sidemenu").append(n)
    })
}

function comparePasstime(e, n) {
    return new Date <= new Date(new Date(e).getTime() + 6e4 * n) ? !0 : !1
}
