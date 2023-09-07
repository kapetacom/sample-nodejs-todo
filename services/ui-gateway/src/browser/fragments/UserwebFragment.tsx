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
                '& > iframe': {
                    width: '100%',
                    height: '100%',
                    boxSizing: 'border-box',
                    m: -2,
                },
            }}
        >
            <FragmentFrame basePath={BASE_PATH} {...props}></FragmentFrame>
        </Box>
    );
};
