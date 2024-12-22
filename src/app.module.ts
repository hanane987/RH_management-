import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RhModule } from './rh/rh.module';

@Module({
    imports: [
        MongooseModule.forRoot('your_mongodb_connection_string'),
        RhModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}