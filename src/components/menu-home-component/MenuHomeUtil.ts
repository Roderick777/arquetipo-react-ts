import { IMenu } from "../../interfaces/menu.interface";

export class MenuHomeUtil {
  public static getMenu(): Array<IMenu> {
    const menus: Array<IMenu> = [
      { name: 'Directorio Profesionales', link: '/directorio-profesionales', component: null},
      { name: 'Guía de Precios', link: '/guia-precios', component: null},
      { name: 'Comunidad', link: '/comunidad', component: null}
    ]

    return menus
  }
}