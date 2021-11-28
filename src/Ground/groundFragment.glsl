// varying vec2 vUv;

// #pragma glslify: voronoi2d = require('glsl-voronoi-noise/2d')
// #pragma glslify: snoise2 = require(glsl-noise/simplex/2d) 

float str = step(0.1, voronoi2d(vUv * 1000.));
str = mix(1., str, step(0.7, snoise(vUv * vec2(100., 200.))));
gl_FragColor = vec4(vec3(str), 1. - str);
