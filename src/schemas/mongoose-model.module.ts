import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { JOBS_MODEL, JobSchema } from "./job/job.schema";
import { USER_MODEL, UserSchema } from "./user/user.schema";

const MODELS = [
    { name: JOBS_MODEL, schema: JobSchema},
    { name: USER_MODEL, schema: UserSchema},
];

@Global()
@Module({
    imports: [MongooseModule.forFeature(MODELS)],
    exports: [MongooseModule],
})

export class MongooseModelsModule {}