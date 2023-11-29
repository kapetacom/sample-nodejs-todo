import Config from "@kapeta/sdk-config";
import { InstanceValue } from "@kapeta/sdk-config";

export interface WebConfigConfig {
    instance: InstanceValue;
    basePath: string;
    activationPath: string;
}

export const getWebConfigConfig = (
    defaultValue: WebConfigConfig
): WebConfigConfig => {
    return Config.getOrDefault<WebConfigConfig>("WebConfig", defaultValue);
};
