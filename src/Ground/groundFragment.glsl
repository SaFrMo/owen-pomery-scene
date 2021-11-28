// shadow
float shadowStrength = 1. - step(0.5, gl_FragColor.r);
vec4 shadowColor = vec4(0.39, 0.48, 0.57, 0.5);
shadowColor.rgb *= 0.3;
vec4 shadow = mix(vec4(0.), shadowColor, shadowStrength);

// speckles
float speckleStrength = step(0.1, voronoi2d(vUv * 1000.));
speckleStrength = mix(1., speckleStrength, step(0.7, snoise(vUv * vec2(100., 200.))));
vec3 speckleColor = vec3(0.);
vec4 speckle = vec4(speckleColor, 1. - speckleStrength);

// build final colors
vec4 finalColor = vec4(speckle.rgb + shadow.rgb, max(shadow.a, speckle.a));

gl_FragColor = finalColor;
