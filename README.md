# klikdaily
Database ini merupakan database penyimpanan data stock sebuah gudang dimana admin dapat melihat barang serta mengupdate data keluar masuknya barang. Database ini dibuat menggunakan Express JS dengan database MySQL.

Fitur:
1.	Admin dapat melihat semua barang beserta stock barang
2.	Admin dapat membuat adjustment 
3.	Admin dapat melihat logs yang berhasil di adjustment.

Cara penggunaan: 
1.	Import database 
2.	Di dalam Postman masukan url http://localhost:3000/product/klikdaily/stocks
untuk melihat semua data barang beserta stock yang tersedia menggunakan method GET
3.	Untuk melakukan adjustment masukan url http://localhost:3000/product/klikdaily/adjustment dengan method POST. Ketika adjustment berhasil dibuat maka table logs akan terisi otomatis dan stock product akan terupdate.
4.	Untuk melihat logs masukan url http://localhost:3000/product/klikdaily/logs/{location_id} dengan method GET. Disini akan tampil semua logs sesuai parameter id yang diinputkan
