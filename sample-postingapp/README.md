# Sample posting app

# v2 File storage implentation

npm install loopback-component-storage --save

slc loopback:datasource

MacBook-Pro:sample-postingapp vinodkottem$ slc loopback:datasource
? Enter the data-source name: storage
? Select the connector for storage: other
? Enter the connector name without the loopback-connector- prefix: loopback-comp
onent-storage
? Install loopback-component-storage Yes
Please manually add config for your custom connector loopback-component-storage in server/datasources.json

"storage": {
	  "name": "storage",
	  "connector": "loopback-component-storage",
	  "provider": "filesystem",
	  "root": "./files"
	}

model-config
	"container": {
    "dataSource": "storage",
    "public": true
  }