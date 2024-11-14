import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class Ubicacion {
  @Field(() => Float)
  lat: number;

  @Field(() => Float)
  lng: number;
}
