import { Injectable } from '@nestjs/common';
import {Agreement} from "./agreements.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateAgreementDto} from "./dto/create-agreement.dto";

@Injectable()
export class AgreementsService {

    constructor(@InjectModel(Agreement) private AgreementRepository: typeof Agreement) {}

    async createAgreement(dto: CreateAgreementDto) {
        const agreement = await this.AgreementRepository.create(dto);
        return agreement;
    }

    async getAllAgreements() {
        const agreements = await this.AgreementRepository.findAll();
        return agreements;
    }

}

