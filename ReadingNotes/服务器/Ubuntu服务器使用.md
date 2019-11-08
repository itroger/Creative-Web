- 登录服务器
```bash
ssh ubuntu@129.204.123.216
```

- 安装 Node.js
```bash
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```
[参考来源](https://github.com/nodesource/distributions/blob/master/README.md)

- 安装 Git
```bash
sudo apt-get install git
```
- 更新 Git
```bash
sudo add-apt-repository ppa:git-core/ppa 
sudo apt update
sudo apt install git
```
[参考来源](https://git-scm.com/download/linux)

- 使用 Node 与 GitHub Webhook 更新服务器
[参考来源](https://cloud.tencent.com/developer/article/1360717)

- 使用 Node 搭建服务器
[参考来源](https://github.com/wmui/web-deploy/blob/master/bu-shu-hello-world.md)

- 安装 MongoDB Server
[参考来源](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/)

- npm-pm2：进程管理工具
- koa：Web 框架
- koa-router：koa 路由中间件