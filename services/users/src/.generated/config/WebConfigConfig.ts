import Config from '@kapeta/sdk-config';
import { InstanceValue } from '@kapeta/sdk-config';

/**
 * Configuration for frontend urls
 */
export interface WebConfigConfig {
    /**
     * Web instance - used for links in e-mails
     */
    instance: InstanceValue;
    /**
     * Web base path - used for links to front page in e-mails
     */
    basePath: string;
    /**
     *  Activation url - used for links in e-mails. Activation ID is postfixed.
     */
    activationPath: string;
}

export const getWebConfigConfig = (defaultValue: WebConfigConfig): WebConfigConfig => {
    return Config.getOrDefault<WebConfigConfig>('WebConfig', defaultValue);
};
