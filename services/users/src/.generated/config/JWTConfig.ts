import Config from '@kapeta/sdk-config';

export interface JWTConfig {
    issuer: string;
    audience: string;
    filename: string;
}

export const getJWTConfig = (defaultValue: JWTConfig): JWTConfig => {
    return Config.getOrDefault<JWTConfig>('JWT', defaultValue);
};
