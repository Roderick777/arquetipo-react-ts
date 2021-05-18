import Service from './service'

class ContratanteService extends Service {
  /** @description Obtiene el listado inicial de profesionales */
  public static async getProfesionals<T>(): Promise<T> {
    const res: T = await this.get('profesionales/home')
    return res
  }
}

export default ContratanteService