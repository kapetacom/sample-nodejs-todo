import React, {useMemo, useState} from "react";
import {TasksClient} from "../../clients/TasksClient";
import {getCurrentSession} from "../../auth/auth";
import {useAsyncRetry} from "react-use";

import './TodowebPage.less';

export const TodowebPage = () => {
    const taskClient = useMemo(() => new TasksClient(), []);
    const [newTask, setNewTask] = useState('');
    const [processing, setProcessing] = useState(false);
    const session = getCurrentSession();

    if (!session) {
        return <div>
            <h1>Login</h1>
            <p>Please login to see your todo list</p>
            <a href="/login">Login</a>
        </div>;
    }

    const tasks = useAsyncRetry(async () => taskClient.getTasks(session?.userId), [session?.userId]);

    const createTask = async () => {
        setProcessing(true);
        try {
            const id = window.crypto.randomUUID();
            await taskClient.addTask(session.userId, id, {
                title: newTask,
                done: false,
                id,
                userId: session.userId,
                description: ''
            })
            tasks.retry();
            setNewTask('');
        } finally {
            setProcessing(false);
        }
    };

    const deleteTask = async (id: string) => {
        setProcessing(true);
        try {
            await taskClient.removeTask(session.userId, id);
            tasks.retry();
        } finally {
            setProcessing(false);
        }
    };

    const markAsDone = async (id: string) => {
        setProcessing(true);
        try {
            await taskClient.markAsDone(session.userId, id);
        } finally {
            setProcessing(false);
        }
        tasks.retry();
    };

    const isLoading = tasks.loading || processing;

    return (
        <div className={'todo-list-page'}>
            <h1>Your todo list</h1>

            <form className={'create-form'} onSubmit={(evt) => {
                evt.preventDefault();
                createTask();
            }}>
                <input required={true}
                       minLength={1}
                       autoFocus={true}
                       disabled={processing}
                       placeholder={'Enter task title...'}
                       type='text'
                       value={newTask}
                       onChange={(evt) => {
                           setNewTask(evt.target.value);
                       }}/>
                <button disabled={processing} type={'submit'}>Add task</button>
            </form>

            {!tasks.loading && tasks.value &&
                <ul className={'tasks'}>
                    {tasks.value.map((task, ix) => {

                        return (
                            <li key={`task_${ix}`}>
                                <div className={'content'}>
                                    <label>
                                        <input type="checkbox" checked={task.done} onChange={(evt) => {
                                            if (evt.target.checked) {
                                                markAsDone(task.id);
                                            }
                                        }}/>
                                        {task.title}
                                    </label>
                                </div>
                                <a className={'delete'} onClick={() => deleteTask(task.id)}></a>
                            </li>
                        )
                    })}

                </ul>
            }
        </div>);
};
