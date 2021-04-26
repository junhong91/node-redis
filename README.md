## node-redis

***

### Run api server
```
node server.js
```

### Create post

<br>

*post example*
```
curl -X POST -d '{"id": 1, "contents": "Hot place!!!", "poster": "junHong LEE"}' -H "Content-Type: application/json" http://localhost:3000/post
```

### Get post

<br>

*get post example*
```
curl http://localhost:3000/posts/{post-id}
```