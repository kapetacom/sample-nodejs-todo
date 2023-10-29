/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import { EmailClient, SendMailOptions } from '@kapeta/sdk-smtp-client';
import Config from '@kapeta/sdk-config';

export class EmailService extends EmailClient {
    async send(email: SendMailOptions) {
        const emailFrom = Config.get('EmailConfig.from', 'support@kapeta.com');
        email.from = email.from || emailFrom!;
        return super.send(email);
    }
}
