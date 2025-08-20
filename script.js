function getFormvalue() {
    // Retrieve values from input fields
      const fname = document.forms["form1"]["fname"].value.trim();
      const lname = document.forms["form1"]["lname"].value.trim();

      // Handle empty fields
      if (!fname || !lname) {
        alert("⚠️ Please enter both First Name and Last Name");
      } else {
        // Display full name
        alert(fname + " " + lname);
      }

      // Prevent form submission refresh
      return false;
}
