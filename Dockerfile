# 베이스 이미지 지정
FROM node:10

# 컨테이너 상에서의 Work Dir 지정
WORKDIR /usr/src/app

# 현재 로컬 경로에 있는 모든 파일을 -> 컨테이너에 복사
COPY ./ ./

# 이미지 생성 전에 실행할 CMD
RUN npm install

# 컨테이너 시작시 시작될 CMD
CMD ["node", "server.js"]