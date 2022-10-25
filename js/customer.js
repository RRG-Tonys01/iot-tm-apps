const province = document.getElementById('province');
province.addEventListener('change', function(){
    document.getElementById('city').classList.remove('hidden');
});

const customerCard = document.getElementById("customerID");
const customerPopUp = document.getElementById("customer-pop-up");
customerCard.addEventListener('click',function(){
    customerCard.classList.toggle('bg-main-gray');
    customerPopUp.classList.toggle('hidden');
    popUpRef[0].classList.add('text-blue-100');
});


const popUpRef = document.querySelectorAll("#customer-pop-up a");
popUpRef[0].addEventListener('click', function(){
    popUpRef[0].classList.add('text-blue-100');
    popUpRef[1].classList.remove('text-blue-100');
    popUpRef[2].classList.remove('text-blue-100');
    document.getElementById('c_detail').classList.remove('hidden');
    document.getElementById('c_user').classList.add('hidden');
    document.getElementById('c_device').classList.add('hidden');
});

popUpRef[1].addEventListener('click', function(){
    popUpRef[1].classList.add('text-blue-100');
    popUpRef[2].classList.remove('text-blue-100');
    popUpRef[0].classList.remove('text-blue-100');
    document.getElementById('c_detail').classList.add('hidden');
    document.getElementById('c_user').classList.remove('hidden');
    document.getElementById('c_device').classList.add('hidden');
});

popUpRef[2].addEventListener('click', function(){
    popUpRef[2].classList.add('text-blue-100');
    popUpRef[0].classList.remove('text-blue-100');
    popUpRef[1].classList.remove('text-blue-100');
    document.getElementById('c_detail').classList.add('hidden');
    document.getElementById('c_user').classList.add('hidden');
    document.getElementById('c_device').classList.remove('hidden');
});

const checkBoxDevice = document.querySelectorAll(".checkbox");
checkBoxDevice.forEach(box => {
    box.addEventListener('click', function(){
        if(box == checkBoxDevice[0]){
            for(var i=0;i<checkBoxDevice.length;i++){    
                checkBoxDevice[i].classList.toggle('bg-blue-500');
            }
            checkBoxDevice[0].classList.toggle('bg-blue-500');
            console.log('clicked All');
        }else{
            box.classList.toggle('bg-blue-500');
            console.log('clicked');
        }
    });
});