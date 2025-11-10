# Redis Commands Guide

This comprehensive guide covers essential Redis commands, including data types, operations, and server management.

## Installation and Setup

### 1. Run Redis with Docker
Start Redis server using Docker:
```bash
docker run --name my-redis -d redis
docker run --name my-redis -d -p 6379:6379 redis  # Expose port
docker run --name my-redis -d -v redis-data:/data redis  # Persistent data
```

### 2. Interact with Redis CLI
Access Redis command-line interface:
```bash
docker exec -it my-redis redis-cli
redis-cli  # If Redis is running locally
redis-cli -h <host> -p <port>  # Connect to specific instance
```

### 3. Check Redis Info
Get server information:
```redis
INFO
INFO SERVER
INFO MEMORY
INFO STATS
```

## Connection Commands

### 4. Ping Server
Test connection to Redis server:
```redis
PING
PING "hello"
```

### 5. Select Database
Switch to a different database:
```redis
SELECT 1
SELECT 0  # Default database
```

### 6. Authenticate
Authenticate with password:
```redis
AUTH <password>
```

### 7. Quit Connection
Close the connection:
```redis
QUIT
```

## Key Commands

### 8. Set Key Value
Set a key with a value:
```redis
SET key value
SET key value EX 10  # Expire in 10 seconds
SET key value PX 1000  # Expire in 1000 milliseconds
SET key value NX  # Only if key doesn't exist
SET key value XX  # Only if key exists
```

### 9. Get Key Value
Retrieve the value of a key:
```redis
GET key
```

### 10. Check Key Existence
Check if keys exist:
```redis
EXISTS key
EXISTS key1 key2 key3
```

### 11. Delete Keys
Delete one or more keys:
```redis
DEL key
DEL key1 key2 key3
```

### 12. Set Expiration
Set expiration time on keys:
```redis
EXPIRE key seconds
PEXPIRE key milliseconds  # Milliseconds
EXPIREAT key timestamp
PEXPIREAT key milliseconds-timestamp
```

### 13. Get Expiration
Get time to live for a key:
```redis
TTL key
PTTL key  # Milliseconds
```

### 14. Remove Expiration
Remove expiration from a key:
```redis
PERSIST key
```

### 15. Rename Key
Rename a key:
```redis
RENAME key newkey
RENAMENX key newkey  # Only if new key doesn't exist
```

### 16. Get Key Type
Get the type of a key's value:
```redis
TYPE key
```

### 17. Scan Keys
Iterate over keys:
```redis
SCAN 0  # Start scanning
SCAN <cursor> MATCH pattern COUNT 10
KEYS pattern  # Get all matching keys (blocking)
```

## String Commands

### 18. Set Multiple Keys
Set multiple key-value pairs:
```redis
MSET key1 value1 key2 value2
```

### 19. Get Multiple Keys
Get values of multiple keys:
```redis
MGET key1 key2 key3
```

### 20. Increment Values
Increment integer values:
```redis
INCR key
INCRBY key increment
INCRBYFLOAT key increment
```

### 21. Decrement Values
Decrement integer values:
```redis
DECR key
DECRBY key decrement
```

### 22. Append to String
Append value to existing string:
```redis
APPEND key value
```

### 23. Get String Length
Get length of string value:
```redis
STRLEN key
```

### 24. Get Substring
Get substring of string value:
```redis
GETRANGE key start end
```

### 25. Set Substring
Set substring of string value:
```redis
SETRANGE key offset value
```

## Hash Commands

### 26. Set Hash Fields
Set hash field values:
```redis
HSET hashkey field value
HMSET hashkey field1 value1 field2 value2
```

### 27. Get Hash Fields
Get hash field values:
```redis
HGET hashkey field
HMGET hashkey field1 field2
HGETALL hashkey
```

### 28. Check Hash Fields
Check if hash fields exist:
```redis
HEXISTS hashkey field
```

### 29. Get Hash Length
Get number of fields in hash:
```redis
HLEN hashkey
```

### 30. Get Hash Field Names
Get all field names in hash:
```redis
HKEYS hashkey
```

### 31. Get Hash Field Values
Get all field values in hash:
```redis
HVALS hashkey
```

### 32. Delete Hash Fields
Delete fields from hash:
```redis
HDEL hashkey field1 field2
```

### 33. Increment Hash Fields
Increment hash field values:
```redis
HINCRBY hashkey field increment
HINCRBYFLOAT hashkey field increment
```

## List Commands

### 34. Push to List
Add elements to list:
```redis
LPUSH listkey value1 value2  # Left push
RPUSH listkey value1 value2  # Right push
```

### 35. Pop from List
Remove and return elements from list:
```redis
LPOP listkey  # Left pop
RPOP listkey  # Right pop
BLPOP listkey timeout  # Blocking left pop
BRPOP listkey timeout  # Blocking right pop
```

### 36. Get List Elements
Get elements from list:
```redis
LRANGE listkey start stop
LINDEX listkey index
```

### 37. Set List Element
Set element at index in list:
```redis
LSET listkey index value
```

### 38. Get List Length
Get length of list:
```redis
LLEN listkey
```

### 39. Trim List
Trim list to specified range:
```redis
LTRIM listkey start stop
```

