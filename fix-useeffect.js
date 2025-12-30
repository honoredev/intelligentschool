useEffect(() => {
  const fetchCustomersData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/customers")
      const customers = await response.json()
      setCustomersData(customers)
    } catch (err) {
      console.error("Error fetching customers data:", err)
    }
  }
  
  fetchCustomersData()
}, []) // Added dependency array