import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccesoModule } from './acceso/acceso.module';

@Module({
  imports: [AccesoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
