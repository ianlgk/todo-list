<template>
  <div class="container">
    <Warning />
    <div class="todo-container">
      <Header />
      <TaskList />
      <FeedbackMsg />
    </div>
    <Footer />
  </div>
</template>

<script>
import Warning from '@/components/Warning.vue'
import Header from '@/components/Header.vue'
import TaskList from '@/components/TaskList.vue'
import FeedbackMsg from '@/components/FeedbackMsg.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ToDo',
  components: {
    Warning,
    Header,
    TaskList,
    FeedbackMsg,
    Footer
  }
}
</script>

<style>
/* Global Configs */
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
/* Global Configs */

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

/* Responsive */
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
/* Responsive */
</style>