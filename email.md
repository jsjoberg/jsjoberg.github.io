---
layout: default
title: My email
permalink: /email/
---
## Riddle me this
You can reach me by email, if you can read this. 😋
<pre id="email">JavaScript protected</pre>


<script>
var e = document.getElementById("email"),
    d = "jemcjgimbg.sraoo@l".split("").map(t => t.charCodeAt(0)),
    n = d.length,
    f = (k, x) => {
      e.textContent = String.fromCharCode.apply(null, x);
      setTimeout(() => f((k+1)%n, x.map((c, i) =>
        i === (5*k)%n ? d[k] : i === (5*k+5)%n ? d[i] : c
      )), 150);
    };
f(0, d);
</script>