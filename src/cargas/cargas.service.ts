import { Injectable } from '@nestjs/common';
import { CreateCargasInput } from './dto/create-cargas.input';
import { UpdateCargasInput } from './dto/update-cargas.input';

@Injectable()
export class CargasService {
  create(createCargasInput: CreateCargasInput) {
    return 'This action adds a new cargas';
  }

  findAll() {
    return `This action returns all cargas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cargas`;
  }

  update(id: number, updateCargasInput: UpdateCargasInput) {
    return `This action updates a #${id} cargas`;
  }

  remove(id: number) {
    return `This action removes a #${id} cargas`;
  }
}
