import * as React from 'react';
import { Html } from '@react-email/html';

interface Props {
    name: string;
}
export const RegistrationEmail: React.FC<Props> = ({ name }) => {
    return (
        <Html>
            <p>Welcome {name},</p>
            <p>Thank you for signing up to the Kapeta Sample Todo app :)</p>
        </Html>
    );
};
