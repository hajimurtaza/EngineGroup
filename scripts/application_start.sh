#!/bin/bash
cd enginegroup-webapp/

pm2 stop server.js

pm2 start server.js


echo 'pm2 started'