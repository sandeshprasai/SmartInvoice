<template>
  <div class="navbar-container">
    <nav class="navbar">
      <!-- Logo Section -->
      <div class="logo">
        <img src="@/assets/smartlogo.jpg" alt="Logo" />
        <span class="title">Smart Invoice</span>
      </div>

      <ul class="nav-links">
        <li><a href="#">Help</a></li>
        <li><a href="#">My Invoices</a></li>
        <li><a href="#">Invoicing Guide</a></li>
        
        <!-- Conditional Rendering -->
        <!-- Show "Sign In" and "Sign Up" when not logged in -->
        <li v-if="!isLoggedIn"><button class="sign-in" @click="handleLogin()">Sign In</button></li>
        <li v-if="!isLoggedIn"><button class="sign-up" @click="handleSignup()">Sign Up</button></li>
        
        <!-- Show "Log Out" button only when logged in -->
        <li v-if="isLoggedIn"><button class="log-out" @click="handleLogout">Log Out</button></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      // Assume the user is not logged in by default
      isLoggedIn: false,
    };
  },
  methods: {
    handleLogout() {
      // Simulate log out process, then hide "Log Out" button and show "Sign In"
      this.isLoggedIn = false;
      alert("Logged out!");

      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    },

    // Simulate login process (you would replace this with actual login logic)
    handleLogin() {
      this.$router.push('/LoginPage')
    },
    handleSignup(){
      this.$router.push('/Signup')
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #c3e3fb;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  font-size: 16px;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #070885;
  gap: 10px;
}

.logo img {
  width: 50px;
  height: auto;
  border-radius: 5px;
  margin-top: -27px;
}

.title {
  font-size: 18px;
  font-family: Arial, sans-serif;
  margin-top: -30px;
}

/* Navigation Links */
.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #070885;
  font-size: 15px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ef7a04;
}

.sign-in,
.sign-up,
.log-out {
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.sign-in {
  background-color: #070885;
}

.sign-up {
  background-color: #6474bc;
}

.log-out {
  background-color: #ef7a04;
}

button:hover {
  background-color: #555;
  transform: scale(1.05);
}

/* Responsive Styles */
@media (max-width: 768px) {
  .navbar {
    flex-direction: row;
    align-items: center;
    padding: 10px 20px;
  }

  .nav-links {
    flex-direction: row;
    gap: 15px;
  }

  .sign-in,
  .sign-up,
  .log-out {
    width: auto;
    font-size: 13px;
    padding: 8px;
  }
}

/* Hide title on smaller screens */
@media (max-width: 480px) {
  .title {
    display: none; /* Hide the "Smart Invoice" text */
  }

  .sign-in,
  .sign-up,
  .log-out {
    padding: 6px 12px;
    font-size: 12px;
    border-radius: 3px;
  }

  .nav-links {
    gap: 10px; /* Adjust gap between buttons */
  }

  .logo {
    justify-content: center; /* Ensure the logo is centered */
    max-width: 120px; /* Limit the logo section's size on small screens */
  }
}
</style>
