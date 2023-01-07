// class User {
//     #name;
//     #password;
//     constructor(name, login, age) {
//         this.#name = name;
//         this.login = login;
//         this.age = age;
//         this.#password = '123';
//     }
//     getName(isAdmin) {
//         return isAdmin ? this.#name || this.login : 'Permission denied';
//     };
//     changeName(newName, password) {
//         if (password == this.#password) {
//             return `Name change from ${this.#name} to ${this.#name = newName}`;
//         } else {
//             return 'Permission denied';
//         }
             
//     }
// }

// const user1 = new User('Mike', 'MK_18', 18);
// const user2 = new User('', 'NRG', 22);

// console.log(user1.login);
// console.log(user1.age);
// console.log(user2.login);
// console.log(user2.age);


// console.log(user1.getName(true));
// console.log(user2.getName(true));
// console.log(user2.getName(false));

// console.log(user1.changeName('Bill', '123'));

// class Admin extends User {
//     #isAdmin;
//     #name;
//     constructor(name, login, age) {
//         super(name, login, age);
//         this.#name = name;
//         this.#isAdmin = true;
//     }
//     getUserName(user) {
//         console.log(user.getName(this.#isAdmin));
//     }


// }

// const admin = new Admin('Arnold', 'AR_36', 36);
// admin.getUserName(user1);

class User {
    #phone
    constructor(name, phone) {
        this.name = name;
        this.#phone = phone;
    }
    getPhone(isAdmin) {
        let arrayPhone = this.#phone.split('');
        for (let i = 4; i < arrayPhone.length - 3; i++) {
            arrayPhone[i] = '*';
        }
        isAdmin ? console.log(this.#phone) : console.log(arrayPhone.join(''));
    }
}

const user1 = new User('Mike', '068-888-88-99');
const user2 = new User('Tom', '099-888-88-99');

user1.getPhone(false);
user1.getPhone(true);