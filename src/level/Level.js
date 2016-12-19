/**
 * Level - LevelDB封装
 *
 * @file src/level/Level.js
 * @author mudio(job.mudio@gmail.com)
 */

import levelup from 'levelup';

import {dbPath} from '../config';

export default class Level {
    constructor() {
        this._path = dbPath;
        this._db = levelup(dbPath, {valueEncoding: 'json'});
    }

    put(key, value) {
        return new Promise((resolve, reject) => {
            this._db.put(key, value, (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        });
    }

    get(key) {
        return new Promise((resolve, reject) => {
            this._db.get(key, (err, value) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(value);
                }
            });
        });
    }

    remove(key) {
        return new Promise((resolve, reject) => {
            this._db.del(key, err => (err ? reject(err) : resolve()));
        });
    }

    batch() {
        return this._db.batch();
    }

    getDatabase() {
        return this._db;
    }
}
