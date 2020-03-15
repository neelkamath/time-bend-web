# Storage

Data is stored using `localStorage`, and manipulated using the [`storage.ts`](src/ts/storage.ts) abstraction layer. Each of the following headings document the key-value pairs stored.

## Day Times

The following table explains the key-value pairs used to store the times of the day. We use 24 hour clocks. The values will need to parsed as `number`s since `localStorage` stores everything as a `string`.

|Key|Explanation|Example|
|:---:|:---:|:---:|
|`startHour`|Day's start hour|`3`|
|`startMinute`|Day's start minute|`17`|
|`endHour`|Day's end hour|`4`|
|`endMinute`|Day's end minute|`22`|

## Tasks

The key `tasks` stores the user's tasks as shown in the following example. `"duration"` must be an integer in the range of 1 and 60. `"created"` is the unique timestamp of when the task was first created (not last updated), which is made by calling `Date.now()`.

```json
[
    {
        "task": "Finish 2 pages of report", 
        "duration": 15,
        "completed": true,
        "created": 1584153362578
    }, 
    {
        "task": "Cook dinner", 
        "duration": 40,
        "completed": false,
        "created": 1584153387963
    }
]
```