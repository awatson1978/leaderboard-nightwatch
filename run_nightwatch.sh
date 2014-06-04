#!/bin//bash
echo "installing nightwatch in .meteor/local/build"
  cd .meteor/local/build
  sudo npm install nightwatch@0.5.3
  cd ../../..

echo "running nightwatch"
#  sudo .meteor/local/build/node_modules/nightwatch/bin/nightwatch -c private/nightwatch.json -t tests/leaderboardTest.js
   sudo .meteor/local/build/node_modules/nightwatch/bin/nightwatch -c private/nightwatch.json
