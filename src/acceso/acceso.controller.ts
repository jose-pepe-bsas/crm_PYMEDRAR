import { Controller, Get, Param } from '@nestjs/common';
import { AccesoService } from "./acceso.service";

@Controller('acceso')
export class AccesoController {

  @Get("/:kind")
  getConsultoria(@Param() kind:any):string{
    return new AccesoService().get(kind.kind);
  };

}
