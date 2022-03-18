<template>
  <div class="player">
    <p>{{ player.name }}</p>
    <p>{{ player.team }} - {{ player.position }}</p>
    <p>Home Runs: {{ player.hr }}</p>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.player {
  border: 3px solid;
  border-radius: 0.4rem;
  padding: .8rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}

.player p:first-child {
  font-weight: bold;
  font-size: 1rem;
  margin: 1rem 0;
}

.player p:last-child {
  font-style: italic;
  font-size: 0.8rem;
  margin-top: .8rem;
}

.player:hover {
    background-color: lightgrey;
    color: black;
    border: 3px solid #686868;
}
</style>
