const express = require('express');
const mysql = require('mysql');
const app = express();


//css imgを置くファイルの指定
app.use(express.static('public'));

//プール処理
const pool = mysql.createPool({
    connectionLimit : 10,
    host: 'us-cdbr-east-03.cleardb.com',
    user: 'b9cdf1585a31f3',
    password: '05881e40',
    database: 'heroku_67895f9f6c02e56'
});

pool.getConnection((err, connection) => {
    if (err) throw err;

    connection.query('select 1 as one', (err, results, fields) => {
        connection.release();

        if (err) throw err;

        for (const result of results) {
            console.log(result.one);
        }
    });

});
const connection = pool


app.get('/kyonyu', (req, res) => {
  connection.query(
    "select * from contents where name like '%巨乳%' order by number desc",
    (error,results) => {
      res.render('kyonyu.ejs',{contents:results});
    }
  )
});
app.get('/oppai', (req, res) => {
  connection.query(
    "select * from contents where name like '%おっぱい%' order by number desc",
    (error,results) => {
      res.render('oppai.ejs',{contents:results});
    }
  )
});
app.get('/nakadashi', (req, res) => {
  connection.query(
    "select * from contents where name like '%中出し%' order by number desc",
    (error,results) => {
      res.render('nakadashi.ejs',{contents:results});
    }
  )
});
app.get('/paizuri', (req, res) => {
  connection.query(
    "select * from contents where name like '%パイズリ%' order by number desc",
    (error,results) => {
      res.render('paizuri.ejs',{contents:results});
    }
  )
});
app.get('/hitoduma', (req, res) => {
  connection.query(
    "select * from contents where name like '%人妻%' order by number desc",
    (error,results) => {
      res.render('hitoduma.ejs',{contents:results});
    }
  )
});
app.get('/NTR', (req, res) => {
  connection.query(
    "select * from contents where name like '%NTR%' order by number desc",
    (error,results) => {
      res.render('NTR.ejs',{contents:results});
    }
  )
});
app.get('/bakunyu', (req, res) => {
  connection.query(
    "select * from contents where name like '%爆乳%' order by number desc",
    (error,results) => {
      res.render('bakunyu.ejs',{contents:results});
    }
  )
});
app.get('/binyu', (req, res) => {
  connection.query(
    "select * from contents where name like '%爆乳%' order by number desc",
    (error,results) => {
      res.render('binyu.ejs',{contents:results});
    }
  )
});
app.get('/biziri', (req, res) => {
  connection.query(
    "select * from contents where name like '%美尻%' order by number desc",
    (error,results) => {
      res.render('biziri.ejs',{contents:results});
    }
  )
});
app.get('/zyukuzyo', (req, res) => {
  connection.query(
    "select * from contents where name like '%熟女%' order by number desc",
    (error,results) => {
      res.render('zyukuzyo.ejs',{contents:results});
    }
  )
});
app.get('/jd', (req, res) => {
  connection.query(
    "select * from contents where name like '%JD%' order by number desc",
    (error,results) => {
      res.render('jd.ejs',{contents:results});
    }
  )
});
app.get('/gyaru', (req, res) => {
  connection.query(
    "select * from contents where name like '%ギャル%' order by number desc",
    (error,results) => {
      res.render('gyaru.ejs',{contents:results});
    }
  )
});
app.get('/paipan', (req, res) => {
  connection.query(
    "select * from contents where name like '%パイパン%' order by number desc",
    (error,results) => {
      res.render('paipan.ejs',{contents:results});
    }
  )
});
app.get('/manko', (req, res) => {
  connection.query(
    "select * from contents where name like '%マ_コ%' order by number desc",
    (error,results) => {
      res.render('manko.ejs',{contents:results});
    }
  )
});
app.get('/mawa', (req, res) => {
  connection.query(
    "select * from contents where name like '%マワ%' order by number desc",
    (error,results) => {
      res.render('mawa.ejs',{contents:results});
    }
  )
});
app.get('/soku', (req, res) => {
  connection.query(
    "select * from contents where name like '%即%' order by number desc",
    (error,results) => {
      res.render('soku.ejs',{contents:results});
    }
  )
});
app.get('/zyoshidaisei', (req, res) => {
  connection.query(
    "select * from contents where name like '%女子大生%' order by number desc",
    (error,results) => {
      res.render('zyoshidaisei.ejs',{contents:results});
    }
  )
});
app.get('/shiroto', (req, res) => {
  connection.query(
    "select * from contents where name like '%素人%' order by number desc",
    (error,results) => {
      res.render('shiroto.ejs',{contents:results});
    }
  )
});
app.get('/nikubenki', (req, res) => {
  connection.query(
    "select * from contents where name like '%肉便器%' order by number desc",
    (error,results) => {
      res.render('nikubenki.ejs',{contents:results});
    }
  )
});

