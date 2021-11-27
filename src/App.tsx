import { defineComponent, onMounted } from 'vue'
import { House } from './House'
import { Ground } from './Ground/Ground'
import { camera } from 'lunchboxjs'
import * as THREE from 'three'

export const App = defineComponent({
    name: 'App',
    setup() {
        onMounted(() => {
            camera.value?.lookAt(new THREE.Vector3(0, 0, 0))
        })

        return () => (
            <lunchbox cameraPosition={[10, 10, 10]} transparent>
                <Ground />
                <House />
            </lunchbox>
        )
    },
})
