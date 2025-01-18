import { createRouter, createWebHistory } from "vue-router";
import SignUp from "./pages/SignUp.vue";
import LoginPage from "./pages/LoginPage.vue";
import Dashboard from "./pages/Dash_Board.vue";
import MyInvoicesPage from "./pages/LoginDashboard.vue"; 
import ResetPassword from "./pages/Reset_Password.vue";
import checkAuthStatus from "../utills/checkTokenStatus";
import HelpPage from "./pages/HelpPage.vue";
import OtpPage from "./components/OtpInput.vue"


const routes = [
  { path: "/SignUp", component: SignUp, meta: { showNavBar: false, title: "Sign Up - Smart Invoice" } },
  { path: "/LoginPage", component: LoginPage, meta: { showNavBar: false, title: "Login - Smart Invoice" } },
  { path: "/DashBoard",  name: "DashBoard", component: Dashboard, meta: { showNavBar: true, title: "Dashboard - Smart Invoice"} },
  {path: "/LoginDashboard",component: MyInvoicesPage, meta: { showNavBar: true, title: "My Invoices - Smart Invoice" }},
  {path:"/ResetPassword",component:ResetPassword, meta:{ showNavBar:false,title:"Reset Password - Smart Invoice"} },
  {path: "/HelpPage",component: HelpPage, meta: { showNavBar: true, title: "Help Page- Smart Invoice" }},
  {path: "/verifyOtp",component: OtpPage, meta: { showNavBar: false, title: "OTP- Smart Invoice" }},
  { path: "/", component: Dashboard, meta: { showNavBar: true, title: "Smart Invoice" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  console.log("Checking authentication...");
  const isAuthenticated = await checkAuthStatus();
  console.log("Authentication status:", isAuthenticated);

  if (to.path === "/" && isAuthenticated) {
    console.log("Redirecting to Dashboard...");
    return next("/DashBoard");
  }
  if (to.path === "/LoginPage" && isAuthenticated) {
    console.log("Already authenticated, redirecting to Dashboard...");
    return next("/DashBoard");
  }

 

  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "Smart Invoice";
  }

  next();
});

export default router;
