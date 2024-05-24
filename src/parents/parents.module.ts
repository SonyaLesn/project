import { Module } from '@nestjs/common';
import { ParentsService } from './parents.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Parent} from "./parents.model";
import {ParentsController} from "./parents.controller";

@Module({
  providers: [ParentsService],
  controllers: [ParentsController],
  imports: [
    SequelizeModule.forFeature([Parent])
  ]
})
export class ParentsModule {}
