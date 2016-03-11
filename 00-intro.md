<!-- .slide: data-background="#000000" -->
### Enhancing your maps & visualizations with

# WebGL GLSL Shaders

<canvas class='sandbox' data-fragment-url='http://thebookofshaders.com/log/160302022724.frag' width='1200px' height='300px' style='margin: 60px'></canvas>

*by* **Patricio Gonzalez Vivo**

<span style='font-size: 16px; font-weight: 100; color: white;'> patricio.io | @patriciogv </span> 

<span style='font-size: 16px; font-weight: 100; color: white;'> mapzen.com | @mapzen </span> 

---

<!-- .slide: data-background="#000000" -->
<iframe class='fit' width='100%' height='100%' style='min-height: 1000px;' data-src='http://patriciogonzalezvivo.github.io/RandomCity'></iframe>

Note:
Welcome to a universe of procedural random...

Well that's not totally true... the buildings, roads and water front lines comes from OpenStreetMap... carefully curated and chopped into tiles in Mapzen's servers... extruded on Tangram... the rest... the patterns you see... the grid... the changing numbers... the pulsing on the roads...  the movement of the camera...  all that is constructed in real time in the graphic card.

The language you use to program your graphic card is call shaders. Is a blend of C... with some native mathematical functions. 
But is very limited... for example there is no random. So in order to use this cities I use this functions...

---

```glsl
y = fract(sin(x)*43758.5453123);
```

Note:
For one dimentional random
