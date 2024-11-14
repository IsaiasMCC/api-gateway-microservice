import { InputType, Int, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
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
