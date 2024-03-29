/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React, { useMemo } from 'react';
import { Task } from '../../.generated/entities/Task';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ClearIcon from '@mui/icons-material/Clear';
import { TasksClient } from '../.generated/clients/TasksClient';
import { UserSession } from '../../.generated/entities/UserSession';
import {useAuthenticatedTaskClient} from "../auth/auth";

export interface TodoItemProps {
    todo: Task;
    session: UserSession;
    onToggleDone?: () => void;
    onDelete?: () => void;
}

export const TodoItem = (props: TodoItemProps) => {
    const { todo, onDelete, onToggleDone, session } = props;

    const taskClient = useAuthenticatedTaskClient();

    const toggleDone = async (task: Task) => {
        try {
            if (task.done) {
                await taskClient.markAsUndone(session.user.id, task.id);
            } else {
                await taskClient.markAsDone(session.user.id, task.id);
            }
            onToggleDone?.();
        } catch (e) {
            console.error(e);
        }
    };

    const deleteTask = async (id: string) => {
        try {
            await taskClient.removeTask(session.user.id, id);
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
