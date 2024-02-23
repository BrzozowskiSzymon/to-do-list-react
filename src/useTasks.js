import { useState, useEffect } from "react";

const getInitialTasks = () => {
    const taskFromLocalStorage = localStorage.getItem("tasks");

    return taskFromLocalStorage
        ? JSON.parse(taskFromLocalStorage)
        : []
};



export const useTasks = () => {
    const [tasks, setTasks] = useState(getInitialTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(tasks => {
            if (tasks.id === id) {
                return { ...tasks, done: !tasks.done };
            }

            return tasks;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(tasks => ({
            ...tasks,
            done: true,
        })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            },
        ])
    };

    const [hideDone, setHideDone] = useState(false);

    const toggleHideDone = () => {
        setHideDone(hideDone => !hideDone);
    };


    return {
        tasks,
        hideDone,
        removeTask,
        toggleTaskDone,
        toggleHideDone,
        setAllDone,
        addNewTask,
    };
};