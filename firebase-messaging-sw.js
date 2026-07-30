// Importa os scripts necessários para o Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

// Inicializa o Firebase dentro do Service Worker com as suas credenciais
firebase.initializeApp({
    apiKey: "AIzaSyDjamnwcgG61PrwP08uP8RRJ_x99zALZ8A",
    authDomain: "treinoacademia-13aff.firebaseapp.com",
    projectId: "treinoacademia-13aff",
    messagingSenderId: "494669882064",
    appId: "1:494669882064:web:dcfb2bd3630b5d3d2874d5"
});

const messaging = firebase.messaging();

// Lógica para exibir a notificação quando o app estiver fechado
messaging.onBackgroundMessage((payload) => {
    console.log('Recebeu mensagem em segundo plano: ', payload);
    
    const notificationTitle = payload.notification.title || "Aviso de Dieta";
    const notificationOptions = {
        body: payload.notification.body || "Está na hora da sua próxima refeição!",
        icon: '/icon.png', // Certifique-se de ter uma imagem chamada icon.png na sua pasta
        badge: '/icon.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});