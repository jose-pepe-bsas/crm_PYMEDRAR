import { AccesoService } from "./acceso.service";

describe('Acceso', () => {

  let tipo: string;
  let accesoService = new AccesoService();


  describe('UsuarioAccede', () => {
    it('should get a kind of good', async () => {
      const result = "consultoria";
      expect(await accesoService.get("consultoria")).toBe(result);
    });
  });
});
