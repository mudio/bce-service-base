/**
 * Index - 入口文件
 *
 * @file src/index.js
 * @author mudio(job.mudio@gmail.com)
 */

import Level from './level/Level';
import logger from './utils/logger';
import configstore from './store/configstore';

export default {
    logger, Level, configstore,
};
