import { defineComponent, onMounted, ref } from 'vue'
import groundVert from './groundVert.glsl?raw'
import groundFragment from './groundFragment.glsl'
import { groundMaterial } from './groundMaterial'
// import { groundMaterial } from './groundMaterial'

export const Ground = defineComponent({
    name: 'Ground',
    setup() {
        const args: THREE.ShaderMaterialParameters = {
            fragmentShader: groundFragment,
            vertexShader: groundVert,
        }
        const ground = ref(
            <mesh
                receiveShadow
                position-y={-0.5}
                rotation-x={Math.PI * -0.5}
                scale={100}
                // ref={ground}
            >
                <planeGeometry />
                <meshBasicMaterial />
                {/* <shaderMaterial args={[args]} /> */}
                {/* <groundMaterial /> */}
            </mesh>
        )
        onMounted(() => {
            const mesh = ground.value.el?.instance as THREE.Mesh
            mesh.material = groundMaterial
        })

        return () => ground.value
    },
})
