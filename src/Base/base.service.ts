import dayjs from "dayjs";

export abstract class BaseService {
    dateTimeNow: Date;

    protected constructor() {
        this.dateTimeNow = new Date();
    }

    protected transformToDate(date: string): string {
        return dayjs(date).format();
    }

    protected getCurrentTime(): string {
        return this.dateTimeNow.toISOString();
    }
}