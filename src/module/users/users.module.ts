import { Module } from "@nestjs/common";
import { usersService } from "./users.service";
import { UsersController } from "./users.controller";

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [usersService],
    exports: [usersService],
})

export class UsersModule{}