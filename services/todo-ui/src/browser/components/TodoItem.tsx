import React, { useMemo } from 'react';
import { Task } from '../../entities/Task';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { TasksClient } from '../clients/TasksClient';
import { UserSession } from '../auth/auth';

export interface TodoItemProps {
    todo: Task;
    session: UserSession;
    onToggleDone?: () => void;
    onDelete?: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
    const { todo, onDelete, onToggleDone, session } = props;

    const taskClient = useMemo(() => new TasksClient(), []);

    const toggleDone = async (task: Task) => {
        try {
            if (task.done) {
                await taskClient.markAsUndone(session.userId, task.id);
            } else {
                await taskClient.markAsDone(session.userId, task.id);
            }
            onToggleDone?.();
        } catch (e) {
            console.error(e);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            await taskClient.removeTask(session.userId, id);
            onDelete?.();
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <ListItem
            key={todo.id}
            sx={{
                borderBottom: '1px solid #E3E4F1',
                px: 3,
                '&:hover': {
                    background: '#D32F2F0A',
                },
            }}
        >
            <ListItemIcon
                onClick={() => {
                    toggleDone(todo).catch(console.error);
                }}
                sx={{
                    '&:hover': {
                        cursor: 'pointer',
                    },
                    minWidth: '48px',
                }}
            >
                {todo.done ? <CheckCircleIcon color="primary" /> : <RadioButtonUncheckedIcon color="disabled" />}
            </ListItemIcon>
            <ListItemText
                sx={{
                    textDecoration: todo.done ? 'line-through' : 'none',
                    color: todo.done ? 'text.secondary' : 'text.primary',
                }}
            >
                {todo.title}
            </ListItemText>
            <ListItemSecondaryAction
                sx={{
                    opacity: 0,
                    transition: 'opacity 0.1s ease-in-out',
                    '&:hover': {
                        cursor: 'pointer',
                        opacity: '1 !important',
                    },
                }}
            >
                <IconButton
                    onClick={() => {
                        deleteTask(todo.id).catch(console.error);
                    }}
                    size="small"
                >
                    <ClearIcon fontSize="small" />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
};
