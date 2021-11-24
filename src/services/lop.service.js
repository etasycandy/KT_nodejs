const httpStatus = require('http-status');
const { Lop } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a lop
 * @param {Object} lopBody
 * @returns {Promise<Lop>}
 */
const createLop = async (lopBody) => {
  return Lop.create(lopBody);
};

/**
 * Query for lops
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLops = async () => {
  const lops = await Lop.find();
  return lops;
};

/**
 * Get lop by id
 * @param {ObjectId} id
 * @returns {Promise<Lop>}
 */
const getLopById = async (id) => {
  return Lop.findById(id);
};

/**
 * Update lop by id
 * @param {ObjectId} lopId
 * @param {Object} updateBody
 * @returns {Promise<Lop>}
 */
const updateLopById = async (lopId, updateBody) => {
  const lop = await getLopById(lopId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop not found');
  }
  Object.assign(lop, updateBody);
  await lop.save();
  return lop;
};

/**
 * Delete lop by id
 * @param {ObjectId} lopId
 * @returns {Promise<Lop>}
 */
const deleteLopById = async (lopId) => {
  const lop = await getLopById(lopId);
  if (!lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop not found');
  }
  await lop.remove();
  return lop;
};

module.exports = {
  createLop,
  queryLops,
  getLopById,
  updateLopById,
  deleteLopById,
};
