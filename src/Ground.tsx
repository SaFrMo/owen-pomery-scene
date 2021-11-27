import { defineComponent } from 'vue'

export const Ground = defineComponent({
    name: 'Ground',
    setup() {
        return () => (
            <mesh position-y={-0.5} rotation-x={Math.PI * -0.5} scale={100}>
                <planeGeometry />
                <meshBasicMaterial color="green" transparent opacity={0.4} />
            </mesh>
        )
    },
})
