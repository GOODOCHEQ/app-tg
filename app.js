// Функция для открытия модального окна с меню
function openMenuModal() {
    document.getElementById('menuModal').style.display = 'block';
}

// Функция для закрытия модального окна с меню
function closeMenuModal() {
    document.getElementById('menuModal').style.display = 'none';
}

// Функция для открытия модального окна с информацией о времени работы и контактах
function openInfoModal() {
    document.getElementById('infoModal').style.display = 'block';
}

// Функция для закрытия модального окна с информацией о времени работы и контактах
function closeInfoModal() {
    document.getElementById('infoModal').style.display = 'none';
}

// Функция для открытия модального окна с формой бронирования стола
function openReservationModal() {
    document.getElementById('reservationModal').style.display = 'block';
}

// Функция для закрытия модального окна с формой бронирования стола
function closeReservationModal() {
    document.getElementById('reservationModal').style.display = 'none';
}

// Функция для отправки данных бронирования и отображения подтверждения
function submitReservation(event) {
    event.preventDefault();

    var phone = document.getElementById('phone').value;
    var guests = document.getElementById('guests').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;

    var message = "Ждем вас " + date + " в " + time + ". Номер телефона: " + phone + ", количество гостей: " + guests + ".";
    
    closeReservationModal();

    document.getElementById('confirmationDetails').innerText = message;
    document.getElementById('confirmationModal').style.display = 'block';
}

// Функция для закрытия модального окна с подтверждением бронирования
function closeConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

// Функция для открытия модального окна с программой лояльности
function openLoyaltyProgramModal() {
    document.getElementById('loyaltyProgramModal').style.display = 'block';
}

// Функция для закрытия модального окна с программой лояльности
function closeLoyaltyProgramModal() {
    document.getElementById('loyaltyProgramModal').style.display = 'none';
}

// Функция для открытия модального окна с формой для оставления отзыва
function openReviewModal() {
    document.getElementById('reviewModal').style.display = 'block';
}

// Функция для закрытия модального окна с формой для оставления отзыва
function closeReviewModal() {
    document.getElementById('reviewModal').style.display = 'none';
}
