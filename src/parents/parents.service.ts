import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {CreateParentDto} from "./dto/create-parent.dto";
import {Parent} from "./parents.model";

@Injectable()
export class ParentsService {

    constructor(@InjectModel(Parent) private parentRepository: typeof Parent) {}

    async createParent(dto: CreateParentDto) {
        const parent = await this.parentRepository.create(dto);
        return parent;
    }

    async getAllParents() {
        const parents = await this.parentRepository.findAll();
        return parents;
    }

}

