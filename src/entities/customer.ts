export class Customer {
    public firstName: string;
    public lastName: string;
    public email: string;

    constructor(props) {
        Object.assign(this, props);
    }
}