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
    async findAll(query: any): Promise<Rh[]> {
        return this.rhModel.find(query).exec();
    }

    async findOne(id: string): Promise<Rh> {
        const rh = await this.rhModel.findById(id).exec();
        if (!rh) {
            throw new NotFoundException(`RH with ID ${id} not found`);
        }
        return rh;
    }
    async update(id: string, updateRhDto: UpdateRhDto): Promise<Rh> {
        const updatedRh = await this.rhModel
            .findByIdAndUpdate(id, updateRhDto, { new: true })
            .exec();
        if (!updatedRh) {
            throw new NotFoundException(`RH with ID ${id} not found`);
        }
        return updatedRh;
    }

    async remove(id: string): Promise<Rh> {
        const deletedRh = await this.rhModel.findByIdAndDelete(id).exec();
        if (!deletedRh) {
            throw new NotFoundException(`RH with ID ${id} not found`);
        }
        return deletedRh;
    }
}