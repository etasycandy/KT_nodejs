const httpStatus = require('http-status');
const { KetQua } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a ketQua
 * @param {Object} ketQuaBody
 * @returns {Promise<KetQua>}
 */
const createKetQua = async (ketQuaBody) => {
  return KetQua.create(ketQuaBody);
};

/**
 * Query for ketQuas
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryKetQuas = async () => {
  const ketQuas = await KetQua.find();
  return ketQuas;
};

/**
 * Get ketQua by id
 * @param {ObjectId} id
 * @returns {Promise<KetQua>}
 */
const getKetQuaById = async (id) => {
  return KetQua.findById(id);
};

/**
 * Update ketQua by id
 * @param {ObjectId} ketQuaId
 * @param {Object} updateBody
 * @returns {Promise<KetQua>}
 */
const updateKetQuaById = async (ketQuaId, updateBody) => {
  const ketQua = await getKetQuaById(ketQuaId);
  if (!ketQua) {
    throw new ApiError(httpStatus.NOT_FOUND, 'KetQua not found');
  }
  Object.assign(ketQua, updateBody);
  await ketQua.save();
  return ketQua;
};

/**
 * Delete ketQua by id
 * @param {ObjectId} ketQuaId
 * @returns {Promise<KetQua>}
 */
const deleteKetQuaById = async (ketQuaId) => {
  const ketQua = await getKetQuaById(ketQuaId);
  if (!ketQua) {
    throw new ApiError(httpStatus.NOT_FOUND, 'KetQua not found');
  }
  await ketQua.remove();
  return ketQua;
};

module.exports = {
  createKetQua,
  queryKetQuas,
  getKetQuaById,
  updateKetQuaById,
  deleteKetQuaById,
};
