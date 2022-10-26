const device_status_filter = document.getElementById('device_status');
device_status_filter.addEventListener('change', function(){
    const online_device = document.querySelectorAll('.online');
    const offline_device = document.querySelectorAll('.offline');
    const warning_device = document.querySelectorAll('.warning');
    const error_device = document.querySelectorAll('.error');

    if(device_status_filter.value == "Online"){
        online_device.forEach(function(element){
            element.classList.remove('hidden');
        });
        
        offline_device.forEach(function(element){
            element.classList.add('hidden');
        });

        warning_device.forEach(function(element){
            element.classList.add('hidden');
        });

        error_device.forEach(function(element){
            element.classList.add('hidden');
        });
        
        console.log(device_status_filter.value);
    }else if(device_status_filter.value == "Offline"){
        online_device.forEach(function(element){
            element.classList.add('hidden');
        });
        
        offline_device.forEach(function(element){
            element.classList.remove('hidden');
        });

        warning_device.forEach(function(element){
            element.classList.add('hidden');
        });

        error_device.forEach(function(element){
            element.classList.add('hidden');
        });

        console.log(device_status_filter.value);
    }else if(device_status_filter.value == "Warning"){
        online_device.forEach(function(element){
            element.classList.add('hidden');
        });
        
        offline_device.forEach(function(element){
            element.classList.add('hidden');
        });

        warning_device.forEach(function(element){
            element.classList.remove('hidden');
        });

        error_device.forEach(function(element){
            element.classList.add('hidden');
        });

        console.log(device_status_filter.value);
    }else if(device_status_filter.value == "Error"){
        online_device.forEach(function(element){
            element.classList.add('hidden');
        });
        
        offline_device.forEach(function(element){
            element.classList.add('hidden');
        });

        warning_device.forEach(function(element){
            element.classList.add('hidden');
        });

        error_device.forEach(function(element){
            element.classList.remove('hidden');
        });
        console.log(device_status_filter.value);
    }else{
        online_device.forEach(function(element){
            element.classList.remove('hidden');
        });
        
        offline_device.forEach(function(element){
            element.classList.remove('hidden');
        });

        warning_device.forEach(function(element){
            element.classList.remove('hidden');
        });

        error_device.forEach(function(element){
            element.classList.remove('hidden');
        });
    }
});

function showAllDevices(status){
    var devicesContainer = document.getElementById(status);
    document.getElementById('all-device-status-list').classList.add('hidden');
    devicesContainer.classList.remove('hidden');
    console.log(status);
}