### 40. Insert into List
Insert element before/after pivot:
```redis
LINSERT listkey BEFORE pivot value
LINSERT listkey AFTER pivot value
```

## Set Commands

### 41. Add to Set
Add members to set:
```redis
SADD setkey member1 member2
```

### 42. Get Set Members
Get all members of set:
```redis
SMEMBERS setkey
```

### 43. Check Set Membership
Check if member exists in set:
```redis
SISMEMBER setkey member
```

### 44. Get Set Cardinality
Get number of members in set:
```redis
SCARD setkey
```

### 45. Remove from Set
Remove members from set:
```redis
SREM setkey member1 member2
SPOP setkey  # Remove random member
SPOP setkey count  # Remove multiple random members
```

### 46. Set Operations
Perform operations between sets:
```redis
SUNION set1 set2  # Union
SINTER set1 set2  # Intersection
SDIFF set1 set2  # Difference
SUNIONSTORE dest set1 set2  # Store union
SINTERSTORE dest set1 set2  # Store intersection
SDIFFSTORE dest set1 set2  # Store difference
```

### 47. Random Set Member
Get random member from set:
```redis
SRANDMEMBER setkey
SRANDMEMBER setkey count
```

## Sorted Set Commands

### 48. Add to Sorted Set
Add members with scores to sorted set:
```redis
ZADD zsetkey score1 member1 score2 member2
```

### 49. Get Sorted Set Range
Get members by score range:
```redis
ZRANGE zsetkey min max
ZRANGE zsetkey min max WITHSCORES
ZREVRANGE zsetkey min max  # Reverse order
```

### 50. Get Sorted Set by Index
Get members by index range:
```redis
ZRANGE zsetkey start stop
ZREVRANGE zsetkey start stop
```

### 51. Get Member Score
Get score of a member:
```redis
ZSCORE zsetkey member
```

### 52. Remove from Sorted Set
Remove members from sorted set:
```redis
ZREM zsetkey member1 member2
ZREMRANGEBYSCORE zsetkey min max
ZREMRANGEBYRANK zsetkey start stop
```

### 53. Get Sorted Set Cardinality
Get number of members in sorted set:
```redis
ZCARD zsetkey
ZCOUNT zsetkey min max  # Count by score range
```

### 54. Increment Score
Increment score of a member:
```redis
ZINCRBY zsetkey increment member
```

## Transaction Commands

### 55. Start Transaction
Begin a transaction:
```redis
MULTI
```

### 56. Execute Transaction
Execute queued commands:
```redis
EXEC
```

### 57. Discard Transaction
Discard queued commands:
```redis
DISCARD
```

### 58. Watch Keys
Watch keys for conditional execution:
```redis
WATCH key1 key2
```

### 59. Unwatch Keys
Unwatch all keys:
```redis
UNWATCH
```

## Pub/Sub Commands

### 60. Subscribe to Channels
Subscribe to channels:
```redis
SUBSCRIBE channel1 channel2
PSUBSCRIBE pattern*  # Pattern subscription
```

### 61. Publish to Channel
Publish message to channel:
```redis
PUBLISH channel message
```

### 62. Unsubscribe
Unsubscribe from channels:
```redis
UNSUBSCRIBE channel1 channel2
PUNSUBSCRIBE pattern*
```

### 63. List Channels
Get active channels:
```redis
PUBSUB CHANNELS
PUBSUB NUMSUB channel1 channel2  # Subscriber count
```

## Server Management

### 64. Flush Database
Delete all keys from current database:
```redis
FLUSHDB
FLUSHALL  # Delete all keys from all databases
```

### 65. Save Database
Save database to disk:
```redis
SAVE
BGSAVE  # Background save
```

### 66. Get Database Size
Get number of keys in database:
```redis
DBSIZE
```

### 67. Select Database
Switch between databases:
```redis
SELECT dbnumber
```

### 68. Get Client List
List connected clients:
```redis
CLIENT LIST
CLIENT KILL <ip>:<port>  # Kill client
```

### 69. Get Memory Usage
Get memory usage of a key:
```redis
MEMORY USAGE key
```

### 70. Monitor Commands
Monitor all commands received:
```redis
MONITOR
```

## Advanced Commands

### 71. Bit Operations
Perform bit operations:
```redis
SETBIT key offset value
GETBIT key offset
BITCOUNT key
BITOP operation dest key1 key2
```

### 72. HyperLogLog
Estimate cardinality:
```redis
PFADD key element1 element2
PFCOUNT key
PFMERGE dest key1 key2
```

### 73. Geo Commands
Store and query geospatial data:
```redis
GEOADD key longitude latitude member
GEODIST key member1 member2
GEORADIUS key longitude latitude radius
GEOHASH key member
```

### 74. Stream Commands
Work with streams:
```redis
XADD stream * field1 value1 field2 value2
XRANGE stream start end
XREAD COUNT 10 STREAMS stream 0
```

### 75. Scripting
Execute Lua scripts:
```redis
EVAL "return redis.call('SET', KEYS[1], ARGV[1])" 1 key value
SCRIPT LOAD "script"
SCRIPT EXISTS sha1
SCRIPT FLUSH
```

---

*Note: Redis commands are case-insensitive. Many commands support additional options not listed here. Use `HELP command` in redis-cli for detailed information. This guide covers the most commonly used Redis commands across different data types and operations.*
