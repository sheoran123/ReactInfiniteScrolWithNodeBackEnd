global.fetch =require('node-fetch')
const config=require('Universal-config')
const Unsplash=require('unsplash-js').default
const toJson =require('unsplash-js').toJson
const express =require('express')

const unsplash=Unsplash({
    applicationId:config.get('APPLICATION_ID'),
    secret:config.get('SECRET'),
    callbackUrl:config.get('CALLBACK_URL')
})

const app=new express()

app.get('/api/photos',(req,res)=>{
    unsplash.photos.listPhotos(req.query.start,req.query.count).then(toJson).then(json=>res.json(json))
})

const PORT=process.env.PORT||5000

app.listen(PORT,()=>{
    console.log('server started on some port')
})