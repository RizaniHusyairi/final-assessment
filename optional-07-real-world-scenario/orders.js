// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  let price = 0;
  for (let i = 0; i < items.length; i++){
      price += items[i].price;
    }

  let tempOrder = {
    id : generateUniqueId(),
    customerName : customerName,
    items : items,
    totalPrice : price,
    status: 'Menunggu'
  }
  orders.push(tempOrder);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const updateOrder = orders.map(order => {
    if(order.id == orderId){
      return order.status = status;
    }else{
      return order
    }
  })
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  let totalRevenue = 0;
  orders.forEach(order => {
    
    if(order.status == "Selesai"){
      totalRevenue+=order.totalPrice;
    }
    
  })
  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const deleteOrder = orders.filter(order => order.id !== id);
  orders = deleteOrder
}

export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
