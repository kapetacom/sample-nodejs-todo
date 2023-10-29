/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { List } from '@mui/material';

export interface TodoListProps {
    children: React.ReactNode;
}

export const TodoList = (props: TodoListProps) => {
    return (
        <List
            sx={{
                minHeight: '65px',
                maxHeight: 'calc(100vh - 350px)',
                overflow: 'auto',
                '.MuiListItem-container': {
                    '&:hover': {
                        '.MuiListItemSecondaryAction-root': {
                            opacity: 0.5,
                        },
                    },
                },
            }}
        >
            {props.children}
        </List>
    );
};
