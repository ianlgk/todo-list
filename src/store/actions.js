export const actions = {
    updateTaskList({ commit }, taskList) {
        commit('DEFINE_TASKLIST', { taskList: taskList })
        localStorage.setItem('taskList', JSON.stringify(taskList))
    }
}