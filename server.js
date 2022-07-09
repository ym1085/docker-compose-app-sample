const express = require("express");
const redis = require("redis");

// redis client 생성
// redis 서버가 먼저 구동 되 있어야 한다
const client = redis.createClient({
    host: "redis-server", //  docker 환경 일때의 host는 다르다
    port: 6379,
});

// express application 생성
const app = express();

// 숫자는 0 부터 시작한다
client.set("number", 0);

app.get("/", (req, res) => {
    client.get("number", (err, number) => {
        // 현재 가져온 숫자를 1씩 증가 시킨다
        client.set("number", parseInt(number) + 1);
        res.send("숫자가 1씩 올라갑니다. 숫자: " + number);
    });
});

app.listen(8080);
console.log(`Server is running...`);
