
/**
 * @description Esta clase contiene funciones utilitarias para formatear datos y validar formatos
 */
class FormatUtil {
  /**
   * @description Esta funcion recibe un fecha en formato string y luego la retorna en formato dd/mm/aaaa
   * @param {string} date 
   * @return string
   */
  public static dateLocal(dateString: string): string {
    const date  = new Date(dateString)
    const day   = ('0' + date.getDate()).slice(-2)
    const month = ('0' + (date.getMonth() + 1)).slice(-2)
    const year  = date.getFullYear()
    return `${day}/${month}/${year}`
  }

    /**
     * @return {string}
     * @description retorna la una cadena que concatena la fecha actual, esta función es útil para generar el nombre de la descarga de archivos
     */
    public static getTimeStampString(): string {
      const date      = new Date()
      const day       = date.getDate()
      const year      = date.getFullYear()
      const hour      = date.getHours()
      const minutes   = date.getMinutes()
      const seconds   = date.getSeconds()
      const month     = date.getMonth() + 1
      const monthStr  = month < 10 ? '0' + month : month + ''
      const dayStr    = day < 10 ? '0' + day : day + ''
      return `${year}/${monthStr}/${dayStr} ${hour}:${minutes}:${seconds}`
    }
}

export default FormatUtil