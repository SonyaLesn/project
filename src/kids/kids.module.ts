import { Module } from '@nestjs/common';
import { KidsService } from './kids.service';
import { KidsController } from './kids.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Kid} from "./kids.model";

@Module({
  providers: [KidsService],
  controllers: [KidsController],
  imports: [
      SequelizeModule.forFeature([Kid])
  ]
})
export class KidsModule {}
