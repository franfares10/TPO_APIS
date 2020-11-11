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
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupportIcon from '@material-ui/icons/ContactSupport';
import ContactIcon from '@material-ui/icons/ContactPhone';
import ProblemIcon from '@material-ui/icons/ReportProblem';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
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
    icon: AssignmentIcon,
    component: DashboardPage,
    layout: "/admin"
    icon: Assignments,
    component: DashboardCompanyPage,
    layout: "/companyAdmin",
    state:"true"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    state: "false"
  },
  {
    path: "/user",
    name: "Perfil",
    icon: Person,
    component: UserCompanyProfile,
    layout: "/companyAdmin",
    state: "false"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin",
    state:"false"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsCompanyPage,
    layout: "/companyAdmin",
    state:"false"
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
