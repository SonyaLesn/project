import { Injectable } from '@nestjs/common';
import {Kid} from "./kids.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateKidDto} from "./dto/create-kid.dto";

@Injectable()
export class KidsService {

    constructor(@InjectModel(Kid) private kidRepository: typeof Kid) {}

    async createKid(dto: CreateKidDto) {
        const kid = await this.kidRepository.create(dto);
        return kid;
    }

    async getAllKids() {
        const kids = await this.kidRepository.findAll();
        return kids;
    }

}
