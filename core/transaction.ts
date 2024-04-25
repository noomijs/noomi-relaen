import {NoomiTransaction,getConnection} from "noomi";

/**
 * relaen 事务类
 */
export class Transaction extends NoomiTransaction {

    /**
     * 事务开始
     */
    async begin() {
        if (!this.tx) {
            const conn = await getConnection();
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
        } catch (e) {
            console.error(e);
        }
    }
}