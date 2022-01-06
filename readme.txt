Youtube Links: 
	https://www.youtube.com/watch?v=ngc9gnGgUdA&ab_channel=JavaScriptMastery
	https://www.youtube.com/watch?v=RVFAyFWO4go
	

2 root folder
	1. client
	2. server


client-commands:
---------------
	cd client
	npx create-react-app ./   (react app create to the current dir)
	npm install 
		axios (API request)
		moment (Time & Date)
		react-file-base64 (convert our images)
		redux
		redux-thunk (Asynchronous actions using Redux)



server-commands:
----------------
	cd server
	npm init -y (npm initialize)
	npm install 
		body-parser 
		cors
		express
		mongoose
		nodemon

		//heroku

================================= Files =================

client-files:
---------------
	src
		index.js



server-files:
----------------
	index.js (starting point)
		[Code-part]: import all the dependencies we installed for server (without nodemon)




=========================== package.json =======================
add+
----
"type" : "module" (this is for ES6 support ex: import keyword support by this) (To load an ES module, set "type": "module" in the package.json)

"scripts":{
	"start": "nodemon index.js"
}




