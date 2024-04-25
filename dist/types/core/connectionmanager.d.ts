import { NoomiConnectionManager } from "noomi";
/**
 * relaen连接管理器
 */
export declare class ConnectionManager extends NoomiConnectionManager {
    /**
     * 数据库配置对象
     * 与npm relaen保持一致，示例如下：
     * ```
     * {
     *    "dialect":"mysql",
     *    "host":"localhost",
     *    "port":3306,
     *    "username":"your user name",
     *    "password":"your password",
     *    "database":"your database",
     *    "pool":{
     *        "min":0,
     *        "max":10
     *    },
     *    "entities": [
     *        "your entity js directory"
     *     ],
     *    "cache":true,
     *    "debug":true
     * }
     * ```
     */
    options: any;
    /**
     * 构造器
     * @param cfg - 配置对象
     */
    constructor(cfg: any);
    /**
     * 获取连接
     * @returns relaen connection对象
     */
    getConnection(): Promise<any>;
    /**
     * 释放连接
     */
    closeConnection(conn: any): Promise<void>;
}
