export interface Time {
    readonly hour: number
    readonly minute: number
}

/** Formats the `time` (e.g., `"03:14"`). */
export function formatTime(time: Time): string {
    return `${formatTimeUnit(time.hour)}:${formatTimeUnit(time.minute)}`;
}

/** Formats the `time` (e.g., `3` as `'03'`, `10` as `'10`'). */
export function formatTimeUnit(time: number): string {
    return time < 10 ? `0${time}` : time.toString();
}