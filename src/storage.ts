import {Time} from './timeFormatter';

export interface DayTimes {
    readonly dayStart: Time
    readonly dayEnd: Time
}

export function saveDayTimes(dayTimes: DayTimes): void {
    saveStartTime(dayTimes.dayStart);
    saveEndTime(dayTimes.dayEnd);
}

export function saveStartTime(time: Time): void {
    saveStartHour(time.hour);
    saveStartMinute(time.minute);
}

export function saveStartHour(hour: number): void {
    saveTime('startHour', hour);
}

export function saveStartMinute(minute: number): void {
    saveTime('startMinute', minute);
}

export function saveEndTime(time: Time): void {
    saveEndHour(time.hour);
    saveEndMinute(time.minute);
}

export function saveEndHour(hour: number,): void {
    saveTime('endHour', hour);
}

export function saveEndMinute(minute: number): void {
    saveTime('endMinute', minute);
}

function saveTime(key: string, time: number): void {
    localStorage.setItem(key, time.toString());
}

export function getStartTime(): Time {
    return {hour: getStartHour(), minute: getStartMinute()};
}

export function getStartHour(): number {
    return getTime('startHour');
}

export function getStartMinute(): number {
    return getTime('startMinute');
}

export function getEndTime(): Time {
    return {hour: getEndHour(), minute: getEndMinute()};
}

export function getEndHour(): number {
    return getTime('endHour');
}

export function getEndMinute(): number {
    return getTime('endMinute');
}

function getTime(key: string): number {
    const time = localStorage.getItem(key);
    return parseInt(time === null ? '0' : time);
}

export interface ActionData {
    /** The action to be performed (e.g., `"Workout"`). */
    readonly action: string
    /** An integer in the range of 1 and 60 which denotes the number of minutes the taskData is planned for. */
    readonly duration: number
}

export interface TaskData extends ActionData {
    readonly isComplete: boolean
    /** The time (`Date.now()`) at which this task was created (unique to every `TaskData`). */
    readonly created: number
}

export function createTask(data: ActionData): void {
    const tasks = getTasks();
    tasks.push({...data, isComplete: false, created: Date.now()});
    saveTasks(tasks);
}

/** Overwrites the tasks with the supplied value after removing `undefined` elements. */
export function saveTasks(tasks: TaskData[]): void {
    localStorage.setItem('tasks', JSON.stringify(tasks.filter((value: TaskData) => value !== undefined)));
}

export function updateTask(task: TaskData): void {
    const tasks = getTasks();
    const index = tasks.findIndex((value: TaskData) => value.created === task.created);
    tasks[index] = task;
    if (task.isComplete) {
        tasks.push(task);
        delete tasks[index];
    }
    saveTasks(tasks);
}

/**
 * Shifts the task at the `fromIndex` to the `toIndex`. If `isCompleted` is `true`, then the task will be shifted with
 * the offset of the first completed task. This means that if you are shifting the first completed task, then
 * `fromIndex` should be `0` even if there are incomplete tasks before it.
 */
export function shiftTasks(isCompleted: boolean, fromIndex: number, toIndex: number): void {
    const tasks = getTasks();
    if (isCompleted) {
        const offset = tasks.findIndex((value: TaskData) => value.isComplete);
        fromIndex += offset;
        toIndex += offset;
    }
    const task = tasks[fromIndex];
    delete tasks[fromIndex];
    tasks.splice(toIndex, 0, task);
    saveTasks(tasks);
}

export function getTasks(): TaskData[] {
    const tasks = localStorage.getItem('tasks');
    return tasks === null ? [] : JSON.parse(tasks);
}

export function deleteTask(task: TaskData): void {
    saveTasks(getTasks().filter((value: TaskData) => value.created !== task.created));
}

export function deleteTasks(): void {
    saveTasks([]);
}