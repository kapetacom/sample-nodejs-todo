import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import { pluralize } from '../utils/utils';
import { Filter } from '../pages/todoweb/TodowebPage';
import { TasksClient } from '../clients/TasksClient';
import { UserSession } from '../auth/auth';

export interface TodoListActionsProps {
    apiClient: TasksClient;
    filters: readonly Filter[];
    selectedFilter: Filter;
    setFilter: (filter: Filter) => void;
    numberOfTasksLeft: number;
    session: UserSession;
    onDeleteAllTasks?: () => void;
}

export const TodoListActions = (props: TodoListActionsProps) => {
    const { apiClient, filters, setFilter, numberOfTasksLeft, selectedFilter, onDeleteAllTasks, session } = props;

    const deleteAllTasks = async () => {
        try {
            await apiClient.removeTasks(session.userId);
            onDeleteAllTasks?.();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Box sx={{ px: 3, py: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography variant="body2" color="#9495A5">
                {`${numberOfTasksLeft} ${pluralize(numberOfTasksLeft, 'task', 'tasks')} left`}
            </Typography>
            <Box
                sx={{
                    ml: 'auto',
                    display: 'flex',
                    gap: 1,
                }}
            >
                {filters.map((f) => (
                    <Button
                        key={f}
                        variant="outlined"
                        size="small"
                        onClick={() => {
                            setFilter(f);
                        }}
                        color={selectedFilter === f ? 'primary' : 'inherit'}
                        sx={{
                            textTransform: 'none',
                            borderColor: selectedFilter === f ? 'primary' : 'transparent',
                        }}
                    >
                        {f}
                    </Button>
                ))}
                <Button
                    variant="text"
                    size="small"
                    color="inherit"
                    sx={{
                        textTransform: 'none',
                        color: 'action.disabled',
                    }}
                    onClick={() => {
                        deleteAllTasks().catch(console.error);
                    }}
                >
                    Clear list
                </Button>
            </Box>
        </Box>
    );
};
