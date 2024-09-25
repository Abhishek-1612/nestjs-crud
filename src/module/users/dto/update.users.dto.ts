import { OmitType, PartialType } from "@nestjs/mapped-types";
import { createUserDto } from "./create.users.dto";


export class updatUserDto extends PartialType(OmitType(createUserDto, ["accountType", "metadata"])){}