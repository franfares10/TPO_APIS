/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import SupportIcon from '@material-ui/icons/ContactSupport';
import ContactIcon from '@material-ui/icons/ContactPhone';
import ProblemIcon from '@material-ui/icons/ReportProblem';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import Ayuda from "views/Ayuda/Ayuda.js";
import Contacto from "views/Contacto/Contacto.js"
import Problema from "views/Problema/Problema.js"
// core components/views for RTL layout


/* RUTAS DE NAVEGACION*/
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Encuestas",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Perfil",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notificaciones",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/ayuda",
    name: "Ayuda",
    rtlName: "مساعدة",
    icon: SupportIcon,
    component: Ayuda,
    layout: "/admin"
  },
  {
    path: "/contacto",
    name: "Contacto",
    rtlName: "اتصل",
    icon: ContactIcon,
    component: Contacto,
    layout: "/admin"
  },
  {
    path: "/problema",
    name: "Reportar un Problema",
    rtlName: "الإبلاغ عن مشكلة",
    icon: ProblemIcon,
    component: Problema,
    layout: "/admin"
  }
];

export default dashboardRoutes;
