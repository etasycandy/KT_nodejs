const mongoose = require('mongoose');
const { Lop, SinhVien, Khoa, KetQua, MonHoc } = require('../models');

/**
 * cau1
 * @returns
 */
const cau1 = async () => {
    const lops = await Lop.find();
    return lops;
};

/**
 * cau2
 * @returns
 */
const cau2 = async () => {
    const results = await SinhVien.find().select('id hoTen hocBong');
    return results;
};

/**
 * cau3
 * @returns
 */
const cau3 = async () => {
  const results = await SinhVien.find().select('id hoTen nu hocBong').where('hocBong').gt(0);
  return results;
};

/**
 * cau4
 * @returns
 */
const cau4 = async () => {
  const results = await SinhVien.find().where('nu').equals('true');
  return results;
};

/**
 * cau5
 * @returns
 */
const cau5 = async () => {
  const results = await SinhVien.find({ hoTen: /^Trần/ });
  return results;
};

/**
 * cau6
 * @returns
 */
const cau6 = async () => {
  const results = await SinhVien.find().where('nu').equals('true').where('hocBong').gt(0);
  return results;
};

/**
 * cau7
 * @returns
 */
const cau7 = async () => {
  const results = await SinhVien.find({
    $or: [{ nu: 'true' }, { hocBong: { $gt: 0 } }],
  });
  return results;
};

/**
 * cau8
 * @returns
 */
const cau8 = async () => {
  const results = await SinhVien.find({
    ngaySinh: {
      $gte: new Date(1978, 1, 1),
      $lt: new Date(1986, 1, 1),
    //   $lt: new Date(2000, 1, 1),
    },
  });
  return results;
};

/**
 * cau9
 * @returns
 */
const cau9 = async () => {
  const results = await SinhVien.find().sort('id');
  return results;
};

/**
 * cau10
 * @returns
 */
const cau10 = async () => {
    const results = await SinhVien.find().sort('-hocBong');
    return results;
};


module.exports = {
  cau1,
  cau2,
  cau3,
  cau4,
  cau5,
  cau6,
  cau7,
  cau8,
  cau9,
  cau10,

};
