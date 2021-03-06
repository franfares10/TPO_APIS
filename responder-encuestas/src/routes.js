
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Assignments from "@material-ui/icons/Assignment";
import SupportIcon from '@material-ui/icons/ContactSupport';
import GroupAddIcon from '@material-ui/icons/GroupAdd';

import ProblemIcon from '@material-ui/icons/ReportProblem';
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/PollSelection.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import NewPollPage from "views/NewPoll/NewPoll.js";
import Ayuda from "views/Ayuda/Ayuda.js";
import Problema from "views/Problema/Problema.js"
import DashboardCompanyPage from "views/Dashboard/CompanyDashboard"
import NuevaEmpresa from "views/NuevaEmpresa/SignUp";
import UserCompanyProfile from "views/UserProfile/CompanyProfile"
import NotificationsCompanyPage from "views/Notifications/CompanyNotifications"
import Contacto from "views/Contacto/Contacto";
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import AyudaCompany from "views/Ayuda/AyudaCompany"
import Encuesta from "views/Dashboard/Encuesta";
import encuestaPreview from "views/Dashboard/encuestaPreview"
// core components/views for RTL layout


/* RUTAS DE NAVEGACION*/
const dashboardRoutes = [
  {
    path: "/newpoll",
    name: "Lanzar Encuesta",
    icon: Assignments,
    component: NewPollPage,
    layout: "/admin",
    state: "true"
  },
  {
    path: "/dashboard",
    name: "Encuestas Lanzadas",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
    state:"true"
  },
  {
    path: "/dashboard",
    name: "Encuestas",
    icon: Assignments,
    component: DashboardCompanyPage,
    layout: "/companyAdmin",
    state:"true"
  },
  {
    path:"/addCompany",
    name:"Nueva Empresa",
    icon:GroupAddIcon,
    component:NuevaEmpresa,
    layout:"/admin",
    state:"true"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    state: "false"
  },
  {
    path: "/user",
    name: "User Profile",
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
    icon: SupportIcon,
    component: Ayuda,
    layout: "/admin",
    state:"true"
  },
  {
    path: "/ayuda",
    name: "Ayuda",
    icon: SupportIcon,
    component: AyudaCompany,
    layout: "/companyAdmin",
    state:"true"
  },
  {
    path: "/problema",
    name: "Reportar un Problema",
    icon: ProblemIcon,
    component: Problema,
    layout: "/admin",
    state:"true"
  },
  {
    path:"/contacto",
    name:"Contacto",
    icon: ContactPhoneIcon,
    component: Contacto,
    layout: "/companyAdmin",
    state:"true"
  },
  {
    path: "/problema",
    name: "Reportar un Problema",
    icon: ProblemIcon,
    component: Problema,
    layout: "/companyAdmin",
    state:"true"
  },
  {
    path:"/encuestas",
    name:"Encuestas",
    component: Encuesta,
    layout:"/companyAdmin",
    state:"false"
  },
  {
    path:"/previewencuestas",
    name:"Encuesta",
    component: encuestaPreview,
    layout:"/admin",
    state:"false"
  }
];

export default dashboardRoutes;
