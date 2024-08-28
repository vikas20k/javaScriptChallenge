// Task 1 Define a class person with properties name and age and a method to return a greeting message .create an intance of the class log the greeting message.
class Person {
    constructor(name, age, lastname) {
        this.name = name;
        this.age = age;
        this.lastname = lastname;

    }
    greeting() {
        return `my name is ${this.name} and I am ${this.age} year old.`
    }
    updateAge(newage) {
        this.age = newage
    }

    static greet() {
        return `hello my name is vikas kumar`
    }

    get fullname() {
        return `${this.name} ${this.lastname}`
    }
    set fullname(names) {
        const [name, lastName] = names.split(' ')
        this.name = name;
        this.lastname = lastName;
    }

}

const person1 = new Person('vikas kumar', 23)
const person2 = new Person("sunny jha", 24)
console.log(person1.greeting())
console.log(person2.greeting())

// Task 2 Add a method to the Person class that updates the age property and logs the updated age.
person1.updateAge(30)
console.log(person1.greeting())


// Task 3 Define a class Student that extends the person class. add a property StudentId and a method to method to return the student Id . create an intance of the Stuendt class and log the student Id.

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age)
        this.studentID = studentID;
    }
    greeting() {
        return `My name is ${this.name} and I am ${this.age}. My rollno is ${this.studentID}`
    }
}
const student1 = new Student("vikas ", 23, 11011)
console.log(student1.studentID)


// Task 4 Override the greeting method in the Student class to include the student  ID in the message. log the override greeting message.
console.log(student1.greeting())
console.log(person1.greeting())

// Task 5 Add a static method to the Person class that return a generic greeting message. call this staic method without creating an intance of the  class and log the message.

console.log(Person.greet()) // Call the static method directly using the class name.

// Task 6 Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of studnets.

class StudentArt {
    static studentCount = 0;
    constructor(name, age) {
        this.name = name;
        this.age = age;


        StudentArt.studentCount++

        console.log(`Number of Student ${StudentArt.studentCount}`)
    }
}

const studentArt1 = new StudentArt("vikas kumar", 23)
const studentArt2 = new StudentArt("sunny jha", 24)
const studentArt3 = new StudentArt("Koushal jha", 22)

// Task 7 Add a getter method to the Person class to return the full name ( fisrt and last name ) Create an instance and log the full name using the getter

const person7 = new Person('Rahul', 23, 'Kumar')
console.log(person7.fullname)

// Task 8  Add a setter method to the Person class to update the name properies (firstName and lastName). Update the name using the setter and log the updated full name.
person7.fullname = 'ram lal'
console.log(person7.fullname)


// Task 9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the blance can only updated through these methods.

class Account {
    #balance; // private field for balance.
    constructor(initialBalance = 0) {
        this.#balance = initialBalance
    }

    desposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited : ₹${amount}. New Balance : ₹${this.#balance}`)
        } else {
            console.log(`Deposit amount must be positive.`)
        }
    }

    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            console.log(`Deposited: ₹${amount}. New Balance: ₹${this.#balance}`);
        } else if (amount > this.#balance) {
            console.log("Insufficient balance.")
        } else {
            console.log('withdrawal amount must be positive.')
        }
    }
    getBalance() {
        return this.#balance
    }

}

const myAccount = new Account(100)
console.log(myAccount.getBalance())
myAccount.desposit(2000)
myAccount.withdraw(600)


// Task 10 Create an instance of the Account class and test the desposit and withdraw methods. loggins the balacne after each operation.