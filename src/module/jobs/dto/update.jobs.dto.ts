import { OmitType, PartialType } from "@nestjs/mapped-types";
import { createJobsDto } from "./create.jobs.dto";


export class updatJobDto extends PartialType(OmitType(createJobsDto, ["userId"])){}