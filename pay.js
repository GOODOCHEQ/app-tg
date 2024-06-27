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


// Получаем все элементы с классом "plan"
const plans = document.querySelectorAll('.plan');
const selectedServer = document.querySelector('.selected-server');
const nextButton = document.getElementById('nextButton');
const planBlock = document.querySelector('.plan-block');
const paymentBlock = document.querySelector('.payment-block');
const steps = document.querySelectorAll('.step');
const sendDataBtn = document.querySelector('.send-data-btn');
const subscriptionTitle = document.getElementById('subscriptionTitle');
const selectedOptions = document.querySelector('.selected-options');

// Определяем переменную currentStep и устанавливаем ее начальное значение
let currentStep = 0;

// Добавляем обработчики событий для выбора плана
plans.forEach(plan => {
    plan.addEventListener('click', () => {
        // Убираем класс "selected" у всех планов
        plans.forEach(p => p.classList.remove('selected'));
        // Добавляем класс "selected" к выбранному плану
        plan.classList.add('selected');
        // Активируем кнопку "Далее"
        nextButton.disabled = false;
        // Устанавливаем цвет кнопки "Далее" для выбранного плана
        nextButton.style.backgroundColor = '#007bff';
        nextButton.style.color = '#fff';

        // Сохраняем выбранный план в localStorage
        const selectedPlan = plan.querySelector('.name').textContent;
        localStorage.setItem('selectedPlan', selectedPlan);
    });
});

// Обработчик события для кнопки "Далее"
nextButton.addEventListener('click', () => {
    const selectedPlan = localStorage.getItem('selectedPlan');

    if (currentStep === 0) {
        if (selectedPlan === '5 дней') {
            // Пропустить шаг оплаты и перейти к последнему шагу
            planBlock.style.display = 'none';
            paymentBlock.style.display = 'none'; // Скрыть блок с выбором способа оплаты

            selectedServer.textContent = 'Выбранный сервер: ' + localStorage.getItem('selectedServer');
            const selectedPlanField = document.querySelector('.selected-plan');
            selectedPlanField.textContent = 'Выбранный план: ' + selectedPlan;
            
            // Показать блок с выбранными параметрами
            selectedOptions.style.display = 'block';
            // Убираем выбранный способ оплаты, если план 5 дней
            document.querySelector('.selected-payment').style.display = 'none';
            // Обновляем текст заголовка на "Все верно?"
            subscriptionTitle.textContent = 'Все верно?';
            // Устанавливаем третий кружок активным
            steps[2].classList.add('active');
            // Устанавливаем иконку для третьего кружка
            document.querySelectorAll('.step-icon')[2].innerHTML = '<i class="fas fa-check-circle"></i>';
            nextButton.textContent = 'Получить доступ';

            // Скрываем кнопку "Перейти к оплате"
            nextButton.style.display = 'none';
            // Показываем кнопку "Отправить данные в бот"
            sendDataBtn.style.display = 'block';
        } else {
            // Переключаемся на блок с выбором способа оплаты
            planBlock.style.display = 'none';
            paymentBlock.style.display = 'block';
            // Обновляем текст заголовка
            subscriptionTitle.textContent = 'Варианты оплаты';
            // Обновляем текущий шаг
            currentStep++;
            // Активируем следующий шаг в индикаторе
            steps[currentStep].classList.add('active');
            // Устанавливаем иконку для текущего шага
            document.querySelectorAll('.step-icon')[currentStep].innerHTML = '<i class="fas fa-check-circle"></i>';
        }
    } else if (currentStep === 1) {
        const selectedPaymentOption = document.querySelector('.payment-option.selected');
        if (selectedPaymentOption) {
            // Сохранение выбранного способа оплаты в localStorage
            const selectedPayment = selectedPaymentOption.querySelector('.name').textContent;
            localStorage.setItem('selectedPayment', selectedPayment);

            // Переход к следующему шагу
            planBlock.style.display = 'none';
            paymentBlock.style.display = 'none'; // Скрыть блок с выбором способа оплаты
            const selectedPlanField = document.querySelector('.selected-plan');
            const selectedPaymentField = document.querySelector('.selected-payment');
            selectedServer.textContent = 'Выбранный сервер: ' + localStorage.getItem('selectedServer');
            selectedPlanField.textContent = 'Выбранный план: ' + selectedPlan;
            selectedPaymentField.textContent = 'Выбранный способ оплаты: ' + selectedPayment;
            // Показать блок с выбранными параметрами
            selectedOptions.style.display = 'block';
            // Обновляем текст заголовка на "Все верно?"
            subscriptionTitle.textContent = 'Все верно?';
            // Устанавливаем третий кружок активным
            steps[2].classList.add('active');
            // Устанавливаем иконку для третьего кружка
            document.querySelectorAll('.step-icon')[2].innerHTML = '<i class="fas fa-check-circle"></i>';
            nextButton.textContent = 'Перейти к оплате';

            // Скрываем кнопку "Перейти к оплате"
            nextButton.style.display = 'none';
            // Показываем кнопку "Отправить данные в бот"
            sendDataBtn.style.display = 'block';
        } else {
            // Способ оплаты не выбран, выводим сообщение или предупреждение
            alert('Пожалуйста, выберите способ оплаты');
        }
    }
});

// Обработчик события для выбора варианта оплаты
const paymentOptions = document.querySelectorAll('.payment-option');

// Добавляем обработчики событий для выбора варианта оплаты
paymentOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Убираем класс "selected" у всех вариантов оплаты
        paymentOptions.forEach(o => o.classList.remove('selected'));
        // Добавляем класс "selected" к выбранному варианту оплаты
        option.classList.add('selected');
        // Устанавливаем цвет кнопки "Далее" для выбранного варианта оплаты
        nextButton.style.backgroundColor = '#007bff';
        nextButton.style.color = '#fff';
    });
});

// Обработчик события для кнопки "Отправить данные в бот"
sendDataBtn.addEventListener('click', () => {
    const selectedPlanElement = document.querySelector('.plan.selected .name');
    const selectedPlan = selectedPlanElement ? selectedPlanElement.textContent : '';
    const selectedPaymentOption = document.querySelector('.payment-option.selected .name').textContent;

    // Сохранение данных в localStorage перед переходом на страницу оплаты
    localStorage.setItem('selectedPlan', selectedPlan);
    localStorage.setItem('selectedPayment', selectedPaymentOption);

    if (selectedPaymentOption === 'Банковская карта') {
        if (selectedPlan === '1 месяц') {
            window.location.href = 'pay1m.html';
        } else if (selectedPlan === '3 месяца') {
            window.location.href = 'pay3m.html';
        } else if (selectedPlan === '6 месяцев') {
            window.location.href = 'pay6m.html';
        } else if (selectedPlan === '1 год') {
            window.location.href = 'pay12m.html';
        }
    } else {
        // Выполнить другие действия
        // Здесь может быть ваш код для отправки данных в бот или другие действия
    }
});
