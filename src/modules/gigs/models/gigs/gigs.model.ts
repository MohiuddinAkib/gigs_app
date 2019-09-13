import * as Sequelize from 'sequelize';
import { Column, Table, Model } from 'sequelize-typescript';
import { Gigs as GigsInterface } from '@interfaces/gigs/gig.interface';
import { ApiModelProperty } from '@nestjs/swagger';

@Table
export class Gigs extends Model<GigsInterface> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER,
  })
  id: number;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'Title is required',
      },
      max: {
        msg: 'Title should not exceed 200 characters',
        args: [200],
      },
    },
  })
  title: string;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'Technologies is required',
      },
      max: {
        msg: 'Technologies should not exceed 200 characters',
        args: [200],
      },
    },
  })
  technologies: string;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'Budget is required',
      },
      max: {
        msg: 'Budget should not exceed 20 characters',
        args: [20],
      },
    },
  })
  budget: string;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'Description is required',
      },
      max: {
        msg: 'Description should not exceed 200 characters',
        args: [200],
      },
    },
  })
  description: string;

  @ApiModelProperty()
  @Column({
    allowNull: false,
    type: Sequelize.STRING,
    validate: {
      notEmpty: {
        msg: 'Contact email is required',
      },
      max: {
        msg: 'Contact email should not exceed 200 characters',
        args: [200],
      },
    },
  })
  contactEmail: string;

  @Column({
    allowNull: false,
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    validate: {
      isDate: true,
    },
  })
  createdAt: Date;

  @Column({
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  })
  updatedAt: Date;
}
