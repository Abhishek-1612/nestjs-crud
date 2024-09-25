import { BadRequestException, ForbiddenException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { JOBS_MODEL, JobDocument } from "src/schemas/job";
import { usersService } from "../users/users.service";
import { ACCOUNT_TYPE } from "src/constants";
import { createJobsDto } from "./dto/create.jobs.dto";
import { updatJobDto } from "./dto/update.jobs.dto";

@Injectable()
export class jobsService{
    constructor(@InjectModel(JOBS_MODEL) private readonly jobModel: Model<JobDocument>,
    private readonly userService: usersService
    ) {}

    async create (createJobDto: createJobsDto){
        const user = await this.userService.findOne(createJobDto.userId);
        if(!user){
            throw new NotFoundException("user not found");
        }else if(user.accountType !== ACCOUNT_TYPE.EMPLOYER){
            throw new ForbiddenException("Only employer can create a job");
        }
        const job = await this.jobModel.create({...createJobDto, employer: user._id});

        return job;

    }

    async findAll(){
        try{
            const users = await this.jobModel.find();
            return users;
        }catch(error){
            if(error.name == "ValidationError"){
                throw new BadRequestException(error.errors);
            }

            throw new ServiceUnavailableException();
        }
    }

    async findOne(id: string){
            const user = await this.jobModel.findById(id);

            if(!user){
                throw new NotFoundException(" User Not Found");
            }

            return user;
    }

    async update(id: string, updateJobDto:updatJobDto){ 
        try{
            const updatedUser = await this.jobModel.findByIdAndUpdate(id, updateJobDto, {new: true});

            if(!updatedUser){
                throw new NotFoundException("User Not FOund");
            }

            return updatedUser;

        }catch(error){
            if(error.name == "ValidationError"){
                throw new BadRequestException(error.errors);
            }

            throw new ServiceUnavailableException();
        }
    }

    async remove(id: string){
        try{
            const deletedUser = await this.jobModel.findByIdAndDelete(id);
            if(!deletedUser){
                throw new NotFoundException("Not found");
            }

            return {
                _id: id,
            };
        }catch(error){
            if(error.name == "ValidationError"){
                throw new BadRequestException(error.errors);
            }

            throw new ServiceUnavailableException();
        }
    }
}