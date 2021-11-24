const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const { kiemtra02Service } = require('../services');

const cau1 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau1(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau2 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau2(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau3 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau3(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau4 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau4(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau5 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau5(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau6 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau6(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau7 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau7(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau8 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau8(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau9 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau9(req.body);
  res.status(httpStatus.CREATED).send(results);
});

const cau10 = catchAsync(async (req, res) => {
  const results = await kiemtra02Service.cau10(req.body);
  res.status(httpStatus.CREATED).send(results);
});


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
