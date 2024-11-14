import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Location } from './ubicacion';
import { Conductor } from './user';

@ObjectType()
export class Cargas {
  
  @Field()
  id: string;

  @Field()
  fecha: string;

  @Field()
  nombre: string;

  @Field(() => Location)
  origen: Location;

  @Field(() => Location)
  destino: Location;

  @Field(() => Float)
  peso: number;

  @Field()
  descripcion: string;

  @Field(() => Conductor)
  conductor: Conductor;
}
