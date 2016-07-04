Simple Node-RED Server
======================

# Installation
	
	npm install

# Running

	## Development
	NODE_ENV=development npm start
	
	## Debugging
	# use admin:admin as default password
	NODE_ENV=development DEBUG=simple-node-red-server:* npm start
	
	## Production
	# Admin user
	export NODE_RED_ADMIN=admin
	# Password hash generated with the node-red-admin tool
	# see https://github.com/node-red/node-red-admin for usage
	export NODE_RED_PASSWORD=<password hash>
	npm start
	
# Adding Custom Nodes

	## Using NPM
	npm install --save <node-red-package>
	
	## Example
	npm install --save node-red-contrib-ifttt
	
# Routes

## /admin

Node-RED Editor

## /api

Node-RED APIs

## /api/hello

Test HTTP API