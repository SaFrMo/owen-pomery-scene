import { defineComponent } from 'vue'
import groundVert from './groundVert.glsl?raw'
import groundFragment from './groundFragment.glsl'

export const Ground = defineComponent({
    name: 'Ground',
    setup() {
        const args: THREE.ShaderMaterialParameters = {
            fragmentShader: groundFragment,
            vertexShader: groundVert,
        }

        return () => (
            <mesh
                receiveShadow
                position-y={-0.5}
                rotation-x={Math.PI * -0.5}
                scale={100}
            >
                <planeGeometry />
                <shaderMaterial args={[args]} />
            </mesh>
        )
    },
})
