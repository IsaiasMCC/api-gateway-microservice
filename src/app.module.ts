import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { VehiculosModule } from './vehiculos/vehiculos.module';
import { CargasModule } from './cargas/cargas.module';
import { UsersModule } from './users/users.module';



@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,          // Usa el driver de Apollo para NestJS
      autoSchemaFile: true,          // Esto genera el esquema automáticamente
      playground: true,              // Activa GraphQL Playground para pruebas
    }),
    VehiculosModule,
    UsersModule,
    CargasModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
