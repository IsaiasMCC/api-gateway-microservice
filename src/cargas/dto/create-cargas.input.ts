import { InputType , Field, Float } from '@nestjs/graphql';
import { Ubicacion } from './ubicacion';
import { Usuario } from './user';


@InputType()
export class CreateCargasInput {
  
  @Field()
  fecha: string;

  @Field()
  nombre: string;

  @Field()
  origen: Ubicacion;

  @Field()
  destino: Ubicacion;

  @Field()
  peso: number;

  @Field()
  descripcion: string;

  @Field()
  conductor: Usuario;

}