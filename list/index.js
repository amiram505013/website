// Get elements
const toggleSwitch = document.getElementById('toggle');
const loginContent = document.getElementById('login-content');
const registerContent = document.getElementById('register-content');


const popup = document.querySelector('.add-to-list')
const cloas = document.querySelector('#add-list')
const open = document.querySelector('.open')
const item = document.querySelector('#list-to')


const submit = document.getElementById('done')

const time1 = document.getElementById('tim')
const des1  = document.getElementById('des')
const name1 = document.getElementById('name')
var time2 = time1.value
var des2  = des1.value
var name2 = name1.value


time1.addEventListener('input' , (e)=>{
  time2 = e.target.value
})

des1.addEventListener('input' , (e)=>{
  des2 = e.target.value
})

name1.addEventListener('input' , (e)=>{
  name2 = e.target.value
})


// Add event listener to the toggle switch
toggleSwitch.addEventListener('change', function() {
    if (toggleSwitch.checked) {
        // If checked, show register content and hide login content
        loginContent.style.display = 'none';
        registerContent.style.display = 'block';
    } else {
        // If not checked, show login content and hide register content
        loginContent.style.display = 'block';
        registerContent.style.display = 'none';
    }
});


cloas.addEventListener('click' , ()=>{
  popup.style.display = 'none'
})
open.addEventListener('click' , ()=>{
  popup.style.display = 'block'
})


// -----------------------------------------------


submit.addEventListener('click' , ()=>{
  addDars(`${name2}`,`${des2}`,time2)

})

var curr = 1
function addDars(name, dse, time) {
  let div = document.createElement('div');
  let h21 = document.createElement('h2');
  let h22 = document.createElement('h2');
  let h3 = document.createElement('h3');
  let h4 = document.createElement('h4');
  let span1 = document.createElement('span');
  let span2 = document.createElement('span');
  let span3 = document.createElement('span');

  div.id = curr;
  div.classList.add('item');

  span1.innerText = 'زمان باقی مانده : ';
  span2.innerText = `${time}`;
  span3.innerText = 'روز';

  h21.innerText = curr + 1;
  h22.innerText = name;

  h3.innerText = dse;

  h4.appendChild(span1);
  h4.appendChild(span2);
  h4.appendChild(span3);

  // ایجاد دکمه حذف برای هر آیتم
  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'حذف';
  deleteButton.id = 'clear-button'
  deleteButton.addEventListener('click', function() {
    div.remove();
    // حذف مقدار time مربوط به این آیتم از localStorage
    localStorage.removeItem(`time_${div.id}`);
  });

  div.appendChild(h21);
  div.appendChild(h22);
  div.appendChild(h3);
  div.appendChild(h4);
  div.appendChild(deleteButton); // اضافه کردن دکمه حذف به آیتم

  item.appendChild(div);

  function updateTimer() {
    if (time === 0) {
      div.remove();
      // حذف مقدار time مربوط به این آیتم از localStorage
      localStorage.removeItem(`time_${div.id}`);
    } else {
      time -= 1;
      span2.innerText = `${time}`;
      // ذخیره مقدار time در localStorage
      localStorage.setItem(`time_${div.id}`, time.toString());
      setTimeout(updateTimer, 86400000); // 86400000 میلی‌ثانیه معادل یک روز است
    }
  }

  // بازیابی مقدار time از localStorage اگر وجود داشته باشد
  const storedTime = localStorage.getItem(`time_${div.id}`);
  if (storedTime !== null) {
    time = parseInt(storedTime, 10);
    updateTimer();
  }

  curr += 1;
}

// مثال فراخوانی تابع


