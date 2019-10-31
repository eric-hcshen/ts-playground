//https://www.typescriptlang.org/docs/handbook/decorators.html
//tsc --target ES5 --experimentalDecorators ./src/decorator-test.ts
function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
    console.log('prepare...')
}
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target + ':' + propertyKey, ':' + descriptor);
        descriptor.enumerable = value;
    };
}
@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
        console.log('In constructor');
    }
    @enumerable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}

const greeter: Greeter = new Greeter('Eric');
console.log(greeter.greet());