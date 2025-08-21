# 🎯 GA MONGOOSE LAB: Customer CRM Application

## Summary of App and Features

### 1. Database Connection

- Uses `dotenv` to load MongoDB URI from `.env` file
- Connects to your existing MongoDB Atlas database
- Proper error handling for connection issues

### 2. Full CRUD Operations

- **Create**: Add new customers with name and age validation
- **Read**: View all customers with their IDs, names, and ages
- **Update**: Select a customer by ID and update their information
- **Delete**: Select a customer by ID and remove them from database

### 3. User Interface

- Welcome message on startup
- Numbered menu system (1-5 options)
- Input validation for age fields
- Clear feedback messages for all operations
- Proper error handling throughout

### 4. Application Flow

- Continuous loop until user chooses to quit
- Displays customer lists when updating/deleting for easy ID selection
- Clean exit with database connection closure

## 🚀 How to Run

`node app.js`

🔄 How to Use Each Feature

1. **Create Customer**: Enter name and age (age must be a valid number)
2. **View All Customers**: Displays all customers with IDs for easy reference
3. **Update Customer**: Shows customer list, then prompts for ID to update
4. **Delete Customer**: Shows customer list, then prompts for ID to delete
5. **Quit**: Safely exits and closes database connection

## 💡 Key Features Added

- **Input Validation**: Age validation ensures only numbers are accepted
- **Error Handling**: Catches and displays meaningful error messages
- **Customer Lookup**: Verifies customer exists before update/delete operations
- **Clean UI**: Clear prompts and feedback messages match the lab requirements
- **Database Safety**: Proper connection management and cleanup
