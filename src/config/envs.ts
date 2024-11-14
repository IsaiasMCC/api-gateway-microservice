import 'dotenv/config';
import * as joi from 'joi'
interface EnvVars {
    PORT: number,
    USERS_MICROSERVICE_HOST: string,
    USERS_MICROSERVICE_PORT: number,
    NATS_SERVER: string
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    USERS_MICROSERVICE_HOST: joi.string().required(),
    USERS_MICROSERVICE_PORT: joi.number().required(),
    NATS_SERVER: joi.string().required()
})
.unknown(true);

const { error, value } = envsSchema.validate( process.env );

if ( error ) {
    throw new Error(`Config validation error: ${error.message }`);
}

const envVars:EnvVars = value;

export const envs = {
    port: envVars.PORT,
    usersMicroserviceHost: envVars.USERS_MICROSERVICE_HOST ,
    usersMicroservicePort: envVars.USERS_MICROSERVICE_PORT,
    natsServer: envVars.NATS_SERVER
}