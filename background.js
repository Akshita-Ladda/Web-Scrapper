const scopes = ["https://www.googleapis.com/auth/bigquery", "https://www.googleapis.com/auth/sqlservice.login", "https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/sqlservice.admin", "https://www.googleapis.com/auth/cloud-platform", "https://www.googleapis.com/auth/bigquery.insertdata"];
let customerName = " ";
let awaiting = " ";
let completed = false;

async function writeToBigQuery(data, token, age) {

  // Defining BigQuery dataset and table information based on age

 if (age == 0) {
  
   datasetId = 'Sunrise_data';
   tableId = 'sunrise_sleep_extension_data_children';
   projectId = 'sunrise-chrome-extension';
   query = 'SELECT * FROM Sunrise_data.sunrise_sleep_extension_data_children';

 }

 else if (age == 1) {

   datasetId = 'Sunrise_data';
   tableId = 'sunrise_sleep_extension_data';
   projectId = 'sunrise-chrome-extension';
   query = 'SELECT * FROM Sunrise_data.sunrise_sleep_extension_data';
   
 }

 const existingData = await fetchDataFromBigQuery(token, age);
 let dataAlreadyExists = false;
 const extractSensor = data['Sensor_SN'];
 console.log(extractSensor);
 let existingRow;
 let data1 = await getCin7CoreData(extractSensor, data); 

 if(existingData != null){

   for (const item of existingData) {      
     console.log('item: ', item[0].v, 'extractSensor: ', extractSensor);
       
     if (item[0].v === extractSensor) {
         
       dataAlreadyExists = true;
       existingRow = item.v;
       
       break; 

     }
   }
 
   if (dataAlreadyExists) {
     try {
       const existingRowString = JSON.stringify(existingRow);
       const newDataString = JSON.stringify(data1);
   
       if (existingRowString != newDataString) {
         await deleteRowFromBigQuery(extractSensor, data1, token, age);
         awaiting = "del&up";
         completed = true;
       } 

       else {
         console.log('Data already exists in BigQuery. Skipping insertion.');
         awaiting = null;
         completed = true;
         return null;
       }

     } 
     
     catch (error) {
       console.error('Error handling data in BigQuery:', error);
     }

   }
 }

 
 
 try {

   const url = `https://www.googleapis.com/bigquery/v2/projects/${projectId}/datasets/${datasetId}/tables/${tableId}/insertAll`; //
   const options = {
     method: 'POST',
     headers: {
       'Authorization': `Bearer ${token.token}`,
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       rows: [{
         "json": data1
       }],
     }),
   };

   const response = await fetch(url, options);
   const result = await response.json();

   if (result.error) {
     console.error('Error inserting data into BigQuery:', result.error || error);
   } 
   else {
       console.log(`Data inserted into BigQuery: ${JSON.stringify(result)}`);
       awaiting = "inserted";
       completed = true;
   }
   
 } 

 catch (error) {
   console.error('Error inserting data into BigQuery:', error.message);
 }

}

async function getCin7CoreData(serialNumberToMatch, data){

  console.log("heree");

  const SKU = "SNR.DGN.0001";
  //const serialNumberToMatch = "AAL699";

    try {
      const url = `https://inventory.dearsystems.com/externalapi/v2/Product?sku=${SKU}&IncludeMovements=TRUE`;  
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'api-auth-accountid': '0fd00afb-b466-4417-abad-404c79e47bce',
          'api-auth-applicationkey': 'b484faab-896a-9390-d8c1-e5cab83729d3',
        },
      };

      const result = await fetch(url, options);
      const response = await result.json();
      
  
      if (!result.ok) {
        throw new Error(`API request failed with status: ${response.status}`);
      }

      console.log("response", response);
      console.log("response", response.Products[0].Movements[0].BatchSN);

      if (response.Products[0].Movements && response.Products[0].Movements.length > 0) {
        console.log("movements");
        // Finding the movement containing the matching serial number
        for(i = 0; i < response.Products[0].Movements.length;  i++){

          if(response.Products[0].Movements[i].Type === 'SaleMultiple'){

            const movementBatchSN = String(response.Products[0].Movements[i].BatchSN).trim().toLowerCase(); 
            const targetSerialNumber = String(serialNumberToMatch).trim().toLowerCase(); 
            

            if(movementBatchSN === targetSerialNumber){   
              console.log("movementBatchSN", movementBatchSN);
              console.log("targetSerialNumber", targetSerialNumber);           
              console.log('order name: ', response.Products[0].Movements[i].FromTo);
              try {
                const url = `https://inventory.dearsystems.com/ExternalApi/v2/sale?ID=${response.Products[0].Movements[i].TaskID}`;  
                const options = {
                  method: 'GET',
                  headers: {
                    'Content-Type': 'application/json',
                    'api-auth-accountid': '0fd00afb-b466-4417-abad-404c79e47bce',
                    'api-auth-applicationkey': 'b484faab-896a-9390-d8c1-e5cab83729d3',
                  },
                };

                const results = await fetch(url, options);
                const responses = await results.json();
                console.log("responses: ", responses);
  
                if (!results.ok) {
                  throw new Error(`API request failed with status: ${responses.status}`);
                }        
                

                const SalesRepresentative = responses.SalesRepresentative;
                const prop = "customer_name";
                console.log("customer_name ", prop);
                data[prop] = SalesRepresentative;



              }

              catch (error) {
                console.error('Error fetching Sales Rep data from DEAR API:', error);
              }
              
              const prop1 = "sales_rep";
              data[prop1] = response.Products[0].Movements[i].FromTo;
              return data;
            }

          }
           
        }

        return null;
      
      }  

      else {
        console.log('No movement data found.');
        return null;
      }

  } 
  
  catch (error) {
    console.error('Error fetching data from DEAR API:', error.message);
  }

}

