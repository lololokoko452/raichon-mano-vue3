import { defineStore } from 'pinia'
import ky from 'ky'

export const useAmiiboStore = defineStore('amiibo', {
  state: () => ({
    amiibos: [],
    randomAmiibos: []
  }),
  actions: {
    async fetchAmiibos() {
      try {
        const response = await ky.get('https://www.amiiboapi.com/api/amiibo/').json()
        this.amiibos = response.amiibo
        this.getRandomAmiibos()
      } catch (error) {
        console.error('Failed to fetch amiibos:', error)
      }
    },
    getRandomAmiibos() {
      const amiibosSortedRandomly = this.amiibos.sort(() => 0.5 - Math.random())
      this.randomAmiibos = amiibosSortedRandomly.slice(0, 3)
    }
  }
})
