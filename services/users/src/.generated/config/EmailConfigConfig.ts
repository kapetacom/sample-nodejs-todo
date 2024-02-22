import Config from '@kapeta/sdk-config';

/**
 * Configuration for e-mails
 */
export interface EmailConfigConfig {
    /**
     * Sender for e-mails. Note that you should be allowed to send e-mails from this domain and user
     */
    from: string;
}

export const getEmailConfigConfig = (defaultValue: EmailConfigConfig): EmailConfigConfig => {
    return Config.getOrDefault<EmailConfigConfig>('EmailConfig', defaultValue);
};
