import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { usersService } from "./users.service";
import { createUserDto } from "./dto/create.users.dto";
import { updatUserDto } from "./dto/update.users.dto";

@Controller("users")
export class UsersController {
    constructor( private readonly usersSerive: usersService){}

    @Post()
    create(@Body() createUserDto: createUserDto){
        return this.usersSerive.create(createUserDto);
    }

    @Get()
    findAll(){
        return this.usersSerive.findAll();
    }

    @Get(":id")
    findOne(@Param("id") id: string){
        return this.usersSerive.findOne(id);
    }

    @Put(":id")
    update(@Param("id") id: string, @Body() updatUserDto: updatUserDto){
        return this.usersSerive.update(id, updatUserDto);
    }

    @Delete(":id")
    remove(@Param("id") id: string){
        return this.usersSerive.remove(id);
    }
}