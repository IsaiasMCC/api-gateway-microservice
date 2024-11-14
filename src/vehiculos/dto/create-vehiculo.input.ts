import { InputType, Field } from '@nestjs/graphql';

@InputType() // Marks this class as a GraphQL input type
export class CreateVehiculoInput {

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
