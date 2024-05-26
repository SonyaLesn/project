import { Module } from '@nestjs/common';
import { AgreementsService } from './agreements.service';
import { AgreementsController } from './agreements.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Agreement} from "./agreements.model";

@Module({
  providers: [AgreementsService],
  controllers: [AgreementsController],
  imports: [
    SequelizeModule.forFeature([Agreement])
  ]
})
export class AgreementsModule {}

