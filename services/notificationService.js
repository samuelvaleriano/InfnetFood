import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';


Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export const NotificationService = {
  requestPermissions: async () => {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    return finalStatus === 'granted';
  },


  sendOrderStatusNotification: async (status) => {
    const messages = {
      pending: { title: "InfnetFood: Pedido Recebido", body: "Já estamos preparando seu lanche!" },
      shipped: { title: "InfnetFood: Saiu para entrega", body: "O motoboy acabou de sair!" },
      delivered: { title: "InfnetFood: Entregue", body: "Bom apetite! O que achou da comida?" },
    };

    const msg = messages[status] || messages.pending;

    await Notifications.scheduleNotificationAsync({
      content: {
        title: msg.title,
        body: msg.body,
        sound: true,
      },
      trigger: null, 
    });
  }
};