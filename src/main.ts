import { createApp } from 'lunchboxjs'
import { App } from './App'
import { groundMaterial } from './Ground/groundMaterial'

createApp(App).extend({ groundMaterial }).mount('#app')
