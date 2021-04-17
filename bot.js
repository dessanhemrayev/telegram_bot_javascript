const fetch = require('node-fetch');//вызвать библиотеки 
messsages=["hello","hi","good","bye"];//сохраненные сообщении 
let i=0;//счетчик отправленных сообщений
 function bot(){//
    console.log(messsages[i]);
    const token='';
    
    let url='https://api.telegram.org/bot{token}/sendMessage?chat_id=-1001420760311&parse_mode=html&text=';
  
    if (i<4)
    {let response =  fetch(url+messsages[i]);
    i+=1;}
    
}

let timerId = setTimeout(function tick() {
    bot();
    timerId = setTimeout(tick, 2000); //задержка времени 2сек (*)
  }, 5000);//время 5 сек

