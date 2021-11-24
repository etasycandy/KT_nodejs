const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const khoaRoute = require('./khoa.route');
const lopRoute = require('./lop.route');
const monHocRoute = require('./monHoc.route');
const sinhVienRoute = require('./sinhVien.route');
const ketQuaRoute = require('./ketQua.route');
const kiemtra02Route = require('./kiemtra02.route');

const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/khoas',
    route: khoaRoute,
  },
  {
    path: '/lops',
    route: lopRoute,
  },
  {
    path: '/monHocs',
    route: monHocRoute,
  },
  {
    path: '/sinhViens',
    route: sinhVienRoute,
  },
  {
    path: '/ketQuas',
    route: ketQuaRoute,
  },
  {
    path: '/kiemtra02s',
    route: kiemtra02Route,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
