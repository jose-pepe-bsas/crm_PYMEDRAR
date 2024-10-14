import { Controller, Get } from '@nestjs/common';
import { AccesoService } from "./acceso.service";

@Controller('acceso')
export class AccesoController {

  @Get("/consultoria")
  getConsultoria():string{
    return new AccesoService().get("consultoria");
  };

}
