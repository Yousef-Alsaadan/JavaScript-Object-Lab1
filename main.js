const User = {
    name: "Yousef",
    email: "yousefmalsaadan@gmail.com",
    id: 0,
    available: false,
    checkUser: function(){
        return this.available == true;
    },
    address:{
        city:{
            country: "Saudi Arabia",
            region: "Central",
        },
        district: "Al Wadi",
        street: "AL Malki",
    },
    skills: ["Web Development", "Python", "Java", "JavaScript"],
};


console.log(User);

console.log(User.name);

User.id = 1;
console.log(User.id);

delete User.email;
console.log(User);

User.available = true;
console.log(User.checkUser());

console.log(User.address);

console.log(User.address.city);

console.log(User.skills[2]);

console.log(User.skills.join(", "));