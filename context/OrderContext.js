import React, { createContext, useState, useContext } from 'react';
import { NotificationService } from '../services/notificationService';

const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [activeOrder, setActiveOrder] = useState(null);

  const startOrderSimulation = () => {
    setActiveOrder({ id: '123', status: 'pending' });
    NotificationService.sendOrderStatusNotification('pending');


    setTimeout(() => {
      setActiveOrder({ id: '123', status: 'shipped' });
      NotificationService.sendOrderStatusNotification('shipped');
    }, 20000);

    setTimeout(() => {
      setActiveOrder({ id: '123', status: 'delivered' });
      NotificationService.sendOrderStatusNotification('delivered');
      
      setTimeout(() => setActiveOrder(null), 5000);
    }, 20000);
  };

  return (
    <OrderContext.Provider value={{ activeOrder, startOrderSimulation }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);