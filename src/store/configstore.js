/**
 * ConfigManager - 程序配置管理
 *
 * @file src/store/configstore.js
 * @author mudio(job.mudio@gmail.com)
 */

import path from 'path';
import ConfigStore from 'configstore';

const bcedir = path.join('..', '.bce');
const store = new ConfigStore(bcedir, {}, {globalConfigPath: true});

store.all = Object.assign(
    {
        credentials: {ak: '', sk: ''},
    },
    store.all,
);

export default store;
