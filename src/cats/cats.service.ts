import { HttpException, Injectable } from '@nestjs/common'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { Cat } from './models/cats.model'
import { InjectModel } from '@nestjs/sequelize'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler'

@Injectable()
export class CatsService {
  constructor(
    @InjectModel(Cat)
    private catModel: typeof Cat
  ) {}

  async create(createCatDto: CreateCatDto) {
    try {
      const cat = new Cat({ ...createCatDto })
      await cat.save()
      return cat
    } catch (error) {
      throw new HttpException(error, 500)
    }
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.findAll()
  }

  async findOne(id: number): Promise<Cat> {
    return await this.catModel.findByPk(id)
  }

  async update(id: number, updateCatDto: UpdateCatDto): Promise<any> {
    return await this.catModel.update(updateCatDto, { where: { id } })
  }

  async remove(id: number) {
    await this.catModel.destroy({ where: { id } })
    return 'This action removes a #${id} cat'
  }
}
