import { CreationOptional } from 'sequelize'
import { Column, CreatedAt, DataType, Model, Table, UpdatedAt } from 'sequelize-typescript'

@Table({ tableName: 'cats', underscored: true })
export class Cat extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    // autoIncrementIdentity: true,
    allowNull: false,
    field: 'id',
    type: DataType.INTEGER.UNSIGNED,
  })
  id: CreationOptional<number>

  @Column
  name: string

  @Column
  age: number

  @Column
  breed: string

  @CreatedAt
  createdAt?: CreationOptional<Date>

  @UpdatedAt
  updatedAt?: CreationOptional<Date>
}
