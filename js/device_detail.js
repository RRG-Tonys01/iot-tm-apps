const device_detail = document.getElementById('device-detail-header');
const device_detail_body = document.getElementById('device-detail-body');
const device_customer = document.getElementById('device-customer-header');
const device_customer_body = document.getElementById('device-customer-body');

device_detail.addEventListener('click', function(){
    device_detail.classList.add('bg-gray-100');
    device_detail.classList.remove('bg-blue-100');
    device_detail_body.classList.remove('hidden');
    
    device_customer.classList.remove('bg-gray-100');
    device_customer.classList.add('bg-blue-100');

    device_customer_body.classList.add('hidden');
    console.log('clicked');
});

device_customer.addEventListener('click',function(){
    device_detail.classList.remove('bg-gray-100');
    device_detail.classList.add('bg-blue-100');

    device_detail_body.classList.add('hidden');
    
    device_customer.classList.remove('bg-blue-100');
    device_customer.classList.add('bg-gray-100');

    device_customer_body.classList.remove('hidden');
    console.log('clicked');
});

const ac_relay = document.getElementById('ac-relay-toggle');
ac_relay.addEventListener('click', function(){
    if(document.getElementById('ac-relay-off').classList.contains('hidden')){
        document.getElementById('ac-relay-off').classList.remove('hidden');
        document.getElementById('ac-relay-on').classList.add('hidden');
        console.log(document.getElementById('ac-relay-off').classList.contains('hidden'));
    }else{
        document.getElementById('ac-relay-on').classList.remove('hidden');
        document.getElementById('ac-relay-off').classList.add('hidden');
        console.log(document.getElementById('ac-relay-on').classList.contains('hidden'));
    }
});

const dc_relay = document.getElementById('dc-relay-toggle');
dc_relay.addEventListener('click', function(){
    if(document.getElementById('dc-relay-off').classList.contains('hidden')){
        document.getElementById('dc-relay-off').classList.remove('hidden');
        document.getElementById('dc-relay-on').classList.add('hidden');
        console.log(document.getElementById('dc-relay-off').classList.contains('hidden'));
    }else{
        document.getElementById('dc-relay-on').classList.remove('hidden');
        document.getElementById('dc-relay-off').classList.add('hidden');
        console.log(document.getElementById('dc-relay-on').classList.contains('hidden'));
    }
});
