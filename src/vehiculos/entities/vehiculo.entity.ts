import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType() // Marks this class as a GraphQL object type
export class Vehiculo {
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
