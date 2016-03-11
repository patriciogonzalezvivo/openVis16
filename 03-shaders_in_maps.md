
how to applied **shaders** to **map**?

Note:
So, how shaders are applied to maps?

--

??

---

<iframe class='fit' width="100%" height="100%" data-src="tangram.html?styles/tiles#2/0/0"></iframe>

Note:
Well in Mapzen we have a webGL engine call Tangram.
It takes vector tiles....

---

<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="tangram.html?styles/tilt-orig#15/40.7076/-74.0146"></iframe>

Note:
extrude them into geometry

---

<!-- .slide: data-background="#1D1D1D" -->
<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="tangram.html?styles/tilt-gotham-orig#15/40.7076/-74.0146"></iframe>

Note:
and pass to the GPU to render to produce maps like the one I show you at the beginning.

---

<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="https://mapzen.com/tangram/play/?scene=https://rawgit.com/tangrams/tangram-sandbox/gh-pages/styles/default.yaml"></iframe>

Note:
This is TangramPlay, a tool I made with Lou Hang to code the scene files we use for tangram.
You can see is very similar to other style guides, like for tilmil or cartoCSS