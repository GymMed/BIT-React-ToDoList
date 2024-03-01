import { useState } from "react";
import Button from "./Button";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask.trim() === "") return;

        setTasks([newTask, ...tasks]);
        setNewTask("");
    };

    const deleteTask = (index) => {
        const updateTasks = [...tasks];
        updateTasks.splice(index, 1);
        setTasks(updateTasks);
    };

    return (
        <div className="m-auto p-5 rounded-lg shadow-xl bg-gradient-to-br from-purple-50 to-purple-200 w-96 flex flex-col gap-3 justify-center items-center">
            <h1 className="text-2xl font-bold text-purple-500">Todo list</h1>
            <div className="flex gap-3 max-sm:flex-col flex-row">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTask}
                    className="placeholder:text-purple-300 text-purple-500 p-2 border rounded border-purple-700"
                    onChange={(e) => {
                        setNewTask(e.target.value);
                    }}
                />
                <Button text="Add" onClick={addTask} />
            </div>
            <ul className="flex flex-col gap-2 w-full">
                {tasks.map((task, index) => {
                    return (
                        <li
                            key={index}
                            className="flex gap-3 items-center justify-between w-full p-2 hover:bg-gradient-to-br rounded text-purple-500 hover:text-purple-200 hover:from-purple-300 hover:to-purple-500"
                        >
                            <div className="font-semibold">{task}</div>
                            <Button
                                text="Remove"
                                isDark={true}
                                onClick={() => {
                                    deleteTask(index);
                                }}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default TodoList;
