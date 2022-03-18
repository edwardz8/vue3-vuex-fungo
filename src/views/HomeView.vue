<script lang="ts">
import { ref } from "vue";
import allPlayers from "@/data/players.js";
import PlayerCard from "@/components/PlayerCard.vue";

export default {
  components: {
    PlayerCard,
  },
  setup() {
    const players = ref(allPlayers);
    return {
      players,
    };
  },
};
</script>

<template>
  <main>
    <div class="wrapper">
      <div v-for="player in players" :key="player.id">
        <player-card
          :player="player"
          @click.once="$store.dispatch('addToFavorites', player)"
        />
      </div>
    </div>

    <!-- favorites -->
    <h3 v-if="$store.state.favorites.length">Favorites</h3>
    <div class="wrapper">
      <div v-for="player in $store.state.favorites" :key="player.id">
        <player-card
          :player="player"
          @click="$store.dispatch('removeFavorite', player)"
        />
      </div>
    </div>
  </main>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
</style>
