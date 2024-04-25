"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = void 0;
const noomi_1 = require("noomi");
/**
 * relaen 事务类
 */
class Transaction extends noomi_1.NoomiTransaction {
    /**
     * 事务开始
     */
    async begin() {
        if (!this.tx) {
            const conn = await (0, noomi_1.getConnection)();
            this.tx = conn.createTransaction();
        }
        await this.tx.begin();
    }
    /**
     * 事务提交
     */
    async commit() {
        if (!this.tx) {
            return;
        }
        await this.tx.commit();
    }
    /**
     * 事务回滚
     */
    async rollback() {
        if (!this.tx) {
            return;
        }
        try {
            await this.tx.rollback();
        }
        catch (e) {
            console.error(e);
        }
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=transaction.js.map