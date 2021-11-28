import { extendMaterial } from 'three-extend-material'
// import { MeshStandardMaterial } from 'three'
import * as THREE from 'three'

export const groundMaterial = extendMaterial(
    THREE.MeshStandardMaterial as any,
    {}
)
