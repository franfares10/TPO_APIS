import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";


const navBarRoutes = [
    {
      path: "/user",
      name: "Perfil",
      rtlName: "ملف تعريفي للمستخدم",
      component: UserProfile,
      layout: "/admin"
    },
    {
      path: "/notifications",
      name: "Notificaciones",
      rtlName: "إخطارات",
      component: NotificationsPage,
      layout: "/admin"
    }
  ];

  export default navBarRoutes;