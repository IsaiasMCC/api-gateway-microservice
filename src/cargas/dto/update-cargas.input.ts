import { CreateCargasInput } from './create-cargas.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';

@InputType()
export class UpdateCargasInput extends PartialType(CreateCargasInput) {
  @Field( () => String)
  id: string;
}
