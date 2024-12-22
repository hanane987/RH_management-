import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Gender, MaritalStatus, ContractType } from '../dto/rh.dto';

@Schema({ timestamps: true })
export class Rh extends Document {
    @Prop({ required: true })
    firstName: string;

    @Prop({ required: true })
    lastName: string;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    phone: string;

    @Prop({ required: true, enum: Gender })
    gender: Gender;

    @Prop({ required: true })
    birthDate: Date;

    @Prop({ required: true, enum: MaritalStatus })
    maritalStatus: MaritalStatus;

    @Prop({ required: true, enum: ContractType })
    contractType: ContractType;

    @Prop()
    address: string;
}

export const RhSchema = SchemaFactory.createForClass(Rh);