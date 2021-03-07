import { App, defineAsyncComponent } from 'vue'
import init, { apiOptionsType } from './init'
import { getMaps } from './api'

const install = (_app: App, options: apiOptionsType): void => {
  init(options)
}

export const gmapsMap = defineAsyncComponent(
  () => import('./components/Map.vue')
)
export const gmapsCircle = defineAsyncComponent(
  () => import('./components/Circle.vue')
)
export const gmapsMarker = defineAsyncComponent(
  () => import('./components/Marker.vue')
)
export const gmapsPolygon = defineAsyncComponent(
  () => import('./components/Polygon.vue')
)
export const gmapsPolyline = defineAsyncComponent(
  () => import('./components/Polyline.vue')
)
export const gmapsPopup = defineAsyncComponent(
  () => import('./components/Popup.vue')
)
export const gmapsRectangle = defineAsyncComponent(
  () => import('./components/Rectangle.vue')
)

export { getMaps }
export default install
