document.addEventListener('DOMContentLoaded', () => {
    const bb8Toggle = document.querySelector('.bb8-toggle__checkbox');
    const body = document.body;
  
    // Ellenőrizzük, hogy volt-e már mentett mód
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      bb8Toggle.checked = true;
    }
  
    // Kapcsoló eseményfigyelő
    bb8Toggle.addEventListener('change', () => {
      if (bb8Toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); 
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); 
      }
    });
  });
  
//   -----------------------------------------

document.getElementById("downloadCheckbox").addEventListener("change", function () {
    if (this.checked) {
      
      const link = document.createElement("a");
      link.href = "images/discordimg.png"; 
      link.download = "discordimg.png"; 
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
  