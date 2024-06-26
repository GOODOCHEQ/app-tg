// Получаем user_id из URL
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');

// Сохраняем user_id в localStorage
if (userId) {
  localStorage.setItem('user_id', userId);
} else {
  alert('User ID не найден');
}

document.getElementById("serverBtn").addEventListener("click", function() {
  // Получаем выбранный сервер
  var selectedServer = document.getElementById("serverSelect").value;
  
  // Сохраняем выбранный сервер в localStorage
  localStorage.setItem("selectedServer", selectedServer);
  
  // Перенаправляем пользователя на страницу pay.html
  window.location.href = "pay.html";
});

document.addEventListener('click', function(event) {
  var dropdown = document.querySelector('.dropdown'); // Обращаемся к классу, не идентификатору
  var dropdownContent = document.getElementById('dropdownContent');

  // Если клик был вне выпадающего окна, то закрываем его
  if (!dropdown.contains(event.target)) {
    dropdownContent.style.display = 'none';
  }
});


