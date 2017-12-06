import { insertRule } from 'glamor'

insertRule(`body {
	background-color: red;
}`)

document.body.innerHTML = "<h1>index.js loaded</h1>"
