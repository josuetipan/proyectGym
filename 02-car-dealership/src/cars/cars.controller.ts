import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  //UsePipes,
  //ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarsDto } from './dto/create-car.dto';
import { UpdateCarsDto } from './dto/update-car.dto';

@Controller('cars')
//@UsePipes(ValidationPipe)
export class CarsController {
  constructor(private readonly carsService: CarsService) {}
  @Get('get')
  getAllCars() {
    return this.carsService.finAll();
  }

  @Get('get/:id')
  getCardById(@Param('id', ParseUUIDPipe) id: string) {
    console.log(id);

    return this.carsService.findOneById(id);
  }

  @Post('create')
  createCar(@Body() createCarDto: CreateCarsDto) {
    return this.carsService.create(createCarDto);
  }

  @Patch('update/:id')
  updateCar(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarsDto,
  ) {
    return updateCarDto;
  }

  @Delete('delete/:id')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id,
    };
  }
}
