import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongooseConfigService } from './mongoose-config.service';

@Module({
  imports: [
    /* MongooseModule.forRoot(
      "mongodb://localhost:27017/nest_app_db"
    ), */

    /* MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const dbName = configService.get("DB_NAME");
        const dbHost = configService.get("DB_HOST");
        const dbPort = configService.get("DB_PORT");
        const nodeEnv = configService.get("NODE_ENV");

        if(nodeEnv == "local"){
          console.log(nodeEnv);
        }

        const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

        return {
          uri,
        }
      },
      inject: [ConfigService],
    }), */

    MongooseModule.forRootAsync({ 
      useClass: MongooseConfigService,
    }),
  ],
})
export class DatabaseModule {}
