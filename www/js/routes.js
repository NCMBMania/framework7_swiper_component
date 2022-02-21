
const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/gallery',
    componentUrl: './pages/gallery.html',
  },
  {
    path: '/cat/:id',
    componentUrl: './pages/dummy.html',
  },
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
