/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { EmailClient, SendMailOptions } from '@kapeta/sdk-smtp-client';
import { EmailConfigConfig, getEmailConfigConfig } from 'generated:config/EmailConfigConfig';

export class EmailService extends EmailClient {
    private config: EmailConfigConfig;

    constructor() {
        super();
        this.config = getEmailConfigConfig({ from: 'support@kapeta.com' });
    }

    async send(email: SendMailOptions) {
        email.from = email.from || this.config.from;
        return super.send(email);
    }
}
