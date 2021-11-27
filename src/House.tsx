import { defineComponent } from 'vue'

export const House = defineComponent({
    name: 'House',
    setup() {
        return () => (
            <mesh>
                <boxGeometry />
                <meshBasicMaterial color="blue" />
            </mesh>
        )
    },
})
