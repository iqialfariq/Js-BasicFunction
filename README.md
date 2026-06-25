# 🧠 Penjelasan Function
<p align="justify">
Function di JavaScript adalah sebuah blok kode yang bisa dipanggil berulang kali untuk menjalankan tugas tertentu. Jadi, daripada menulis ulang kode yang sama, kita bungkus dalam function lalu tinggal memanggilnya kapan saja.
</p>

---

- **Konsep Utama Function:** 📎
```
  - Deklarasi: Membuat function dengan nama tertentu.
 	- Parameter: Nilai yang kita masukkan ke function agar bisa diproses.
 	- Return value: Hasil yang dikembalikan oleh function setelah dijalankan.
 	- Pemanggilan (call): Menjalankan function dengan menuliskan namanya.
```

---

### 📌 Cara Menuliskan Function Ada 2 Cara Yaitu:

- **Function Declaration** 📎
  ```js
    // Berikan inisialisasi nama pada function
    function tambah(a, b) {
      // Kembalikan nilai nya lalu berikan kondisi nya
      return a + b;
    }
    
    // pemanggilan function menggunakan nama function itu sendiri
    console.log(tambah(5, 7)); // Output: 12

- **Function Expression** 📎
  ```js
    // Berikan inisialisasi pada variabel
    const kali = function(a, b) {
    // Kembalikan nilai nya lalu berikan kondisi nya
      return a * b;
    };
    
    // pemanggilan function menggunakan nama function itu sendiri
    console.log(kali(4, 6)); // Output: 24
