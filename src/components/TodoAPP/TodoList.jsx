import React, { useCallback, useEffect, useMemo, useState } from 'react'

function TodoList() {

    const [task, setTask] = useState({ id: '', value: '' });

    const [completedTaskNames, setCompletedTaskNames] = useState([]);

    const [taskList, setTaskList] = useState([]);

    const [selectedId, setSelectedId] = useState();

    const addTask = useCallback(() => {
        console.log("task", task)
        setTaskList(prevTaskList => [...prevTaskList, task])
    }, [task])

    const deleteTask = useCallback((id) => {
        console.log("Id", id)
        const modifiedTaskList = taskList.filter(element => element.id !== id)
        console.log("modifiedTaskList", modifiedTaskList)
        setTaskList(modifiedTaskList)
    }, [taskList])

    useEffect(() => {
        console.log(taskList)
    }, [taskList])

    const completedTask = {
        textDecoration: 'line-through',
        color: 'red'
    }

    const completeTask = useCallback((task) => {
        setSelectedId(task.id)
        if (!completedTaskNames.includes(task)) {
            setCompletedTaskNames(prevValue => [...prevValue, task])
        }
        console.log("completedTaskNames ", completedTaskNames)
    }, [completedTaskNames])


    return (<div>
        <form>
            Enter task: <input value={task.value} onChange={(e) => setTask({ id: Date.now(), value: e.target.value })} />
            <button type='button' onClick={addTask}>Add</button>
            <hr />
            Tasks To Do! <br />
            {taskList.length > 0 ? <div> {taskList && taskList.map((res) => {
                return (<> <li style={completedTaskNames.includes(res) ? completedTask : null}
                    onClick={() => { completeTask(res) }}
                    key={res.id}> {res.value}
                    <button type='button' onClick={() => { deleteTask(res.id) }}>X</button> </li></>)
            })} </div> : <div>No List</div>}
            {/* <button>Delete</button> */}
        </form>
    </div>)
}

export default TodoList