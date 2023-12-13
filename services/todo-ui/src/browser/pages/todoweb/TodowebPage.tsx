/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo, useState } from 'react';
import { getCurrentSession, useTaskClient } from '../../auth/auth';
import { useAsyncRetry } from 'react-use';
import { Box, Typography } from '@mui/material';
import { TodoIllustration } from '../../components/TodoIllustration';
import { TodoItem } from '../../components/TodoItem';
import { TodoList } from '../../components/TodoList';
import { NewTodo } from '../../components/NewTodo';
import { TodoListActions } from '../../components/TodoListActions';
import { TasksClient } from '../../.generated/clients/TasksClient';
import { NotLoggedInAlert } from '../../components/NotLoggedInAlert';

export const filters = ['All', 'Active', 'Completed'] as const;
export type Filter = (typeof filters)[number];

export const TodowebPage = () => {
    const session = getCurrentSession();
    const apiClient = useTaskClient();
    const [filter, setFilter] = useState<Filter>('All');

    const tasksLoader = useAsyncRetry(async () => {
        if (!session?.user.id) {
            return null;
        }
        return apiClient.getTasks(session?.user.id);
    }, [session?.user.id]);

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

    return (
        <Box sx={{ width: '100%', height: '100%' }}>
            <Box
                sx={{
                    pt: '70px',
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

                {session ? (
                    <>
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
                    </>
                ) : (
                    <NotLoggedInAlert />
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
    );
};
