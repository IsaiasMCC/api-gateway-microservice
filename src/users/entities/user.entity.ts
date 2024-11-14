import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  nombre: string;

  @Field()
  apellido: string;

  @Field()
  ci: string;

  @Field()
  telefono: string;

  @Field()
  licencia: string;

  @Field()
  direccion: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  rol: string;
}
