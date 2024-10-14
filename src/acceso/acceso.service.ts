import { Injectable } from '@nestjs/common';

@Injectable()
export class AccesoService {

  kinds = ["consultoria","producto"];

  /**
   * Get a good
   *
   */
  public get(kind) : string{
    if (this.kinds.includes(kind.kind)){
      return kind.kind;
    } else{
      console.error("No existe ese accesible.")
    }
  };

}
