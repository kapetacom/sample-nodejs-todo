/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';
import { FragmentFrame, FragmentProps } from '@kapeta/sdk-web-microfrontend-frame';
import { Box } from '@mui/material';

let BASE_PATH = 'fragments/user';
if (!BASE_PATH.endsWith('/')) {
    //Make sure the path ends with a slash so that relative paths work
    BASE_PATH += '/';
}

export const UserwebFragment = (props: Omit<FragmentProps, 'basePath'>) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
                '& > iframe': {
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    border: 'none',
                },
            }}
        >
            <FragmentFrame basePath={BASE_PATH} {...props}></FragmentFrame>
        </Box>
    );
};
