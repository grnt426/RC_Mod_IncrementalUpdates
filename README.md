Incremental Updates Mod
================
Streams updates out of the game and forwards them to any HTTP server listening on localhost:8080/incr_update through
POST requests.

Body Payload Structure
================
`type` - will always be set to "incr_update".
`data` - the payload from the game server that was sent to the game client.
`instance` - the unique game id representing the current game being played.

```json
{
"type":"incr_update",
"data":{
},
"instance": 0
}
```

Example payloads from real games

```json
{"type":"incr_update","data":{"faction_faction_contact":{"contact":{"details":{"explorer":[{"reason":"PlayerName","value":1}]},"minimum":[],"value":1},"system_id":52,"receivedAt":1652128443702}},"instance":2762}
```

```json
{"type":"incr_update","data":{"player_notifs":[{"data":null,"key":"ship_finished","system_id":null,"type":"sound"}]},"instance":2762}
```

In this case, `system_id` is always null. This appears to be a bug on the server side that it won't send what system
finished building a ship. Same with buildings.