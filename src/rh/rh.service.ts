import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRhDto, UpdateRhDto } from './dto/rh.dto';
import { Rh } from './schemas/rh.schema';

@Injectable()
export class RhService {
    constructor(
        @InjectModel(Rh.name) private rhModel: Model<Rh>
    ) {}

    async create(createRhDto: CreateRhDto): Promise<Rh> {
        const createdRh = new this.rhModel(createRhDto);
        return createdRh.save();
    }