```glsl
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    st.x *= u_resolution.x/u_resolution.y;

    st += vec2(.0);
    vec3 color = vec3(1.);
    color = vec3(st.x,st.y,abs(sin(u_time)));

    gl_FragColor = vec4(color,1.0);
}
```

Note:
Shaders are small “C-like” programs that are execute in parallel in the graphic cards to compute single operations like the position of vertices or the color of a pixel.

--

# ??

Note:
Yeah... right?

--

![](http://thebookofshaders.com/00/gutenpress.jpg)

Note:
Shaders are for computer graphic what the **Gutenberg Press** was for books.

--

![](http://thebookofshaders.com/01/print.png)

Note:
They free us from the process of making graphics from the single threaten hand of the CPU to speed it up using multiple programable structures that prints one frame in a single cycle.
Let's picture it like this...

--

![](http://thebookofshaders.com/01/00.jpeg)
## CPU

Note:
Imagine this is your CPU. It's preatty great to do all sort of things. Excecutes complex task one after the other one.
But what about a huge stream of very tiny tinsy small task... for example computing information to display in the screen.
It need to calculate every single pixels of it 

--

800x600 = 480.000 pixels

at 60 mHz is 28.800.000

--

2560x1600 = 4.096.000

at 60 mHz is 245.760.000

--

![](http://thebookofshaders.com/01/03.jpeg)
## CPU

Note:
So... this is obviusly inviable.
Closely 16 year ago we find a salution to this particular problem.
Using parallel procesors. Small procesors... like an army of ants

--

![](imgs/ArduinoUno.jpg)
Note:
Imagine an arduino

--

![](imgs/arduinos.png)
Note:
Now imagine millons of arduinos. Well you have to imagine better than that... that's only 72 of them.
Imagine tht you can flash them all at once with the same firmware.

--

![](imgs/arduino.png)
Note:
Each one of them is connected to a single RGB Led. That's all they have to do. Computer the color of something.

--

![](http://thebookofshaders.com/01/03.jpeg)
## CPU

Note:
So now this amount of task pass all at once...

--

![](http://thebookofshaders.com/01/04.jpeg)
## GPU

Note:
From this smaller pipes... like water in strainer.

I guess in this methaphor this are toilet paper tubes... each pixel task is a ping pong ball.
Think on that the next time you are in the bathroom :)

... and that's a shader!

Nicolas García Belmonte give a better explanation about the rendering pipeline here last year.
I preser to concentrate just in fragments shaders... which toilet paper escence we just saw.

If you are interested in learning more about shaders I recomend an online book I have been working on call The Book of Shaders
