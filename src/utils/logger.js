/**
 * Uitls - 日志记录器
 *
 * @file src/utils/logger.js
 * @author mudio(job.mudio@gmail.com)
 */

const logger = require('debug');

export const debug = logger('bce-service-base:debug');
export const info = logger('bce-service-base:info');
export const warn = logger('bce-service-base:warn');
export const error = logger('bce-service-base:error');
