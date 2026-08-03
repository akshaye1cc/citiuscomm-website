export type Menu = {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  submenu?: Menu[];
  /**
   * Route prefix that marks this item active. Needed for parents that open a
   * dropdown but do not navigate (no `path`), which otherwise have no way to
   * highlight while you are on one of their child routes.
   */
  activeMatch?: string;
};
