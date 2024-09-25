import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { JOB_TPYE } from "../../constants";
import { AddressSchema, Address } from "../comman/address.schema";
import { Types } from "mongoose";
import { User, USER_MODEL } from "../user/user.schema";
import { Document } from "mongoose";

@Schema({
    timestamps: true
})
export class Job {

    @Prop({ type: Types.ObjectId,ref: USER_MODEL,required: true })
    employer: User | Types.ObjectId;

    @Prop({required: true })
    companyName: string;

    @Prop({required: true })
    title: string;

    @Prop({required: true })
    description: string;

    @Prop({required: true })
    experience: number;

    @Prop({default: []})
    tags?: string[];

    @Prop()
    salary?: string;

    @Prop({ type: AddressSchema, required: true })
    location: Address;

    @Prop({
        type: String,
        enum: Object.keys(JOB_TPYE),
        required: true,
    })
    type: JOB_TPYE;
}

export const JobSchema = SchemaFactory.createForClass(Job);

export const JOBS_MODEL = Job.name;

export type JobDocument = Job & Document;
