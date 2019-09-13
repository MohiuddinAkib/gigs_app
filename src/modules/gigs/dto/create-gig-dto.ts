import { IsNotEmpty, IsEmail, Length } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateGigDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @Length(0, 255)
  readonly title: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(0, 255)
  readonly technologies: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(0, 255)
  readonly budget: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(0, 255)
  readonly description: string;

  @ApiModelProperty()
  @IsNotEmpty()
  @Length(0, 255)
  @IsEmail()
  readonly contactEmail: string;
}
