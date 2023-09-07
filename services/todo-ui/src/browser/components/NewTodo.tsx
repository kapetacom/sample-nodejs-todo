import { Box, TextField, InputAdornment } from '@mui/material';
import React, { useRef } from 'react';
import { TasksClient } from '../clients/TasksClient';
import { UserSession } from '../auth/auth';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

interface NewTodoProps {
    apiClient: TasksClient;
    session: UserSession;
    onNewTodo?: () => void;
}
export const NewTodo = (props: NewTodoProps) => {
    const { apiClient, session, onNewTodo } = props;

    const inputRef = useRef<HTMLInputElement>(null);

    const createTask = async (title: string) => {
        if (!title) {
            return;
        }
        try {
            const id = window.crypto.randomUUID();
            await apiClient.addTask(session.userId, id, {
                title: title,
                done: false,
                id,
                userId: session.userId,
                description: '',
            });
            onNewTodo?.();
        } catch (e) {
            console.error(e);
        }
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const value = formData.get('newTask');
        createTask(value as string)
            .then(() => {
                if (inputRef.current) {
                    inputRef.current.value = '';
                }
            })
            .catch(console.error);
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <TextField
                name="newTask"
                inputRef={inputRef}
                fullWidth
                InputProps={{
                    placeholder: 'Create a new todo...',
                    startAdornment: (
                        <InputAdornment position="start" sx={{ mr: 3 }}>
                            <RadioButtonUncheckedIcon color="disabled" />
                        </InputAdornment>
                    ),
                }}
                sx={{
                    '.MuiInputBase-root': {
                        transition: '0.2s ease-in-out',
                        boxShadow: 'none',
                        '&.Mui-focused': {
                            boxShadow: '5px 5px 14px rgba(0,0,0,0.2)',
                        },
                    },
                    '.MuiOutlinedInput-root': { background: 'white', px: 3 },
                    fieldset: {
                        border: 'none',
                    },
                }}
            />
        </Box>
    );
};
