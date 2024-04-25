"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionManager = void 0;
const relaen_1 = require("relaen");
const noomi_1 = require("noomi");
/**
 * relaen连接管理器
 */
class ConnectionManager extends noomi_1.NoomiConnectionManager {
    /**
     * 构造器
     * @param cfg - 配置对象
     */
    constructor(cfg) {
        super();
        this.options = cfg;
        // relaen 初始化
        try {
            relaen_1.RelaenManager.init(this.options);
        }
        catch (e) {
            console.error(e);
        }
    }
    /**
     * 获取连接
     * @returns relaen connection对象
     */
    async getConnection() {
        return await (0, relaen_1.getConnection)();
    }
    /**
     * 释放连接
     */
    async closeConnection(conn) {
        await conn.close(true);
    }
}
exports.ConnectionManager = ConnectionManager;
//# sourceMappingURL=connectionmanager.js.map