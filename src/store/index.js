import { createStore } from 'vuex'
import allPlayers from "@/data/players.js";

export default createStore({
    state: {
        allPlayers,
        favorites: []
    },
    mutations: {
        UPDATE_FAVORITES(state, payload) {
            state.favorites = payload
        },
        REMOVE_FAVORITE(state, index) {
            state.favorites.splice(index, 1)
        }
    },
    actions: {
        addToFavorites(context, payload) {
            const favorites = context.state.favorites
            favorites.push(payload)
            context.commit('UPDATE_FAVORITES', favorites)
        },
        removeFavorite(context, index) {
            context.commit('REMOVE_FAVORITE', index)
        }
    }
})