app.get('/popular',(req, res) => {
  res.render('popular.ejs')
});

app.get('/new-move',(req, res) => {
  res.render('new-move.ejs')
});



app.get('/', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('index.ejs',{contents:results});
    }
  )
});
app.get('/page2', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page2.ejs',{contents:results});
    }
  )
});

app.get('/page3', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page3.ejs',{contents:results});
    }
  )
});

app.get('/page4', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page4.ejs',{contents:results});
    }
  )
});

app.get('/page5', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page5.ejs',{contents:results});
    }
  )
});

app.get('/page6', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page6.ejs',{contents:results});
    }
  )
});
app.get('/page7', (req, res) => {
  connection.query(
    "select * from contents order by number desc ",
    (error,results) => {
      res.render('page7.ejs',{contents:results});
    }
  )
});

app.get('/index', (req, res) => {
  connection.query(
    "select * from contents order by number desc",
    (error,results) => {
      res.render('index.ejs',{contents:results});
    }
  )
});

app.get('/con0', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con0.ejs',{contents:results});
    }
  )
});
app.get('/con1', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con1.ejs',{contents:results});
    }
  )
});
app.get('/con2', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con2.ejs',{contents:results});
    }
  )
});
app.get('/con3', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con3.ejs',{contents:results});
    }
  )
});
app.get('/con4', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con4.ejs',{contents:results});
    }
  )
});
app.get('/con5', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con5.ejs',{contents:results});
    }
  )
});
app.get('/con6', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con6.ejs',{contents:results});
    }
  )
});
app.get('/con7', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con7.ejs',{contents:results});
    }
  )
});
app.get('/con8', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con8.ejs',{contents:results});
    }
  )
});
app.get('/con9', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con9.ejs',{contents:results});
    }
  )
});
app.get('/con10', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con10.ejs',{contents:results});
    }
  )
});
app.get('/con11', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con11.ejs',{contents:results});
    }
  )
});
app.get('/con12', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con12.ejs',{contents:results});
    }
  )
});
app.get('/con13', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con13.ejs',{contents:results});
    }
  )
});
app.get('/con14', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con14.ejs',{contents:results});
    }
  )
});
app.get('/con15', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con15.ejs',{contents:results});
    }
  )
});
app.get('/con16', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con16.ejs',{contents:results});
    }
  )
});
app.get('/con17', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con17.ejs',{contents:results});
    }
  )
});
app.get('/con18', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con18.ejs',{contents:results});
    }
  )
});
app.get('/con19', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con19.ejs',{contents:results});
    }
  )
});
app.get('/con20', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con20.ejs',{contents:results});
    }
  )
});
app.get('/con21', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con21.ejs',{contents:results});
    }
  )
});
app.get('/con22', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con22.ejs',{contents:results});
    }
  )
});
app.get('/con23', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con23.ejs',{contents:results});
    }
  )
});
app.get('/con24', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con24.ejs',{contents:results});
    }
  )
});
app.get('/con25', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con25.ejs',{contents:results});
    }
  )
});
app.get('/con26', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con26.ejs',{contents:results});
    }
  )
});
app.get('/con27', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con27.ejs',{contents:results});
    }
  )
});
app.get('/con28', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con28.ejs',{contents:results});
    }
  )
});
app.get('/con29', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con29.ejs',{contents:results});
    }
  )
});
app.get('/con30', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con30.ejs',{contents:results});
    }
  )
});
app.get('/con31', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con31.ejs',{contents:results});
    }
  )
});
app.get('/con32', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con32.ejs',{contents:results});
    }
  )
});
app.get('/con33', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con33.ejs',{contents:results});
    }
  )
});
app.get('/con34', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con34.ejs',{contents:results});
    }
  )
});
app.get('/con35', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con35.ejs',{contents:results});
    }
  )
});
app.get('/con36', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con36.ejs',{contents:results});
    }
  )
});
app.get('/con37', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con37.ejs',{contents:results});
    }
  )
});
app.get('/con38', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con38.ejs',{contents:results});
    }
  )
});
app.get('/con39', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con39.ejs',{contents:results});
    }
  )
});
app.get('/con40', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con40.ejs',{contents:results});
    }
  )
});
app.get('/con41', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con41.ejs',{contents:results});
    }
  )
});
app.get('/con42', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con42.ejs',{contents:results});
    }
  )
});
app.get('/con43', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con43.ejs',{contents:results});
    }
  )
});
app.get('/con44', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con44.ejs',{contents:results});
    }
  )
});
app.get('/con45', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con45.ejs',{contents:results});
    }
  )
});
app.get('/con46', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con46.ejs',{contents:results});
    }
  )
});
app.get('/con47', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con47.ejs',{contents:results});
    }
  )
});
app.get('/con48', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con48.ejs',{contents:results});
    }
  )
});
app.get('/con49', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con49.ejs',{contents:results});
    }
  )
});
app.get('/con50', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con50.ejs',{contents:results});
    }
  )
});
app.get('/con51', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con51.ejs',{contents:results});
    }
  )
});
app.get('/con52', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con52.ejs',{contents:results});
    }
  )
});
app.get('/con53', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con53.ejs',{contents:results});
    }
  )
});
app.get('/con54', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con54.ejs',{contents:results});
    }
  )
});
app.get('/con55', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con55.ejs',{contents:results});
    }
  )
});
app.get('/con56', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con56.ejs',{contents:results});
    }
  )
});
app.get('/con57', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con57.ejs',{contents:results});
    }
  )
});
app.get('/con58', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con58.ejs',{contents:results});
    }
  )
});
app.get('/con59', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con59.ejs',{contents:results});
    }
  )
});
app.get('/con60', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con60.ejs',{contents:results});
    }
  )
});
app.get('/con61', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con61.ejs',{contents:results});
    }
  )
});
app.get('/con62', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con62.ejs',{contents:results});
    }
  )
});
app.get('/con63', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con63.ejs',{contents:results});
    }
  )
});
app.get('/con64', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con64.ejs',{contents:results});
    }
  )
});
app.get('/con65', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con65.ejs',{contents:results});
    }
  )
});
app.get('/con66', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con66.ejs',{contents:results});
    }
  )
});
app.get('/con67', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con67.ejs',{contents:results});
    }
  )
});
app.get('/con68', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con68.ejs',{contents:results});
    }
  )
});
app.get('/con69', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con69.ejs',{contents:results});
    }
  )
});
app.get('/con70', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con70.ejs',{contents:results});
    }
  )
});
app.get('/con71', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con71.ejs',{contents:results});
    }
  )
});
app.get('/con72', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con72.ejs',{contents:results});
    }
  )
});
app.get('/con73', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con73.ejs',{contents:results});
    }
  )
});
app.get('/con74', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con74.ejs',{contents:results});
    }
  )
});
app.get('/con75', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con75.ejs',{contents:results});
    }
  )
});
app.get('/con76', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con76.ejs',{contents:results});
    }
  )
});
app.get('/con77', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con77.ejs',{contents:results});
    }
  )
});
app.get('/con78', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con78.ejs',{contents:results});
    }
  )
});
app.get('/con79', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con79.ejs',{contents:results});
    }
  )
});
app.get('/con80', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con80.ejs',{contents:results});
    }
  )
});
app.get('/con81', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con81.ejs',{contents:results});
    }
  )
});
app.get('/con82', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con82.ejs',{contents:results});
    }
  )
});
app.get('/con83', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con83.ejs',{contents:results});
    }
  )
});
app.get('/con84', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con84.ejs',{contents:results});
    }
  )
});
app.get('/con85', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con85.ejs',{contents:results});
    }
  )
});
app.get('/con86', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con86.ejs',{contents:results});
    }
  )
});
app.get('/con87', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con87.ejs',{contents:results});
    }
  )
});
app.get('/con88', (req, res) => {
  connection.query(
    "select * from contents order by number ",
    (error,results) => {
      res.render('con88.ejs',{contents:results});
    }
  )
});
app.get('/con89', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con89.ejs',{contents:results});
    }
  )
});
app.get('/con90', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con90.ejs',{contents:results});
    }
  )
});
app.get('/con91', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con91.ejs',{contents:results});
    }
  )
});
app.get('/con92', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con92.ejs',{contents:results});
    }
  )
});
app.get('/con93', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con93.ejs',{contents:results});
    }
  )
});
app.get('/con94', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con94.ejs',{contents:results});
    }
  )
});
app.get('/con95', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con95.ejs',{contents:results});
    }
  )
});
app.get('/con96', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con96.ejs',{contents:results});
    }
  )
});
app.get('/con97', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con97.ejs',{contents:results});
    }
  )
});
app.get('/con98', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con98.ejs',{contents:results});
    }
  )
});
app.get('/con99', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con99.ejs',{contents:results});
    }
  )
});
app.get('/con100', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con100.ejs',{contents:results});
    }
  )
});
app.get('/con101', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con101.ejs',{contents:results});
    }
  )
});
app.get('/con102', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con102.ejs',{contents:results});
    }
  )
});
app.get('/con103', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con103.ejs',{contents:results});
    }
  )
});
app.get('/con104', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con104.ejs',{contents:results});
    }
  )
});
app.get('/con105', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con105.ejs',{contents:results});
    }
  )
});
app.get('/con106', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con106.ejs',{contents:results});
    }
  )
});
app.get('/con107', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con107.ejs',{contents:results});
    }
  )
});
app.get('/con108', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con108.ejs',{contents:results});
    }
  )
});
app.get('/con109', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con109.ejs',{contents:results});
    }
  )
});
app.get('/con110', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con110.ejs',{contents:results});
    }
  )
});
app.get('/con111', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con111.ejs',{contents:results});
    }
  )
});
app.get('/con112', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con112.ejs',{contents:results});
    }
  )
});
app.get('/con113', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con113.ejs',{contents:results});
    }
  )
});
app.get('/con114', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con114.ejs',{contents:results});
    }
  )
});
app.get('/con115', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('co115.ejs',{contents:results});
    }
  )
});
app.get('/con116', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con116.ejs',{contents:results});
    }
  )
});
app.get('/con117', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con117.ejs',{contents:results});
    }
  )
});
app.get('/con118', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con118.ejs',{contents:results});
    }
  )
});
app.get('/con119', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con119.ejs',{contents:results});
    }
  )
});
app.get('/con120', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con120.ejs',{contents:results});
    }
  )
});
app.get('/con121', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con121.ejs',{contents:results});
    }
  )
});
app.get('/con122', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con122.ejs',{contents:results});
    }
  )
});
app.get('/con123', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con123.ejs',{contents:results});
    }
  )
});
app.get('/con124', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con124.ejs',{contents:results});
    }
  )
});
app.get('/con125', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('co125.ejs',{contents:results});
    }
  )
});
app.get('/con126', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con126.ejs',{contents:results});
    }
  )
});
app.get('/con127', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con127.ejs',{contents:results});
    }
  )
});
app.get('/con128', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con128.ejs',{contents:results});
    }
  )
});
app.get('/con129', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con129.ejs',{contents:results});
    }
  )
});
app.get('/con130', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con130.ejs',{contents:results});
    }
  )
});
app.get('/con131', (req, res) => {
  connection.query(
    "select * from contents order by number",
    (error,results) => {
      res.render('con131.ejs',{contents:results});
    }
  )
});



// サーバーを起動するコードを貼り付けてください
// app.listen(3000);
app.listen(process.env.PORT || 3000);
// app.listen(process.env.PORT || 8080);
