import { BadRequestException, Injectable, NotFoundException, ServiceUnavailableException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { USER_MODEL, User, UserDocument } from "src/schemas/user";
import { createUserDto } from "./dto/create.users.dto";
import { updatUserDto } from "./dto/update.users.dto";

@Injectable()
export class usersService{
    constructor(@InjectModel(USER_MODEL) private readonly userModel: Model<UserDocument>) {}

    async create(createUserDto: createUserDto){
        try {
            const user = await this.userModel.create(createUserDto);
            return user;
        }catch(error){
            if(error.name == "ValidationError"){
                throw new BadRequestException(error.errors);
            }

            throw new ServiceUnavailableException();
        }
    }

    async findAll(){
        try{
            const users = await this.userModel.find();
            return users;
        }catch(error){
            if(error.name == "ValidationError"){
                throw new BadRequestException(error.errors);
            }

            throw new ServiceUnavailableException();
        }
    }

    async findOne(id: string){
            const user = await this.userModel.findById(id);

            if(!user){
                throw new NotFoundException(" User Not Found");
            }

            return user;
    }

    async update(id: string, updatUserDto: updatUserDto){ 
        try{
            const updatedUser = await this.userModel.findByIdAndUpdate(id, updatUserDto, {new: true});

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
            const deletedUser = await this.userModel.findByIdAndDelete(id);
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