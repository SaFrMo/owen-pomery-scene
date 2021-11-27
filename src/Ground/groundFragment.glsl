varying vec2 vUv;

#pragma glslify: voronoi2d = require('glsl-voronoi-noise/2d')

void main(){
    float str = step(0.02, voronoi2d(vUv * 100.));
    gl_FragColor = vec4(vec3(str), 1. - str);
}