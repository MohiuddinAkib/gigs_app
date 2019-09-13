import { Model } from 'sequelize/types';
import * as Sequelize from 'sequelize';
import { Gig } from '@interfaces/gigs/gig.interface';
import { Column } from 'sequelize-typescript';

export class Gigs extends Model<Gig> {
  @Column({
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.STRING,
  })
  id: string;

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
    defaultValue: Date.now(),
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
