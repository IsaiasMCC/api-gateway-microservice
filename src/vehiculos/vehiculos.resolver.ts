import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateVehiculoInput } from './dto/create-vehiculo.input';
import { UpdateVehiculoInput } from './dto/update-vehiculo.input';
import { NATS_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { Vehiculo } from './entities/vehiculo.entity';
import { lastValueFrom } from 'rxjs';

@Resolver(() => Vehiculo)
export class VehiculosResolver {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Mutation(() => [Vehiculo], { name: 'create' })
  async create(@Args('createVehiculoInput') createVehiculoInput: CreateVehiculoInput) {
    try {
      const res = this.client.send('vehiculo.created', createVehiculoInput);
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el vehículo:', error);
      throw new Error('Error creando vehiculo');
    }
  }
  

  @Query(() => [Vehiculo], { name: 'vehiculos' })
  async findAll() {
    try {
      const res = this.client.send('vehiculo.findall', {});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching vehiculos');
    }
  }

  @Query(() => [Vehiculo], { name: 'vehiculo' })
  async findOne(@Args('id') id: string) {
    try {
      const res = this.client.send('vehiculo.findone', {id});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching vehiculos');
    }
  }

  @Mutation(() => [Vehiculo])
  async update(@Args('updateVehiculoInput') updateVehiculoInput: UpdateVehiculoInput) {
    try {
      const res = this.client.send('vehiculo.findall', updateVehiculoInput);
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching vehiculos');
    }
  }

  @Mutation(() => [Vehiculo])
  async remove(@Args('id') id: string) {
    try {
      const res = this.client.send('vehiculo.deleted', {id});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching vehiculos');
    }
  }
}
