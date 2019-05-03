# node-cpu-profiling

A sample application to cpu profile the node js REST API's. 

Install all required dependencies
```
npm install
```

Start the application with cpu profiling enabled (--prof)
```
npm start
```
To load test non recursive fibonacci function, execute the following command
```
npm run lt:non:recursive
```
To load test recursive fibonacci function, execute the following command
```
npm run lt:recursive
```
Once load test completed the stop the node js process. After stoping the node js process v8 logs should be created in workspace root folder. Log file naming pattern **isolate-\<identfier\>-v8.log**

In order to view the Flame chart, flambearer expects the v8 logs in json format. Execute the following command to convert log file to JSON format.
```
npm run v8-json
```

Command to view flamegraph
```
npm run flamebearer
```
