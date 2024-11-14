import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Cargas } from './entities/cargas.entity';
import { CreateCargasInput } from './dto/create-cargas.input';
import { UpdateCargasInput } from './dto/update-cargas.input';

import { ClientProxy } from '@nestjs/microservices';
import { NATS_SERVICE } from 'src/config/services';
import { Inject } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Resolver(() => Cargas)
export class CargasResolver {
  constructor(
    @Inject(NATS_SERVICE) private readonly client: ClientProxy,
  ) {}

  @Mutation(() => [Cargas])
  async createCargas(@Args('createCargasInput') createCargasInput: CreateCargasInput) {
    try {
      const res = this.client.send('carga.created', createCargasInput);
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el carga:', error);
      throw new Error('Error creando carga');
    }
  }

  @Query(() => [Cargas], { name: 'cargas' })
  async findAll() {
    try {
      const res = this.client.send('carga.findall', {});
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el carga:', error);
      throw new Error('Error creando carga');
    }
  }

  @Query(() => [Cargas], { name: 'carga' })
  async findOne(@Args('id', { type: () => String }) id: number) {
    try {
      const res = this.client.send('carga.findone', {id});
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el carga:', error);
      throw new Error('Error creando carga');
    }
  }

  @Mutation(() => [Cargas])
  async updateCargas(@Args('updateCargasInput') updateCargasInput: UpdateCargasInput) {
    try {
      const res = this.client.send('carga.updated',updateCargasInput);
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el carga:', error);
      throw new Error('Error creando carga');
    }
  }

  @Mutation(() => [Cargas])
  async removeCargas(@Args('id', { type: () => Int }) id: number) {
    try {
      const res = this.client.send('carga.deleted', {id});
      return await lastValueFrom(res);
    } catch (error) {
      console.error('Error al crear el carga:', error);
      throw new Error('Error creando carga');
    }
  }
}
