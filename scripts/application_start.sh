#!/bin/bash
cd enginegroup-webapp/

sudo pm2 stop server

sudo pm2 start server.js

sudo pm2 startup

sudo pm2 save

echo 'pm2 started'