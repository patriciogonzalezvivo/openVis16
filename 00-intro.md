<!-- .slide: data-background="#000000" -->
<span style='font-size: 31px; font-weight: 300; color: white; text-transform: uppercase;'> Enhancing your maps & visualizations with </span>

<span style='font-size: 66px; font-weight: 400; color: white; text-transform: uppercase;'> WebGL GLSL Shaders</span>


<canvas class='sandbox' data-fragment-url='shaders/1459359692769.frag' width='1000px' height='100px' style='width: 90%; height: 40%; margin: 60px'></canvas>

<!-- <canvas class='sandbox' data-fragment-url='shaders/160302022724.frag' width='1200px' height='300px' style='width: 90%; height: 40%; margin: 60px'></canvas> -->

<div style="margin-top: 50px;">
<span style='font-size: 16px; font-weight: 100; color: white;'> by </span>  <span style='font-weight: 300; color: white;'> Patricio Gonzalez Vivo </span> 
</div>

<p style='font-size: 16px; font-weight: 100; color: white; line-height: 1; padding: 0px; margin: 5px; margin-top: 20px;'> patricio.io | @patriciogv </p>
<p style='font-size: 16px; font-weight: 100; color: white; line-height: 1; padding: 0px; margin: 5px;'> mapzen.com | @mapzen </p> 

---

<!-- .slide: data-background="#000000" -->
<iframe class='fit' width='100%' height='100%' style='min-height: 1000px;' data-src='tangram.html?style=randomCity&animate=true#15/40.7076/-74.0146'></iframe> 


Note:
Welcome to a **universe of procedural random**...

Well...
That's not totally true... 
The buildings, roads and water lines comes from OpenStreetMap... 
Carefully curated and chopped into tiles in Mapzen's servers... 
extruded on Tangram JS...

the rest...

The **grid**, the **numbers**, the **patterns**, the **pulsing tiles**, the **movement of the camera**...
all that is constructed in real time on the graphic card of the client.

The language to program directly on the graphic card is call shaders. Is a blend of C... with some native mathematical functions. 
Because is a low level language is very powerfull... but with a very minimal API. 

For example there is no random. So in order to make this patterns I use this functions...

---

```glsl
            float pseudo_random = fract(sin(time) * 43758.5453123);
```

<a href="http://thebookofshaders.com/10/" style='font-size: .5em;' target="_blank">**+** information on pseudo random on shaders</a>

Note:
It's a pseudo random function constructed with the fractional part of a Sine function multiply by a big number.
