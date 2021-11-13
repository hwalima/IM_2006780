import React from "react";
import  homeCSS from '../CSS/home.module.css'
import Printer from '../components/Printer';

function Home() {
  
  
  return (
    <div className={homeCSS.container}>
      
      <div className={homeCSS.scanline}></div>
<pre className={homeCSS.code}><span class={homeCSS.blink}>█</span></pre>
<div className={Printer.printcontainer}>
<Printer>

    {async ({ print, println }) => {
      print('asciiArt@internal-https://hwalima.github.io/WSOA4175A_2006780/Index.html/:~ ls ');
      await println('/:~ Interactive Media 4', 3000);
      await println('asciiArt@internal-Log in successful:~ React.js', 5000);
      await println('Ad Reinhardt:~ QUOTE=Art is Art. Everything else is everything else', 500);
      await println('🅰🅳 🆁🅴🅸🅽🅷🅰🆁🅳🆃', 500);
      await println('Inernet Art', 1000);
      await println('using render props', 1000);
      println('🅰🅳 🆁🅴🅸🅽🅷🅰🆁🅳🆃');
    }}
    
  </Printer>                                        
  </div>  
    </div>
  );
}

export default Home;
