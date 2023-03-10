class Customer1 {
    firstName1: string;
    lastName1: string;

    public greeter() {
        console.log(`Hello, ${this.firstName1} ${this.lastName1}`);
    }
}

let customer1 = new Customer1();
customer1.firstName1 = "Dan";
customer1.lastName1 = "Blark";
customer1.greeter();

