/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// membuat variable untuk element view
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

// membuat variable untuk menampung nilai dari email dan password
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

// Menambahkan aksi untuk button
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  // membuat variable untuk menerima nilai inputan email dan password 
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  // membuat perbandingan untuk validasi nilai dari email dan password apakah benar atau salah
  if (email == expectedEmail && password == expectedPassword) {
    goToHome(); // ketika email dan password yang diinput benar maka akan masuk kedalam halaman utama
  } else {
    showPopUp(); // jika password dan email salah maka akan menampilkan popup informasi bahka inputan salah
  }
});
