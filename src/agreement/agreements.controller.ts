import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateAgreementDto} from "./dto/create-agreement.dto";
import {AgreementsService} from "./agreements.service";

@Controller('agreements')
export class AgreementsController {

    constructor(private AgreementsService: AgreementsService) {}

    @Post()
    create(@Body() AgreementDto: CreateAgreementDto) {
        return this.AgreementsService.createAgreement(AgreementDto);
    }

    @Get()
    getAll() {
        return this.AgreementsService.getAllAgreements()
    }
}

