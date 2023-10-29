/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import * as React from 'react';
import { Html } from '@react-email/html';

interface Props {
    newPassword: string;
}

export const ResetPasswordEmail: React.FC<Props> = ({ newPassword }) => {
    return (
        <Html>
            <p>Your password was reset</p>
            <p>Your new password: {newPassword}</p>
        </Html>
    );
};
