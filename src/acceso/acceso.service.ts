import { Injectable } from '@nestjs/common';

@Injectable()
export class AccesoService {

  /**
   * Get a good
   *
   */
  public get(kind:string) : string{
    return "consultoria";
  };

}