async function fetchDataFromBigQuery(token, age) {

  // Defining BigQuery dataset and table information based on age



  if (age == 0) {
   
    datasetId = 'Sunrise_data';
    tableId = 'sunrise_sleep_extension_data_children';
    projectId = 'sunrise-chrome-extension';
    query = 'SELECT * FROM Sunrise_data.sunrise_sleep_extension_data_children';

  }

  else if (age == 1) {

    datasetId = 'Sunrise_data';
    tableId = 'sunrise_sleep_extension_data';
    projectId = 'sunrise-chrome-extension';
    query = 'SELECT * FROM Sunrise_data.sunrise_sleep_extension_data';
    
  }

  try {
    const query = `SELECT Sensor_SN FROM ${projectId}.${datasetId}.${tableId}`;
    const url = `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`;
    
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.token}`,
        'QueryRequest': query,
      },
      body: JSON.stringify({
        query,
        useLegacySql: false, // Using Standard SQL
      }),
    };

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const result = await response.json();
    
    
    if (result.error) {
      throw new Error(`Fetching from BigQuery error: ${result.error.message}`);
    }
    
    const rows = result.rows;

    if (rows && rows.length > 0) {
      const existingData = rows.map(row => row.f);
      console.log('Data from BigQuery:', existingData);
      return existingData;
    } else {
      console.log('No data found in BigQuery.');
      const existingData = null;
      return existingData;
    }

  } catch (error) {
    console.error('Error fetching data from BigQuery:', error);
  }

  
}

async function deleteRowFromBigQuery(extractSensor, data1, token, age){

  let datasetId, tableId, projectId, query;


  if (age == 0) {
   
    datasetId = 'Sunrise_data';
    tableId = 'sunrise_sleep_extension_data_children';
    projectId = 'sunrise-chrome-extension';
    query = `DELETE FROM Sunrise_data.sunrise_sleep_extension_data_children WHERE SerialNumber = '${extractSensor}'`;

  }

  else if (age == 1) {

    datasetId = 'Sunrise_data';
    tableId = 'sunrise_sleep_extension_data';
    projectId = 'sunrise-chrome-extension';
    query = `DELETE FROM Sunrise_data.sunrise_sleep_extension_data WHERE SerialNumber = '${extractSensor}'`;
    
  }

  try {
    const url = `https://bigquery.googleapis.com/bigquery/v2/projects/${projectId}/queries`;
    
    const options = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        useLegacySql: false, // Using Standard SQL
      }),
    };

    const response = await fetch(url, options);
    
    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const result = await response.json();
    
    if (result.error) {
      throw new Error(`Fetching from BigQuery error: ${result.error.message}`);
    }
  }

  catch (error) {
    console.error('Error deleting data from BigQuery:', error.message);
  }
}

//Authorising the user using Chrome Identity API
async function authorizeUser() {

  try {
    const token = await chrome.identity.getAuthToken({ interactive: true, scopes: scopes });
    console.log('Authorization successful. Access token:', token);
    return token;
  } 

  catch (error) {
    console.error('Authorization failed:', error.message);
    accessToken = null;
    console.log("accessToken: " + accessToken);
  }

}

chrome.runtime.onMessage.addListener(async function(request, sender, sendResponse) {

  if (request.action === 'executeContentScript') {
   
    chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {

      try {
        await chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          files: ['content.js']
        });

        chrome.tabs.sendMessage(tabs[0].id, { action: 'scrapeData' }, async function (response) {
          
          if (response.message === 'dataScraped') {
            console.log('Extracted data: ', response.extractedText);
            console.log('data: ', response.data);
            const accessToken = await authorizeUser();

            if (accessToken) {
              // Calling writeToBigQuery with the access token
              console.log('Authorization successful. accessToken:', accessToken);                            
              await writeToBigQuery(response.extractedText, accessToken, response.age);
            } 

            else {
              console.error('Authorization failed. Cannot write to Google Sheets.');
            }

          } 

          else {
            console.error('Failed to load Google API client in content script.');
          }
        });

      }  
      
      catch (error) {
        console.error('Error executing content script:', error.message);
      }


    });


  }
   
  const checkCompletion = setInterval(() => {

    if (completed) {
      clearInterval(checkCompletion); 
    
      if(awaiting == null){
        console.log('awaiting == null');
        completed = false;
        awaiting = " ";
        chrome.runtime.sendMessage({ popupAlert: 'Not Done' });           
      }

      else if(awaiting != null  && customerName != null) {
        console.log('awaiting != null  && customerName != null');
        completed = false;
        awaiting = " ";
        chrome.runtime.sendMessage({ popupAlert: 'Done' });      
      }

      else if(awaiting != null  && customerName == null){
        console.log('awaiting != null  && customerName == null');
        completed = false;
        awaiting = " ";
        chrome.runtime.sendMessage({ popupAlert: 'Done, Dear Error' });  
      }

      else if(awaiting == "del&up"  && customerName != null){
        console.log('awaiting == "del&up"  && customerName != null');
        completed = false;
        awaiting = " ";
        chrome.runtime.sendMessage({ popupAlert: 'Done, Del & Up' });  
      }

    }

  }, 100); // Check completion every 100ms

});

