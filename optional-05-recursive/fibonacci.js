let fibo = []
function fibonacci(n) {

    if (n <= 1){
        return n;
    } 
    else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

}

// Jangan hapus kode di bawah ini!
export default fibonacci;
