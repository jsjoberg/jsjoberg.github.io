(function (r, e) {
    r.open("GET", "https://jsx-analytics.glitch.me/log?pathname=" + window.location.pathname, true);
    r.onreadystatechange = function () {
        var nok = true;
        if (r.readyState === XMLHttpRequest.DONE) {
            if (r.status >= 200 && r.status < 400) {
                var t = JSON.parse(r.responseText);
                if (t.message === "success") {
                    e.innerText = "✔️ " + t.count + " tallied page view" + (t.count !== 1 ? "s" : "");
                    nok = false;
                }
            }
            if (nok) {
                e.innerText = "❌ analytics are down";
            }
        }
    };
    r.send(null);
})(
    new XMLHttpRequest(),
    document.getElementById("stats")
);
