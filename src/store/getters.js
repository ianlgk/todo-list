export const getters = {
    isTaskListEmpty: state => Boolean(state.taskList.length),
    msg: state => {
        if (state.taskList.length === 0) {
            state.msg = "Oops, it looks like there are no tasks to be done! 😴"
        } else {
            let counter = 0

            state.taskList.map((task) => {
                if (task.checked == false) {
                    counter++;
                }
            })

            if (counter != 0) {
                state.msg = counter + " items left. 👨‍💻"
            } else {
                state.msg = "Congratulations, you have completed all your tasks! 🥳"
            }
        }
        return state.msg
    }
}