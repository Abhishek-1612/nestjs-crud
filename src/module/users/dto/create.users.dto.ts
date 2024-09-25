import { Type } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested, isString } from "class-validator";
import { ACCOUNT_TYPE } from "src/constants";
import { AddressDto } from "src/dto";


export class createUserDto{
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsNumber()
    @IsOptional()
    age?: number;

    @IsString()
    @IsNotEmpty()
    phone?: string;

    @IsEnum(ACCOUNT_TYPE)
    @IsNotEmpty()
    accountType: ACCOUNT_TYPE;

    @IsString({each: true})
    @IsOptional()
    social?: string[];

    @Type(() => AddressDto)
    @ValidateNested()
    @IsNotEmpty()
    address: AddressDto;

    @IsOptional()
    metadata: Record<string, any>
}