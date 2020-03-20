# Storage

Data is stored using `localStorage`, and manipulated using the [`storage.ts`](src/storage.ts) abstraction layer. Each of the following headings document the key-value pairs stored.

## Day Times

The following table explains the key-value pairs used to store the times of the day. We use 24-hour clocks. The values will need to parsed as `number`s since `localStorage` stores everything as a `string`.

|Key|Explanation|Example|
|---|---|---|
|`startHour`|Day's start hour|`3`|
|`startMinute`|Day's start minute|`17`|
|`endHour`|Day's end hour|`4`|
|`endMinute`|Day's end minute|`22`|

## Tasks

The key `tasks` stores the user's tasks as shown in the following example.

```json
[
    {
        "task": "Finish 2 pages of report", 
        "duration": 15,
        "isComplete": false,
        "created": 1584600271313
    }, 
    {
        "task": "Cook dinner", 
        "duration": 40,
        "isComplete": true,
        "created": 1584600275482
    }
]
```

The index of the task is representative of its position in the UI. Completed tasks are placed at the end of the array. The following table explains the key-value pairs of each task object.

|Key|Explanation|
|---|---|
|`task`|The action to be performed.|
|`duration`|Integer in the range of 1 and 60.|
|`isComplete`|Whether the task has been completed.|
|`created`|The time at which this task was created. It is created using `Date.now()`, and is unique to every task.|