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

