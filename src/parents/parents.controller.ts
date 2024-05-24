import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateParentDto} from "./dto/create-parent.dto";
import {ParentsService} from "./parents.service";

@Controller('parents')
export class ParentsController {

    constructor(private parentsService: ParentsService) {}

    @Post()
    create(@Body() parentDto: CreateParentDto) {
        return this.parentsService.createParent(parentDto);
    }

    @Get()
    getAll() {
        return this.parentsService.getAllParents()
    }
}
