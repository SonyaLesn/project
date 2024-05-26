import { Module } from '@nestjs/common';
import { PricesService } from './prices.service';
import { PricesController } from './prices.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Price} from "./prices.model";

@Module({
    providers: [PricesService],
    controllers: [PricesController],
    imports: [
        SequelizeModule.forFeature([Price])
    ]
})
export class PricesModule {}

