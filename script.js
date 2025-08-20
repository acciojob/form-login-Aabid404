function getFormvalue() {
    //Write your code here
	 const fname = document.forms["nameForm"]["fname"].value.trim();
      const lname = document.forms["nameForm"]["lname"].value.trim();

      // Combine names
      const fullName = fname + " " + lname;

      // Show alert
      alert(fullName);

      // Prevent form from refreshing page
      return false;
}
