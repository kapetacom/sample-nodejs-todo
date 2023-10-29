/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import * as React from 'react';
import { Html } from '@react-email/html';
import { Button } from '@react-email/button';

interface Props {
    name: string;
    url: string;
}

export const ActivationEmail: React.FC<Props> = ({ name, url }) => {
    return (
        <Html>
            <p>Hi {name},</p>
            <p>Please activate your account by clicking on the link below</p>
            <Button href={url}>Activate</Button>
        </Html>
    );
};
