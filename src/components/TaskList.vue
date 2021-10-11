<template>
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
</template>

<script>
import { Icon } from '@iconify/vue2'
import { mapGetters } from 'vuex'

export default {
    components: {
        Icon
    },
    data() {
        return {
            taskList: this.$store.state.taskList
        }
    },
    methods: {
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
        ...mapGetters(['isTaskListEmpty'])
    }
}
</script>

<style>
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
</style>