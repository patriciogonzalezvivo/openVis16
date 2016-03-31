
how to apply **shaders** to a **map**?

Note:
So, how shaders are applied to maps?

--


---

<iframe class='fit' width="100%" height="100%" data-src="tangram.html?style=tiles#2/0/0"></iframe>

Note:
Well in Mapzen we have a webGL engine call Tangram.
It takes vector tiles from OSM data (shout out to OSM contributors)....

---

<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="tangram.html?style=tilt-orig#15/40.7076/-74.0146"></iframe>

Note:
extrude them into geometry

---

<!-- .slide: data-background="#000000" -->
<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="tangram.html?style=tilt-patterns-orig#15/40.7076/-74.0146"></iframe>

Note:
and pass to the GPU to render to produce maps like the one I show you at the beginning.


---

<!-- .slide: data-background="#1D1D1D" -->
<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="tangram.html?style=tilt-gotham-orig#15/40.7076/-74.0146"></iframe>

Note:
and pass to the GPU to render to produce maps like the one I show you at the beginning.

---



<!-- .slide: data-background="#26282C" -->
<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="https://mapzen.com/tangram/play/?scene=https://rawgit.com/tangrams/tangram-sandbox/gh-pages/styles/default.yaml"></iframe>

Note:
This is TangramPlay, a tool we made with Lou Huang to live code the scene files we use for tangram.
Lou an amazing UI engineer and have push this into an awesome tool to work with.
You can see is very similar to other style guides, like for tilmil or cartoCSS.