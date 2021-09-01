const express=require('express');
const app=express();
const fs=require('fs');

// app.set('meol view engine','hbs')
// app.use(express.static(`${__dirname}/public`));

app.use((req,res,next)=>{
    const now = new Date().toString();
    const log= `request ${req.method} ${req.url} on ${now}`;
    fs.appendFile('meol-server-log.log',log + '\n',(err)=>{
        console.log('hey! something went wrong!');
    });
    next();
})

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title:'The GITTED Home Page',
        subtitle:'best home page ever!',
        year:new Date().getFullYear()
    });
})

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        ptitle:'The About Page',
        year:new Date().getFullYear()
    });
})

const PORT =process.env.PORT || 40253;
console.log(process.env);
app.listen(PORT,()=>{
    console.log(`listening to ${PORT}`)
});