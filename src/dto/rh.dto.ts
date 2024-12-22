import { IsString, IsEnum, IsDate, IsNotEmpty, IsOptional, IsEmail, IsPhoneNumber } from 'class-validator';
import { Type } from 'class-transformer';

export enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export enum MaritalStatus {
    SINGLE = 'single',
    MARRIED = 'married',
    DIVORCED = 'divorced',
    WIDOWED = 'widowed'
}

export enum ContractType {
    CDI = 'cdi',
    CDD = 'cdd',
    INTERN = 'intern',
    CONSULTANT = 'consultant'
}

export class CreateRhDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    phone: string;

    @IsNotEmpty()
    @IsEnum(Gender)
    gender: Gender;

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    birthDate: Date;

    @IsNotEmpty()
    @IsEnum(MaritalStatus)
    maritalStatus: MaritalStatus;

    @IsNotEmpty()
    @IsEnum(ContractType)
    contractType: ContractType;

    @IsOptional()
    @IsString()
    address?: string;
}

export class UpdateRhDto extends PartialType(CreateRhDto) {}