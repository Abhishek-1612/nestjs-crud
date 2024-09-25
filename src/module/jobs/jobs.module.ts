import { Module } from "@nestjs/common";
import { jobsService } from "./jobs.service";
import { UsersModule } from "../users/users.module";
import { JobController } from "./jobs.controller";

@Module({
    imports: [UsersModule],
    providers: [jobsService],
    exports: [],
    controllers: [JobController],
})

export class JobModule{}