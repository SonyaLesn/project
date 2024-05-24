import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateKidDto} from "./dto/create-kid.dto";
import {KidsService} from "./kids.service";

@Controller('kids')
export class KidsController {

    constructor(private kidsService: KidsService) {}

    @Post()
    create(@Body() kidDto: CreateKidDto) {
        return this.kidsService.createKid(kidDto);
    }

    @Get()
    getAll() {
        return this.kidsService.getAllKids()
    }
}
