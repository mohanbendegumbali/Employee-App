class EmployeePayroll {
        constructor(name, id, salary, startDate, department, gender, notes, profilePic) {
        // Default constructor
        }
  
        // Getters
        get name() {
        return this._name;
        }
    
        get id() {
        return this._id;
        }
    
        get salary() {
        return this._salary;
        }
    
        get startDate() {
        return this._startDate;
        }
    
        get department() {
        return this._department;
        }
    
        get gender() {
        return this._gender;
        }
    
        get notes() {
        return this._notes;
        }
    
        get profilePic() {
        return this._profilePic;
        }
    
        // Setters
        set name(name) {
        let nameRegex = RegExp("^[A-Z]{1}[a-z]{3,}$");
        if (nameRegex.test(name)) {
        this._name = name;
        } else {
        throw "Invalid name format!";
        }
        }
    
        set id(id) {
        this._id = id;
        }
    
        set salary(salary) {
        this._salary = salary;
        }
    
        set startDate(startDate) {
        this._startDate = startDate;
        }
    
        set department(department) {
        this._department = department;
        }
    
        set gender(gender) {
        this._gender = gender;
        }
    
        set notes(notes) {
        this._notes = notes;
        }
    
        set profilePic(profilePic) {
        this._profilePic = profilePic;
        }

        toString() {
        const options = { year:'numeric',month:'long',day:'numeric'};
        const empDate = !this.startDate ? "undefined":
                        this.startDate.toLocaleDateString("en-US",options);
        return (
            "Name: " +
            this.name +
            ", ID: " +
            this.id +
            ", Salary: " +
            this.salary +
            ", Start Date: " +
            this.startDate +
            ", Department: " +
            this.department +
            ", Gender: " +
            this.gender +
            ", Notes: " +
            this.notes +
            ", Profile Pic: " +
            this.profilePic);
        }
        }

        window.addEventListener('DOMContentLoaded', (event) => {
        const name = document.querySelector('#name');
        const textError = document.querySelector('.text-error');
        
        // Regex for name validation
        const nameRegex = RegExp('^[A-Z][a-zA-Z]{2,}$');

        name.addEventListener('input', function() {
            if (name.value.length == 0) {
            textError.textContent = "";
            return;
            }
            try {
            if (!nameRegex.test(name.value)) throw "Name is invalid!";
            new EmployeePayroll().name = name.value;
            textError.textContent = "";
            } catch(e) {
            textError.textContent = e;
            }
        });

        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function() {
            output.textContent = salary.value;
        });
        });

        function saveData() {
        // Get input values
        var name = document.getElementById("name").value;
        var salary = document.getElementById("salary").value;
        var day = document.getElementById("day").value;
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        var note = document.getElementById("notes").value;

        // Create employee object
        var employee = { name: name, salary: salary, day: day, month: month, year: year, notes: note };

        // Store employee object in local storage
        localStorage.setItem("employeeData", JSON.stringify(employee));

        // Alert user that data has been saved
        alert("Employee data saved!");
        }         