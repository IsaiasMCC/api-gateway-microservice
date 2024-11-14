import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType() // Decorador que define la clase como un tipo de salida en GraphQL
export class Conductor {
  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  id: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  nombre: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  apellido: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  ci: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  telefono: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  licencia: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  direccion: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  email: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  password: string;

  @Field() // Decorador que define el campo como un campo en el esquema GraphQL
  rol: string;
}

