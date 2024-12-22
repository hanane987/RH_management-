import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RhController } from './rh.controller';
import { RhService } from './rh.service';
import { Rh, RhSchema } from './schemas/rh.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Rh.name, schema: RhSchema }])
    ],
    controllers: [RhController],
  
})
export class RhModule {}