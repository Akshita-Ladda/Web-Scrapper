
document.addEventListener('DOMContentLoaded', () => {
    const scrapeBtn = document.getElementById('scrapeBtn');
  
    if (scrapeBtn) {
      scrapeBtn.addEventListener('click', function() {

        chrome.runtime.sendMessage({ action: 'executeContentScript' }, function (response) {

          if (response && response.message === 'Done') {
            alert("Data has been appended");
          }

          else if(response && response.message === 'Not Done'){
            alert("Copy of data already exists in the Database");
          }

          else if(response && response.message === 'Done, Dear Error'){
            alert("Data has been appended.");
            alert("Serial Number could.");
          }

        });       

      });

      chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        if (message && message.popupAlert === 'Done') {
          alert("Data has been appended");
        }

        else if(message && message.popupAlert === 'Not Done'){
          alert("Copy of data already exists in the Database");
        }

        else if(message && message.popupAlert === 'Done, Dear Error'){
          alert("Data has been appended, but Serial Number could not be found. Please check Dear.");
        }

        else if(message && message.popupAlert === 'Done, Del & Up'){
          alert("Data has been updated.");
        }
      });
      
    } else {
      console.error('The button element does not exist.');
    }
  });
  