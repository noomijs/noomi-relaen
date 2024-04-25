import { NoomiTransaction } from "noomi";
/**
 * relaen 事务类
 */
export declare class Transaction extends NoomiTransaction {
    /**
     * 事务开始
     */
    begin(): Promise<void>;
    /**
     * 事务提交
     */
    commit(): Promise<void>;
    /**
     * 事务回滚
     */
    rollback(): Promise<void>;
}
