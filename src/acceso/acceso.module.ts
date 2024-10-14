import { Module } from '@nestjs/common';
import { AccesoController } from './acceso.controller';

@Module({
  controllers: [AccesoController]
})
export class AccesoModule {}
