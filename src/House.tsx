import { defineComponent } from 'vue'

export const House = defineComponent({
    name: 'House',
    setup() {
        return () => (
            <mesh castShadow receiveShadow>
                <boxGeometry />
                <meshStandardMaterial color="blue" />
            </mesh>
        )
    },
})
