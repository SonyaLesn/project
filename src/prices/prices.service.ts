import { Injectable } from '@nestjs/common';
import {Price} from "./prices.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreatePriceDto} from "./dto/create-price.dto";

@Injectable()
export class PricesService {

    constructor(@InjectModel(Price) private PriceRepository: typeof Price) {}

    async createPrice(dto: CreatePriceDto) {
        const price = await this.PriceRepository.create(dto);
        return price;
    }

    async getAllPrices() {
        const prices = await this.PriceRepository.findAll();
        return prices;
    }

}

