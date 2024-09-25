import { Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, isString } from "class-validator";
import { ACCOUNT_TYPE, JOB_TPYE } from "src/constants";
import { AddressDto } from "src/dto";


export class createJobsDto{

    @IsString()
    @IsNotEmpty()
    userId: string;

    @IsString()
    @IsNotEmpty()
    companyName: string;

    @IsString()
    @IsNotEmpty()
    title: string;

    @IsString()
    @IsNotEmpty()
    description: string;

    @IsNumber()
    @IsOptional()
    experience?: number;

    @IsString()
    @IsNotEmpty()
    salary?: string;

    @Type(() => AddressDto)
    @ValidateNested()
    @IsNotEmpty()
    location: AddressDto;

    @IsEnum(JOB_TPYE)
    @IsNotEmpty()
    type: JOB_TPYE;

    @IsString({each: true})
    @IsOptional()
    tags?: string[];
}