import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/mongoose/database.module';
import { UsersModule } from './module/users/users.module';
import { JobModule } from './module/jobs/jobs.module';
import { MongooseModelsModule } from './schemas/mongoose-model.module';

@Module({
  imports: 
  [
    ConfigModule.forRoot({ isGlobal: true }), 
    DatabaseModule,
    UsersModule,
    JobModule,
    MongooseModelsModule
  ],
})
export class AppModule {}
