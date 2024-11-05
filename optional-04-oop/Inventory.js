/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

class Inventory {
    constructor(...items){
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);

    }

    removeItem(id){
        
        this.items.forEach((item,index)=>{
            if (item['id'] == id){


                this.items.splice(index);
            }
        });
    }

    listItems(){
        let text = '';
        this.items.forEach((item)=>{
            text += item.displayDetails(item['id'],item['name'],item['quantity'],item['price']) + '\n';
        });
        return text;
        
    }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
