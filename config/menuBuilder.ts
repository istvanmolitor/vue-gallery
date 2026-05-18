import { MenuBuilder, type MenuItemConfig } from '@menu/index'
import { Images } from 'lucide-vue-next'

/**
 * Gallery Menu Builder
 * Builds the gallery management menu structure
 */
export class GalleryMenuBuilder extends MenuBuilder {
  build(menu: MenuItemConfig, menuName: string): MenuItemConfig {
    if (menuName === 'admin') {
      return this.buildMainMenu(menu)
    }
    return menu
  }

  /**
   * Build main menu items
   */
  private buildMainMenu(menu: MenuItemConfig): MenuItemConfig {
    this.addMenuItem(menu, {
      id: 'gallery-management',
      title: 'Galériák',
      path: '/admin/gallery',
      icon: Images,
      order: 40
    })

    return menu
  }
}

// Export singleton instance
export const galleryMenuBuilder = new GalleryMenuBuilder()
