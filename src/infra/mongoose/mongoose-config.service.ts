import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
    constructor(private config: ConfigService){}

    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const dbName = this.config.get("DB_NAME");
        const dbHost = this.config.get("DB_HOST");
        const dbPort = this.config.get("DB_PORT");
        const nodeEnv = this.config.get("NODE_ENV");

        if(nodeEnv == "local"){
            console.log(nodeEnv);
        }

        const uri = `mongodb://${dbHost}:${dbPort}/${dbName}`;

        return {
            uri,
        }
    }
}