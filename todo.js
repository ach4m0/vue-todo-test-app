'use strict'; 
{
  new Vue({
    el: 'main',
    data: {
      nuevaTarea: null,
      tasks: [
        {
          title: 'Tarea inicial',
          completed: false
        },
        {
          title: 'Otra tarea sin hacer',
          completed: false
        },
        {
          title: 'Tarea completada',
          completed: true
        }
      ]
    },
    computed: {
      countTasksIncompleted() {
        return this.getTaskList(false).length
      },
    },
    methods: {
      getTaskList(completedTask) {
        return this.tasks.filter((task) => task.completed === completedTask)
      },

      guardarTarea() {
        if(!this.nuevaTarea){
          return;
        }
        this.tasks.unshift({
          title: this.nuevaTarea,
          completed: false
        });
        this.nuevaTarea = null;
      },

      completeTask(task, event) {
        console.log(event);
        task.completed = true;
      }
    }
});
}