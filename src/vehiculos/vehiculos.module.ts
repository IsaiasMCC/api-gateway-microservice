import { Module } from '@nestjs/common';
import { VehiculosResolver } from './vehiculos.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config/services';
import { envs } from 'src/config';


@Module({
  imports: [
    ClientsModule.register([
      {
        name: NATS_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: envs.natsServer
        }
      },
    ]),
  ],
  providers: [VehiculosResolver],
})
export class VehiculosModule {}
