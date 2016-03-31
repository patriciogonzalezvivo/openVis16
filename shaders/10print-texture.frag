// Author: Patricio Gonzalez Vivo
// Title: 10 Print 

#ifdef GL_ES
precision mediump float;
#endif

uniform sampler2D u_tex0;
uniform vec2 u_tex0Resolution;

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float random (in vec2 st) {
    return texture2D(u_tex0,fract(st/u_tex0Resolution)).z;
    // return fract(sin(dot(texture2D(u_tex0,fract(st/u_tex0Resolution)).xyz,vec3(-0.107,0.662,-0.336)))*43758.5453123);
}

float rect(vec2 _st, vec2 _size){
    _size = vec2(0.5)-_size*0.5;
    vec2 uv = smoothstep(_size,_size+vec2(1e-4),_st);
    uv *= smoothstep(_size,_size+vec2(1e-4),vec2(1.0)-_st);
    return uv.x*uv.y;
}

float box(vec2 st, vec2 size){
    return 1.-rect(st,size);
}

float hex(vec2 st, float t){
    st = st*vec2(2.,6.);
    vec2 fpos = fract(st);
    vec2 ipos = floor(st);
    
    if (ipos.x == 1.0) {
        fpos.x = 1.-fpos.x;
    }
    fpos.x += .2;
    
    if (ipos.y < 0. || ipos.y > 5. || 
        ipos.x < 0. || ipos.x > 1. ) {
        return 1.;
    }
    
    float value = random(vec2(ipos.y, floor(t)));
    value = step(.5,value);
    
    return 1.0- mix(rect(fpos, vec2(1.,.7)),
            		rect(fpos, vec2(1.5,.7)),
               		value);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float ratio = u_resolution.x/u_resolution.y;
    float scale = 50.;
    st.x *= ratio;
    
    float time = u_time*0.3;
    vec2 vel = vec2(0.,-floor(time));

    st *= scale;
    vec2 ipos = floor(st);
    vec2 fpos = fract(st);

    vec2 tile = mix(fpos,vec2(1.0-fpos.x,fpos.y),step(.5,random(ipos + vel)));

    float color = 0.0;
    if (ipos.y > 0.0 || ipos.x < fract(time)*scale*ratio) {
        color = smoothstep(tile.x-0.25,tile.x,tile.y)-smoothstep(tile.x,tile.x+0.25,tile.y);
    }    

    gl_FragColor = vec4(vec3(color),1.0);
}