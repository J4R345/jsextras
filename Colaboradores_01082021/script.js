

function inicia(){

  // Pagina que convert para Json https://www.convertcsv.com/csv-to-json.htm
     
      var pasta = "imgs/"
      var formato = ".jpg"
      var res = document.getElementById("photo");
      var img = document.createElement('img');
      
      var vId;
      var vNome;
      var vFuncao; 
      var vNasc; 
      var vAdmissao; 
      var vFone;
      var emp;
      var matr;
      var spse;
     
      img.setAttribute('src',"imgs/base.png"); 
      
       document.getElementById("matr").addEventListener("input",function(){
         
         spse = document.getElementById('Se');

         if (spse.checked){
             emp = "1500"
   
         } else{
            emp = "1600"
         }

         var matr = document.getElementById('matr');

         if (matr.value > 3) {

         res.innerHTML=""   
         
         //var img = document.createElement('img');
         
         img.setAttribute('src',pasta+emp+matr.value+formato);
         img.style.height="200px";
         img.style.width="170px";
         res.appendChild(img); 
         
         console.log(img);

         } else {

         //var img = document.createElement('img');

         res.innerHTML="" 

         img.setAttribute('src',"imgs/base.png"); 
         img.style.height="200px";
         img.style.width="170px";

         res.appendChild(img); 

         console.log(img);


         }

})

function limpar () {

      img.setAttribute('src',"imgs/base.png"); 
         img.style.height="200px";
         img.style.width="170px";

         res.appendChild(img); 

   
  // var cxMatricula=document.getElementById('matr').value="";
   var cxNome=document.getElementById('nome').value="";
   var cxFuncao=document.getElementById('funcao').value="";
   var cxMNascimento=document.getElementById('nasc').value="";
   var cxIdade=document.getElementById('idade').value="";
   var cxAdmissao=document.getElementById('admissao').value="";
   var cxTempo=document.getElementById('tempo').value="";
   var cxTelefone=document.getElementById('fone').value="";
   res.innerHTML="" 
   res.appendChild(img); 
   document.getElementById('matr').focus();
}

document.getElementById('matr').addEventListener("click",function(){      
   limpar();
   var cxMatricula=document.getElementById('matr').value="";
})

document.getElementById('Se').addEventListener("click",function(){
   limpar();
   var cxMatricula=document.getElementById('matr').value="";
})

document.getElementById('Sp').addEventListener("click",function(){
   limpar();
   var cxMatricula=document.getElementById('matr').value="";
   
})



function Ready(){

// Pega as informações no HTML
   
emp ="";

   empresa = document.getElementById('Se');

         if (empresa.checked){
             emp="1500"
         } else{
            emp="1600"
         }

   matr=document.getElementById('matr').value;
   vId = emp+matr;
   vNome=document.getElementById('nome').value;
   vFuncao=document.getElementById('funcao').value; 
   vNasc=document.getElementById('nasc').value;
   vAdmissao=document.getElementById('admissao').value;
   vFone=document.getElementById('fone').value;

}



   document.getElementById('btnSave').addEventListener("click", function(){
      Ready();
      firebase.database().ref(vId).set({
         ID: vId,
         Nome: vNome,
         Funcao: vFuncao,
         Nascimento: vNasc,
         Admissao: vAdmissao,
         Telefone: vFone,
      });

   })


   document.getElementById('btnUpdate').addEventListener("click", function(){
      Ready();
      firebase.database().ref(vId).update({
         //ID: vId,
         Nome: vNome,
         Funcao: vFuncao,
         Nascimento: vNasc,
         Admissao: vAdmissao,
         Telefone: vFone,
      });

   })

   
   document.getElementById('btnDel').addEventListener("click", function(){
      Ready();
      firebase.database().ref(vId).remove();

   })
   
   
   var dNasc = document.getElementById('nasc');
   var dAdmissao = document.getElementById('admissao');
   var vResIdade = document.getElementById('idade');
   var vResTempo = document.getElementById('tempo');

function calcData(vData, vRes) {

   var vResult;
   
   const date2 = new Date();
   var hoje = new Intl.DateTimeFormat('pt-BR').format(date2);
   var objCalculaIdade = new calculaIdade;
   var textoIdade = objCalculaIdade.calculaIdade(vData.value,hoje);
   
   console.log(textoIdade);

   vResult = vRes.value = textoIdade;
   
}
   
/* Buscar os dados no Firebase Realdatabase */

   document.getElementById('matr').addEventListener("input",function(){

      var vInicio = document.getElementById('matr').value;

      if(vInicio.length > 3){

         Ready();

      firebase.database().ref(vId).on('value',function(snapshot){

         document.getElementById('nome').value=snapshot.val().Nome;
         document.getElementById('funcao').value=snapshot.val().Funcao;
         document.getElementById('nasc').value=snapshot.val().Nascimento;
         document.getElementById('admissao').value=snapshot.val().Admissao;
         document.getElementById('fone').value=snapshot.val().Telefone;

         calcData(dNasc,vResIdade);
         calcData(dAdmissao,vResTempo);
      
      })

      } else if(vInicio.length == 3){
         limpar();
      }

   });

   document.getElementById('alterar').addEventListener('click',function () {
   
      /* Mostrar e esconder os botões*/ 
      
       if(botoes.style.display === 'block') {
         botoes.style.display = 'none';
       } else {
         botoes.style.display = 'block';
     }

   });
}
      

window.addEventListener("click",inicia);