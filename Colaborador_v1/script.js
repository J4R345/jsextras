

function inicia(){

  
      var pasta = "imgs/"
      var formato = ".jpg"
      var res=document.getElementById("photo");
      var img = document.createElement('img');
      
      img.setAttribute('src',"imgs/base.png"); 
      
       document.getElementById("matr").addEventListener("input",function(){
         
         var empresa=document.getElementById('Se');
         
         var emp="";
         
         if (empresa.checked){
             emp="1500"
         } else{
            emp="1600"
         }

         var matr = document.getElementById('matr');

         if(matr.value > 0){

         res.innerHTML=""   
         
         //var img = document.createElement('img');
         
         img.setAttribute('src',pasta+emp+matr.value+formato);
         img.style.height="250px";
         img.style.width="200px";
         res.appendChild(img); 
         
         console.log(img);

         } else {

         //var img = document.createElement('img');
         res.innerHTML="" 
         
        // img.setAttribute('src',"imgs/base.png"); 
         img.style.height="250px";
         img.style.width="200px";

         res.appendChild(img); 

         console.log(img);

         }

})

document.getElementById('matr').addEventListener("click",function(){
      
   var cxMatricula=document.getElementById('matr');

   cxMatricula.value="";
   res.innerHTML="" 
   res.appendChild(img);  

})

}

window.addEventListener("click",inicia);