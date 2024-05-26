import { Module } from '@nestjs/common';
import { WorkersService } from './Workers.service';
import { WorkersController } from './Workers.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Worker} from "./workers.model";

@Module({
  providers: [WorkersService],
  controllers: [WorkersController],
  imports: [
    SequelizeModule.forFeature([Worker])
  ]
})
export class WorkersModule {}

