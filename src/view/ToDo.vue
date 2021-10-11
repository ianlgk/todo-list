<template>
  <div class="container">
    <div id="input-warning">
      Empty task field, we need it to create a new task 😢
    </div>
    <div class="todo-container">
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
      <div class="list-container">
        <ul class="task-list" v-if="isTaskListEmpty">
          <li class="task" v-for="(task, index) in taskList" :key="index">
            <input
              :id="task.name"
              type="checkbox"
              @click="checkTask(task)"
              v-bind:checked="task.checked ? 'checked' : null"
            />
            <label
              :for="task.name"
            >
              {{ task.name }}
            </label>
            <Icon
              icon="bx:bx-trash"
              @click.native="removeTask(task)"
            />
          </li>
        </ul>
      </div>
      <div class="task-counter-container">
        {{ msg }}
      </div>
    </div>
    <div class="credits-container">
      Developed with by ❤️ Ian Langkammer Batista
    </div>
  </div>
</template>

<script>
import ImageResponsive from '../components/ImageResponsive.vue'
import VueJSLogoImg from '../assets/logo.png'
import { Icon } from '@iconify/vue2'
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    ImageResponsive,
    Icon,
  },
  data() {
    return {
      logoImg: VueJSLogoImg,
      taskList: this.$store.state.taskList,
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
      this.taskList.push({
        name: this.task,
        checked: false
      })
      this.$store.dispatch('updateTaskList', this.taskList)
      this.task = ''
    },
    removeTask(task) {
      this.taskList.splice(this.taskList.indexOf(task), 1)
      this.$store.dispatch('updateTaskList', this.taskList)
    },
    checkTask(task) {
      let id = this.taskList.indexOf(task)

      this.taskList[id].checked = !this.taskList[id].checked

      this.$store.dispatch('updateTaskList', this.taskList)
    }
  },
  computed: {
    ...mapGetters(['isTaskListEmpty', 'msg'])
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  font-family: Raleway, sans-serif;
  font-weight: 400;
}

body {
  background-color: #67e7b4;
}

@media screen and (max-width: 1080px) {
  html {
    font-size: 93.75%
  }
}

@media screen and (max-width: 768px) {
  html {
    font-size: 87.5%
  }
}

.container {
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

#input-warning {
  position: absolute;
  top: 10rem;
  background-color: #ff4040;
  color: #FFF;
  padding: 1rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.todo-container {
  background-color: #FFF;
  min-height: calc(70vh - 2rem);
  width: calc(100% - 10rem);
  max-width: calc(600px - 10rem);
  border-radius: 10px;
  box-shadow: 0px 0px 100px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem 5rem;
  transition: all 0.2s;
  margin-bottom: 1rem;
  position: relative;
  margin-top: 10px;
}

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

.list-container {
  width: calc(100% - 2rem);
  padding: 0rem 1rem;
}

.task-list {
  width: 100%;
  list-style: none;
}

.task {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.task input {
  display: none;
}

.task input + label:before {
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 4px;
  background-color: #FFF;
  border: 2px solid grey;
  display: inline-block;
  vertical-align: middle;
  margin-right: 0.8rem;
  margin-bottom: 3px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.task input:checked + label:before {
  background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='1' fill='%23555555'%3E%3Cpath fill='none' stroke='%23FFFFFF' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
  background-color: #61e8b0;
  background-position: center;
  border: none;
  padding: 2px;
}

.task input:checked + label {
  text-decoration: line-through;
}

.task svg {
  transition: all 0.2s;
  cursor: pointer;
  color: gray;
  width: 18px;
  height: 18px; 
}

.task svg:hover {
  color: #48a787;
}

.task-counter-container {
  background-color: #61e8b0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
}

.credits-container {
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 10px;
}

@media screen and (max-width: 768px) {
  .todo-container {
    width: 100%;
    padding: 1rem 1rem;
  }
}

@media screen and (max-width: 420px) {
  .todo-container {
    min-height: calc(80vh - 2rem);
  }
}
</style>