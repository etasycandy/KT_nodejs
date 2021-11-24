const express = require('express');
const kiemtra02Controller = require('../../controllers/kiemtra02.controller');

const router = express.Router();

router.route('/cau1').get(kiemtra02Controller.cau1);
router.route('/cau2').get(kiemtra02Controller.cau2);
router.route('/cau3').get(kiemtra02Controller.cau3);
router.route('/cau4').get(kiemtra02Controller.cau4);
router.route('/cau5').get(kiemtra02Controller.cau5);
router.route('/cau6').get(kiemtra02Controller.cau6);
router.route('/cau7').get(kiemtra02Controller.cau7);
router.route('/cau8').get(kiemtra02Controller.cau8);
router.route('/cau9').get(kiemtra02Controller.cau9);
router.route('/cau10').get(kiemtra02Controller.cau10);

module.exports = router;
