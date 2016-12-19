/**
 * Config - 配置文件
 *
 * @file src/config.js
 * @author mudio(job.mudio@gmail.com)
 */

import path from 'path';
import home from 'os-homedir';

const homedir = home();

export const dbPath = path.join(homedir, '.bce', 'db');
export const storePath = path.join(homedir, '.bce', 'config.json');
export const extPath = path.join(homedir, '.bce', 'extensions');

