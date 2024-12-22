import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { RhService } from './rh.service';
import { CreateRhDto, UpdateRhDto } from './dto/rh.dto';

@Controller('rh')
export class RhController {
    constructor(private readonly rhService: RhService) {}

    @Post()
    create(@Body() createRhDto: CreateRhDto) {
        return this.rhService.create(createRhDto);
    }