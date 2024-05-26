import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreatePriceDto} from "./dto/create-price.dto";
import {PricesService} from "./prices.service";

@Controller('prices')
export class PricesController {

    constructor(private PricesService: PricesService) {}

    @Post()
    create(@Body() PriceDto: CreatePriceDto) {
        return this.PricesService.createPrice(PriceDto);
    }

    @Get()
    getAll() {
        return this.PricesService.getAllPrices()
    }
}

