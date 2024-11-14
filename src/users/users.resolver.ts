import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Inject } from '@nestjs/common';
import { NATS_SERVICE, USER_SERVICE } from 'src/config/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Resolver(() => User)
export class UsersResolver {
  constructor( 
    @Inject(NATS_SERVICE) private readonly client: ClientProxy
  ) {}

  @Mutation(() => [User])
  async createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    try {
      const res = this.client.send('user.created', createUserInput);
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error creando users');
    }
  }

  @Query(() => [User], { name: 'users' })
  async findAll() {
    try {
      const res = this.client.send('user.findall', {});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching users');
    }
  }

  @Query(() => [User], { name: 'user' })
  async findOne(@Args('id', { type: () => String }) id: string) {
    try {
      const res = this.client.send('user.findone', {id});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error fetching user');
    }
  }

  @Mutation(() => [User])
  async updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    try {
      const res = this.client.send('user.updated', updateUserInput);
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error updating user');
    }
  }

  @Mutation(() => [User])
  async removeUser(@Args('id', { type: () => String }) id: string) {
    try {
      const res = this.client.send('user.deleted', {id});
      return await lastValueFrom(res);
    } catch (error) {
      // handle error
      throw new Error('Error deleting user');
    }
  }
}
