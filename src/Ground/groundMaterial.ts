import { extendMaterial } from 'three-extend-material'
import * as THREE from 'three'
import noise2d from '../shaders/noise2d.glsl?raw'
import voronoi2d from '../shaders/voronoi2d.glsl?raw'
import groundFragment from './groundFragment.glsl?raw'

const useUv = `#define USE_UV`

export const groundMaterial = extendMaterial(
    THREE.MeshStandardMaterial as any,
    {
        header: useUv,
        fragment: {
            '#include <clipping_planes_pars_fragment>': noise2d + voronoi2d,
            '#include <dithering_fragment>': groundFragment,
        },
    }
)
