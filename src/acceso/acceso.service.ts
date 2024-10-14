import { Injectable } from '@nestjs/common';

@Injectable()
export class AccesoService {

  kinds = ["consultoria","producto"];

  /**
   * Get a good
   *
   */
  public get(kind:string) : string{
    if (this.kinds.includes(kind)){
      return kind;
    } else{
      console.error("No existe ese accesible.")
    }
  };

}
