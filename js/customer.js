const customerPopUp = document.getElementById('customer-pop-up-desktop-view');

var customers = document.querySelectorAll('.customer');
customers.forEach(customer => customer.addEventListener(
    'click', function(){
        // console.log(customer.id);
        document.getElementById(customer.id).classList.toggle('bg-main-gray');
        customerPopUp.classList.toggle('hidden');
    }
));


const province = document.getElementById('province');
const city = document.getElementById('city');

province.addEventListener('change', function(){
    city.classList.remove('hidden');
});

function customerListData(provinsi,city="all"){
    
}
