const express = require('express');
const app = express();
const port = 5500

app.get('/',(req,res)=> {
    res.send('Halo saya sedang belajar express')
})

app.get('/buku',(req,res)=> {
    res.send('Halo world')
})

app.post('/',(req,res)=> {
    res.send('Memposting data')
})

app.put('/',(req,res)=> {
    res.send('data sudah berhasil di update')
})

app.delete('/',(req,res)=> {
    res.send('data berhasil di hapus')
})

app.listen(port,()=> {
    console.log(`server berjalan pada localhost:${port}`)
});