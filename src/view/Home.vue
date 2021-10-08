<template>
  <div class="container">
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
          />
          <button
            class="input-button"
            type="button">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageResponsive from '../components/shared/ImageResponsive.vue'
import VueJSLogoImg from '../assets/logo.png'

export default {
  name: 'Home',
  components: {
    ImageResponsive
  },
  data() {
    return {
      logoImg: VueJSLogoImg
    }
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

.container {
  width: 80%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-container {
  background-color: #FFF;
  height: calc(60vh - 2rem);
  width: calc(100% - 10rem);
  max-width: calc(600px - 10rem);
  border-radius: 10px;
  box-shadow: 0px 0px 100px 10px rgba(0, 0, 0, 0.5);
  padding: 1rem 5rem;
}

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  width: calc(90% - 30px);
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
  width: 10%;
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
