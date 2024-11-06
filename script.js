const totalUsers = document.getElementById('totalUsers');
const totalSales = document.getElementById('totalSales');


const alertButton = document.getElementById('alertButton');


alertButton.addEventListener('click', function() {
   
    const users = totalUsers.textContent;
    const sales = totalSales.textContent;
    
    
    alert(`Total Users: ${users}, Total Sales: ${sales}`);
});