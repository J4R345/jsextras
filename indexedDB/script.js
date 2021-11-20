 

 
 // window.alert('ok');

function inicia () {

    let outDB; 
    let db;
    let locationForm;
    let inputCity;
    let inputLog;
    let inputLat;
    let dataList;


    locationForm = document.getElementById('locationForm');
    inputCity = document.getElementById('inputCity');
    inputLat = document.getElementById('inputLat');
    inputLog = document.getElementById('inputLog');
    outDB = document.getElementById('output-db');
    dataList = document.getElementById('data-list');
   
    const dbName  = 'myWeatherDB';
    const storeName = 'Location';

    // Função para criar o banco de dados IndexedDB
    const createDB = ()=>{
       
        if(window.indexedDB){
           const request = window.indexedDB.open(dbName, 4);
           
           request.onerror = (event) =>{
               console.log('error request', event);
               outDB.innerHTML = 'error request';
           }
   
           request.onsuccess = (event) => {
               db = request.result;
               console.log('successed request', event, db);
               outDB.innerHTML = 'Successed request';
               readData();
           }
   
           request.onupgradeneeded = (event) => {
   
               db = event.target.result;
   
               // ObjectStorage = 'tabela'
               const objectStoreLocation = db.createObjectStore(storeName,
               { 
                   keyPath: 'id',
                   autoIncrement: true
               });
   
               objectStoreLocation.createIndex('lat', 'lat', {unique: false});
               objectStoreLocation.createIndex('log', 'log', {unique: false});
               objectStoreLocation.createIndex('city', 'city', {unique: false});
              
   
               console.log ('Upgraded request', event);
               outDB.innerHTML = 'Upgraded request';
           }
       } else { 
   
           console.log ('You don\'t heve support');
           outDB.innerHTML = 'Upgraded request';
       }
    }
    // Fim da criação de BD
    
    const addData = (event) => {
        // Função para adicionar dados no banco de dados

        event.preventDefault();

        const transactionAdd = db.transaction([storeName], 'readwrite');
        const ObjectStore = transactionAdd.objectStore(storeName);

        const newLocation = {

            lat: inputLat.value,
            log: inputLog.value,
            city: inputCity.value
        }

        const request = ObjectStore.add(newLocation);


        request.onsuccess = () => {
            inputCity.value = '';
            inputLat.value = '';
            inputLog.value = '';
          };

        transactionAdd.oncomplete = (event) =>{
            console.log('Transaction completed', event);
            readData();
        }

        transactionAdd.onerror = (event) =>{
            console.log('Transaction failed', event);
        }
    
 
    }
   
    
    const readData = () => {

        dataList.textContent = '';
        
        const objectStore = db.transaction(storeName).objectStore(storeName);

        objectStore.openCursor().onsuccess = (event) => {
            let cursor = event.target.result;

            if(cursor){

                const listItem = document.createElement('li');
                const textItem = `City: ${cursor.value.city} `;

                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Del';
                deleteButton.addEventListener('click', removeLocation)
                deleteButton.setAttribute('data-location-id', cursor.value.id);

                listItem.textContent = textItem;
                listItem.appendChild(deleteButton);
                
                dataList.appendChild(listItem);

                cursor.continue();

            } else if (!dataList.firstChild) {

                const listItem = document.createElement('li');
                listItem.textContent = 'No Location Saved';
                dataList.appendChild(listItem);

            }
        }

    }

    const removeLocation = (eventClick) => {
        const locationId = parseInt(eventClick.target.getAttribute('data-location-id'), 10);
      
        let deleteTransaction = db.transaction([storeName], 'readwrite');
        let objectStore = deleteTransaction.objectStore(storeName);
        let request = objectStore.delete(locationId);
      
        request.onsuccess = (event) => {
          console.log('request success ', event);
        }
      
        deleteTransaction.oncomplete = (event) => {
          console.log(`delete location ${locationId} transaction completed`, event);
          readData();
        }
      
        deleteTransaction.onerror = (event) => {
          console.log('delete transaction error', event);
        }
      }
    

    createDB();

    locationForm.onsubmit = addData;
    
}

 window.addEventListener('load',inicia);
