---
layout: default
title: My email
permalink: /email/
---

You can reached me by email, if you can read this 😋
<pre id="email">JavaScript protected</pre>
<script>
var el = document.getElementById("email"),
    s = 'jemcjgimbg.sraoo@l',
    n = s.length,
    ms = s.split("").map(t => t.charCodeAt(0)),
    mask = Array(n).join(0).split(0).map((0).valueOf, 63);
(f => f(f, 0, mask))((f, k, xs) => {
  el.textContent = String.fromCharCode.apply(null, xs);
  setTimeout(() => {
    var p = Math.abs(k - 20);
    f(f, (k + 1) % 100, xs.map((k, i) =>
      i === 5 * p % n ? ms[p % n] : i === (5 * p + 5) % n ? 63 : k
    ));
  }, 150);
});
</script>
