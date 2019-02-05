import 'babel-polyfill';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {StaticRouter} from 'react-router';

import express from 'express';
import App from './src/App';
const app=express();
const PORT=process.env.PORT || 3000;
import bodyParser from 'body-parser';

app.use(bodyParser.json());
app.use(express.static('build/public'));
app.get('/', (req,res)=>{

const content=ReactDOMServer.renderToString(<StaticRouter location={req.url}>
    <App />
</StaticRouter>);

const html=`
<html>
   <head>
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="client_bundle.js"></script>
   </body>
   
</html>
`
    res.send(html);
});


app.listen(PORT,()=>{
    console.log(`App running on ${PORT}`);
});