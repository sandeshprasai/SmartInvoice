<template>
    <div class="Invoice-container">
        <div class="container">
            <h2 class="title">My Invoices</h2>
            <li v-if="!isLoggedIn" class="add-invoice-wrapper">
            <button class="add-invoice" @click="handleDashboard()">New Invoice</button>
            </li>
        </div>
      <div v-for="(invoice, index) in invoices" :key="index" class="invoice-item">
        <div>
          <label>Customer:</label>
          <input v-model="invoice.customer" type="text" />
        </div>
        <div>
          <label>Reference:</label>
          <input v-model="invoice.reference" type="text" />
        </div>
        <div>
          <label>Date:</label>
          <input v-model="invoice.date" type="date" />
        </div>
        <div>
          <label>Due Date:</label>
          <input v-model="invoice.dueDate" type="date" />
        </div>
        <div>
          <label>Status:</label>
          <select v-model="invoice.status">
            <option>Paid</option>
            <option>Unpaid</option>
            <option>Pending</option>
          </select>
        </div>
        <div>
          <label>Total:</label>
          <input v-model="invoice.total" type="text" />
        </div>
     </div>
    </div>
  </template>
  
  
  <script>
export default {
  name: "MyInvoicesPage",
  data() {
    return {
      
    };
  },
  methods: {
    handleDashboard() {
      this.$router.push('/Dashboard');
    },
    addNewInvoice() {
      this.invoices.push({
        customer: "",
        reference: "",
        date: "",
        dueDate: "",
        status: "Unpaid",
        total: ""
      });
    }
  }
};
</script>

  
  
  <style scoped>
    .Invoice-container {
        margin-top: 100px;
        background-color: #c3e3fb;
        border-radius: 10px;
    }
    .container {
        background-color: #c3e3fb;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height:auto;
        margin: 100px 600px;
        border: none;
    }

    .title {
        font-size: 24px;
        font-weight: bold;
        margin-top: 0px;
        margin-left: -500px;
        
    }
    .add-invoice {
    margin-top: 10px;
    cursor: pointer;
    margin-left: 120px;
    
    }

  
  .add-invoice-wrapper {
  list-style-type: none; 
  }
  
  .invoice-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .invoice-table th,
  .invoice-table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  .invoice-table th {
    background-color: #f8f9fa;
  }
  
  .status-paid {
    color: #28a745;
    font-weight: bold;
  }
  
  .status-unpaid {
    color: #dc3545;
    font-weight: bold;
  }
  
  .view-btn {
    padding: 5px 10px;
    border: 1px solid #007bff;
    background-color: white;
    color: #007bff;
    cursor: pointer;
    border-radius: 3px;
  }
  
  .view-btn:hover {
    background-color: #007bff;
    color: white;
  }
  </style>
  