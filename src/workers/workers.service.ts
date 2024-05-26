import { Injectable } from '@nestjs/common';
import {Worker} from "./workers.model";
import {InjectModel} from "@nestjs/sequelize";
import {CreateWorkerDto} from "./dto/create-worker.dto";

@Injectable()
export class WorkersService {

    constructor(@InjectModel(Worker) private WorkerRepository: typeof Worker) {}

    async createWorker(dto: CreateWorkerDto) {
        const worker = await this.WorkerRepository.create(dto);
        return worker;
    }

    async getAllWorkers() {
        const workers = await this.WorkerRepository.findAll();
        return workers;
    }

}


