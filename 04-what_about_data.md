![](imgs/pipeline-v2.png)

CPU **>** GPU Memory **>** Render Pipeline **>** Screen

Note:
So let's get serious and speak about cost. Let's have an adult conversation about efficiency...
WebGL render stuff fast. Why? because it is his own processing unit that runs multiple threats in parallel... right?
For that need to manage his own resolrse. Those resorses have to be uploaded in the GPU memory.

What are those resources... esentially geometries and textures

--

![](http://thebookofshaders.com/03/08.png)

Note:
Passing data from the CPU to the GPU is one of the most important the bottle necs of the pipeline.
The more calls you make, the less fast your engine goes. 
- Like an ikea furniture
- 
Imagine it as....
The name of the game is don't disturb the GPU, let it do his game non stop.
For that their resources are separate... 
Think more metaphors

--

![](http://thebookofshaders.com/14/02.jpg)

Note:
Geometries are points

--

![](imgs/vertfrags.png)

Note:
asociated with color. Those positions get connected in triangles. And their colors interpolated.

--

![](imgs/img00017.png)

Note:
Images are apply to the geometry, like fabric to canvas

--

![](http://thebookofshaders.com/14/01.jpg)

Note:
like fabric

--

![](http://thebookofshaders.com/14/03.jpg)

Note:
to a canvas

---

<!-- .slide: data-background="#020303" -->
<iframe class='fit' width="100%" height="100%" style='min-height: 1000px;' data-src="http://patriciogonzalezvivo.github.io/LineOfSight/"></iframe>

[LineOfSight](http://patriciogonzalezvivo.github.io/LineOfSight/)

Note:
When I was making LineOfSight I found my self in the dilema of how to update the position of 1500 moving targets wit precession.

--

<img src='http://thebookofshaders.com/14/muybridge.jpg' height="500px"> <canvas class='sandbox' data-fragment-url='http://thebookofshaders.com/14/texture-sprite.frag' data-textures="http://thebookofshaders.com/14/muybridge.jpg" width='500px' height='500px'></canvas>


Note:
to have something moving smoothly need to generate the illusion of animation... that's 24fps


--

~1500 obj x 24ps = 
**36,000** <!-- {_class="fragment"} -->


calls a second <!-- {_class="fragment"} -->

Note:
so if I want to animate 1500 satellites all at once... I need to update the position of each satellite 24 times a second....
that's is 36000 calls per seconds.... in a browser : /

How did I solve this dilema?

--

![](imgs/img00017.png)

Note:
Well, remember that the GPU only thing you can upload to the GPU memory are Geometry and Images.  

--

![](http://thebookofshaders.com/14/01.jpg)

Note:
So I can use the Images

--

<!-- .slide: data-background="#2E2A27" -->
![](imgs/roll.jpg)

Note:
as the a partiture... like pianola roll  

--

![](imgs/texture.png)

Note:
I can encode the position of moving objects into series of colors, each satellite (which have a geometry... ) will read a different line of this partiture.

--

![](imgs/250satsJson.png) ![](imgs/250satsImg.png)

--

![](imgs/1600satsJson.png) ![](imgs/1600satsImg.png)

--

# 10%
<!-- .slide: data-background="#17141B" -->

--

<!-- .slide: data-background="#17141B" -->
![](imgs/lost_sat.jpg)

Note:
So the next problem to solve was how each satellite know which line to read?

--

<!-- .slide: data-background="#000000" -->
![](imgs/prism.jpg)

Note:
well... I can also encode in the color of the geometry the number of the row.
I used again color to encode the information from the CPU to GPU

--

```js
  function() {
      var hovered = feature.id === properties.hovered ? 0 : 1;
      return [(Math.floor(feature.id/255))/255, (feature.id%255)/255, hovered ]; 
  }
```

--

```glsl
float getIndex (vec2 encodedIndex) {
    return (encodedIndex.x*65025.+encodedIndex.y*255.)+.5;
}

void main () {
    ...
    float index = getIndex(color.st);
    if (v_color.b < .5) {
        // If is hoover
    }
    ...
}

```

--

<!-- .slide: data-background="#000000" -->
![](imgs/galaxy.jpg)

Note:
In the same way stars from far far away

--

<!-- .slide: data-background="#000000" -->
![](imgs/spectra.jpg)

Note:
send us their information of their quimical composition in the light the produce...

---

Better examples of Data2Image

Note:
More examples of data into images
- Weather data
- Crazy size something encoded into image

---

## Thank you

[patricio.io](http://patricio.io) | [@patriciogv](https://twitter.com/patriciogv)

--

??