#!/bin/bash
cd enginegroup-webapp/

sudo pm2 stop server

sudo pm2 start server.js


echo 'pm2 started'