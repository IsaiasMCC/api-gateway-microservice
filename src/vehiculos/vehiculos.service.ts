import { Injectable } from '@nestjs/common';
import { CreateVehiculoInput } from './dto/create-vehiculo.input';
import { UpdateVehiculoInput } from './dto/update-vehiculo.input';

@Injectable()
export class VehiculosService {
  create(createVehiculoInput: CreateVehiculoInput) {
    return 'This action adds a new vehiculo';
  }

  findAll() {
    return `This action returns all vehiculos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vehiculo`;
  }

  update(id: number, updateVehiculoInput: UpdateVehiculoInput) {
    return `This action updates a #${id} vehiculo`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehiculo`;
  }
}
