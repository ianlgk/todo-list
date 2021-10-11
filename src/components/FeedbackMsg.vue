<template>
    <div class="task-counter-container">
        {{ msg }}
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['msg'])
    }
}
</script>

<style>
.task-counter-container {
  background-color: #61e8b0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}
</style>