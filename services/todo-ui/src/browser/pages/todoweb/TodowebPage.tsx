import React, { useMemo, useState } from 'react';
import { getCurrentSession } from '../../auth/auth';
import { useAsyncRetry } from 'react-use';
import { Box, Typography } from '@mui/material';
import { TodoIllustration } from '../../components/TodoIllustration';
import { TodoItem } from '../../components/TodoItem';
import { TodoList } from '../../components/TodoList';
import { NewTodo } from '../../components/NewTodo';
import { TodoListActions } from '../../components/TodoListActions';
import { TasksClient } from '../../clients/TasksClient';

export const filters = ['All', 'Active', 'Completed'] as const;
export type Filter = (typeof filters)[number];

export const TodowebPage = () => {
    const apiClient = useMemo(() => new TasksClient(), []);
    const session = getCurrentSession();
    const [filter, setFilter] = useState<Filter>('All');

    const tasksLoader = useAsyncRetry(async () => {
        if (!session?.userId) {
            return null;
        }
        return apiClient.getTasks(session?.userId);
    }, [session?.userId]);

    const filteredTasks = useMemo(() => {
        const tasks = tasksLoader.value || [];
        switch (filter) {
            case 'Active':
                return tasks.filter((task) => !task.done);
            case 'Completed':
                return tasks.filter((task) => task.done);
            default:
                return tasks;
        }
    }, [filter, tasksLoader.value]);

    const hasTasks = tasksLoader.value && tasksLoader.value.length > 0;
    const numberOfTasksLeft = filteredTasks.filter((task) => !task.done).length || 0;

    return session ? (
        <Box sx={{ width: '100%', height: '100%', background: '#fafafa' }}>
            <Box
                sx={{
                    width: '100%',
                    height: '300px',
                    backgroundImage: 'linear-gradient(225deg, #5596FF 0%, #AC2DEB 100%)',
                    backgroundSize: '2000px 2000px',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            ></Box>
            <Box
                sx={{
                    mt: '-230px',
                    maxWidth: '540px',
                    mx: 'auto',
                    position: 'relative',
                    zIndex: 1,
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{ fontWeight: 'bold', letterSpacing: '15px', color: 'white', mb: 5 }}
                >
                    TODO
                </Typography>

                <NewTodo apiClient={apiClient} onNewTodo={tasksLoader.retry} session={session} />

                {hasTasks && (
                    <Box
                        sx={{
                            background: 'white',
                            borderRadius: 1,
                        }}
                    >
                        <TodoList>
                            {filteredTasks.map((task, ix) => (
                                <TodoItem
                                    key={task.id}
                                    todo={task}
                                    onDelete={() => tasksLoader.retry()}
                                    onToggleDone={() => tasksLoader.retry()}
                                    session={session}
                                />
                            ))}
                        </TodoList>

                        <TodoListActions
                            filters={filters}
                            selectedFilter={filter}
                            setFilter={setFilter}
                            session={session}
                            apiClient={apiClient}
                            numberOfTasksLeft={numberOfTasksLeft}
                            onDeleteAllTasks={tasksLoader.retry}
                        />
                    </Box>
                )}
            </Box>

            <TodoIllustration
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 30,
                }}
            />
        </Box>
    ) : (
        <div>
            <h1>Login</h1>
            <p>Please login to see your todo list</p>
            <a href="/login">Login</a>
        </div>
    );
};
