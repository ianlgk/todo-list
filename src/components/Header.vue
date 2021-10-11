<template>
    <div class="header">
        <div class="img-container">
            <ImageResponsive :url="logoImg" title="VueJS - Logo" />
        </div>
        <h2 class="title">ToDo List - VueJS</h2>
        <div class="input-container">
            <input
                class="task-input"
                type="text"
                placeholder="Things to be done..."
                v-model="task"
            />
            <button
                class="input-button"
                type="button"
                @click.prevent="addTask"
            >
                +
            </button>
        </div>
    </div>
</template>

<script>
import ImageResponsive from '../components/ImageResponsive.vue'
import VueJSLogoImg from '../assets/logo.png'

export default {
    components: {
        ImageResponsive
    },
    data() {
        return {
            logoImg: VueJSLogoImg,
            task: ''
        }
    },
    methods: {
        addTask() {
            if (this.task.length === 0) {
                document.getElementById('input-warning').style.top = '2rem'
                setTimeout(() => document.getElementById('input-warning').style.top = '10rem', 3000)
                return;
            }
            this.$store.state.taskList.push({
                name: this.task,
                checked: false
            })
            this.$store.dispatch('updateTaskList', this.$store.state.taskList)
            this.task = ''
        }
    }
}
</script>

<style>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
}

.img-container {
  max-width: 100px;
}

.title {
  color: #35495e;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 800;
}

.input-container {
  width: 100%;
  display: flex;
}

.task-input {
  width: calc(100% - 40px);
  border: 1px solid lightgrey;
  border-bottom: 2px solid #48a787;
  border-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 10px 15px;
  transition: all 0.2s;
  font-size: 1rem;
}

.task-input:focus {
  box-shadow: inset 0px 0px 3px 3px rgb(231, 231, 231);
}

.input-button {
  width: 50px;
  height: 45px;
  font-size: 2rem;
  color: #FFF;
  background-color: #48a787;
  cursor: pointer;
  transition: all 0.2s;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.input-button:hover {
  filter: brightness(1.05);
}
</style>