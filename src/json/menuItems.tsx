export type ItemType = {
  title: string;
  url?: string;
  submenu?: Array<ItemType>
}

export const menuItems: Array<ItemType> = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Menu',
    url: '/',
    submenu: [
      {
        title: 'Login',
        url: '/login',
      },
      {
        title: 'sub menu',
        url: '/',
        submenu: [
          {
            title: 'sub menu',
            url: '/',
          },
          {
            title: 'sub menu',
            submenu: [
              {
                title: 'sub menu',
                url: '/',
              },
              {
                title: 'sub menu',
                url: '/',
              },
            ],
          },
        ],
      },
      {
        title: 'Menu',
        url: '/',
      },
    ],
  },
];
