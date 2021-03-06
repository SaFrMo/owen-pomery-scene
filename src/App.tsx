import { defineComponent, onMounted } from 'vue'
import { House } from './House'
import { Ground } from './Ground/Ground'
import { camera } from 'lunchboxjs'
import * as THREE from 'three'

export const App = defineComponent({
    name: 'App',
    setup() {
        // mounted
        // ====================
        onMounted(() => {
            camera.value?.lookAt(new THREE.Vector3(0, 0, 0))
            ;(camera.value as THREE.OrthographicCamera).zoom = 1.5
        })

        // render function
        // ====================
        return () => (
            <lunchbox
                shadow={{ type: THREE.PCFSoftShadowMap }}
                cameraPosition={[10, 10, 10]}
                transparent
                ortho
            >
                <directionalLight
                    castShadow
                    position={[-10, 15, 8]}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />
                <ambientLight intensity={0.3} />
                <Ground />
                <House />
            </lunchbox>
        )
    },
})
