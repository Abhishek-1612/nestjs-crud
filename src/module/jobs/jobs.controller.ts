import { Body, Controller, Post, Get, Put, Delete, Param } from "@nestjs/common";
import { jobsService } from "./jobs.service";
import { createJobsDto } from "./dto/create.jobs.dto";
import { updatJobDto } from "./dto/update.jobs.dto";

@Controller("jobs")
export class JobController{
    constructor(private readonly jobService: jobsService){}

    @Post()
    create(@Body() createJobDto: createJobsDto){
        return this.jobService.create(createJobDto);
    }

    @Get()
    findAll(){
        return this.jobService.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string){
        return this.jobService.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updateJobDto: updatJobDto){
        return this.jobService.update(id, updateJobDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string){
        return this.jobService.remove(id);
    }
}