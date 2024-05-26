import {Body, Controller, Get, Post} from '@nestjs/common';
import {CreateWorkerDto} from "./dto/create-worker.dto";
import {WorkersService} from "./Workers.service";

@Controller('workers')
export class WorkersController {

    constructor(private WorkersService: WorkersService) {}

    @Post()
    create(@Body() WorkerDto: CreateWorkerDto) {
        return this.WorkersService.createWorker(WorkerDto);
    }

    @Get()
    getAll() {
        return this.WorkersService.getAllWorkers()
    }
}

