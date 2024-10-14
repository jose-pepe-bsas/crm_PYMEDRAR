import { Controller, Get, Param } from '@nestjs/common';
import { AccesoService } from "./acceso.service";
import { MakeAccesoDTO } from "./makeaccess.dto";

@Controller('acceso')
export class AccesoController {

  @Get("/:kind")
  getConsultoria(@Param() kind:any):string{
    let gettableDTO = new MakeAccesoDTO().getDtoOf(kind.kind)
    return new AccesoService().get(gettableDTO);
  };

}
