
/** @description Esta clase contiene funcione que ayudan sinplificr acciones y retornar datos asociados a una sesón de usuario */
class SessionUtil {
  public static TOKEN_KEY: string = 'token'
  public static PROFILE_TYPE_KEY: string = 'perfil'

  /** @description Valida si hay una sesión activa, retorna verdadero cuando hay sesión*/
  public static hasSession(): boolean {
    const token: string | null = localStorage.getItem(this.TOKEN_KEY)
    return token != null ? true : false
  }

  /** @description Retorna un string con el nombre del perfil de usuario autenticado, si no encuentra el valor o no tiene sesión iniciada retonra null */
  public static getProfileType(): string | null {
    const perfil: string | null = localStorage.getItem(this.PROFILE_TYPE_KEY)
    return perfil

  }
}

export default SessionUtil