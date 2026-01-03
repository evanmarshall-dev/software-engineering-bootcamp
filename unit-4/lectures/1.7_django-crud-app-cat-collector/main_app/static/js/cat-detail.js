const dateInput = document.getElementById('id_date'); // Select the date input by ID

// Create a date picker instance
const picker = MCDatepicker.create({
  el: '#id_date',
  dateFormat: 'yyyy-mm-dd', // Set the desired date format
  closeOnBlur: true, // Close picker when clicking outside
  selectedDate: new Date(), // Default to today's date
});

// Open the date picker when the input is clicked
dateInput.addEventListener('click', () => {
  picker.open();
});
