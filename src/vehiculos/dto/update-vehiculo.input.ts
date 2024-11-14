import { InputType, Field } from '@nestjs/graphql';
import { CreateVehiculoInput } from './create-vehiculo.input';
import { PartialType } from '@nestjs/mapped-types';

@InputType()
export class UpdateVehiculoInput extends PartialType(CreateVehiculoInput) {
  @Field() 
  id: string;
  
  @Field()
  placa: string;

  @Field()
  marca: string;

  @Field()
  modelo: string;

  @Field()
  anioFabricacion: number;

  @Field()
  numeroChasis: string;

  @Field()
  color: string;
}
