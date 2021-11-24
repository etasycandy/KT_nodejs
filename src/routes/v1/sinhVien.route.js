const express = require('express');
const sinhVienController = require('../../controllers/sinhVien.controller');

const router = express.Router();

router
    .route('/')
    .post(sinhVienController.createSinhVien)
    .get(sinhVienController.getSinhViens);

router
    .route('/:sinhVienId')
    .get(sinhVienController.getSinhVien)
    .patch(sinhVienController.updateSinhVien)
    .delete(sinhVienController.deleteSinhVien);

module.exports = router;
