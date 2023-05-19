import { writable } from "svelte/store"

export const cultScore = writable(parseInt(localStorage?.cultScore || 0))
cultScore.subscribe((v) => (localStorage.cultScore = v))
export const demonScore = writable(parseInt(localStorage?.demonScore || 0))
demonScore.subscribe((v) => (localStorage.demonScore = v))
export const boredomScore = writable(parseInt(localStorage?.boredomScore || 0))
boredomScore.subscribe((v) => (localStorage.boredomScore = v))

const locations = localStorage?.visitedLocations
  ? JSON.parse(localStorage.visitedLocations)
  : []
export const visitedLocations = writable(locations)
visitedLocations.subscribe(
  (v) => (localStorage.visitedLocations = JSON.stringify(v))
)

export const hasAntivirus = writable(
  JSON.parse(localStorage?.hasAntivirus) || false
)
hasAntivirus.subscribe((v) => (localStorage.hasAntivirus = v))

export const popups = writable([])
