/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString } from 'class-validator';

export class CreateCarsDto {
  @IsString({ message: 'The brand most be a cool string' })
  readonly brand: string;

  @IsString()
  readonly model: string;
}
