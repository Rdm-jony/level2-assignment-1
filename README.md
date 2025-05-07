1. What are some differences between interfaces and types in TypeScript?

*Merging delclaration:-
=>Interface can define multiple identifier
Example:
       interface Animal {
           name: string
       }
       interface Animal {
           age: number
       }
       
       const user: Animal = {
           name: "jony",
           age: 20
       }
=>Type alias cannot define multiple indentifier
Example:
        type Animal {
            name: string
        }
        type Animal {       //Error: Duplicate identifier 'Animal'.ts
            age: number
        }

*Extentends vs Intersection:-
=>Interface use extends for combining type
Example:
        interface Animal {
            name: string
        }
        interface dog extends Animal {
            species: string
        }

        const instance: dog = {
            name: "jony",
            species: "dog"
        }
=>Type alias user "&" for combining type
Example:
        type Animal = {
            name: string
        }
        type dog = Animal & {
            species: string
        }

        const instance: dog = {
            name: "jony",
            species: "dog"
        }

*Primitive vs Non primitive types
=>Interface user for only non primitive
Example:
        interface Animal {
            name: string,
            species: string
        }

        const instance: Animal = {
            name: "jony",
            species: "dog"
        }

=>Type alias used for both Primitive and non primitive
Example:
        type Animal = {
            name: string,
            species: string
        }

        const instance: Animal = {
            name: "jony",
            species: "dog"
        }

        type isAdmin = boolean
        type userId = string | number

*Union type
=>Interface cannot make union type
=>Type alias can create union
Example:
        type userId = string | number
        

2. What is the use of the keyof keyword in TypeScript? Provide an example.
=>"keyof" keyword basically use for create union type by the keys of a type
Example:
        type Animal = {
            name: string,
            species: string
        }

        type AnimalKeys = keyof Animal; // "name" | "species"

3. Explain the difference between any, unknown, and never types in TypeScript.
=>any:
    ->can be assign any type
    ->less type safe
Examlple:
        let anyValue: any = "jony"
        anyValue = 4
        anyValue = true
=>unknown:
    ->can be assign any type
    ->must be type check before use
    ->more safe than any
Example:
        let unknownValue: unknown = 4;
        unknownValue = "hello"; 
        if (typeof unknownValue === "string") {
            unknownValue.toUpperCase(); // OK after type check
        }
=>never:
    ->use for function which is always throw error or never return
Example:
        function throwError(): never {
            throw new Error("Error");
        }


4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
=>Enum is way to define a named constant.it help to make code readble and maintainable.
=>Numeric enum:
            ->its value by default increment from 0;
Example:
        enum Direction {
            Up,    // 0
            Down,  // 1
            Left,  // 2
            Right  // 3
        }
=>String enum:
            ->munst be initialize with string 
            ->not auto incremental
Example:
        enum Status {
        Active = "ACTIVE",
        Inactive = "INACTIVE"
        }


5. What is type inference in TypeScript? Why is it helpful?
=>Type inference in typescript is the ability to anutomatice type determine of a varibale based on its value.
->Easier to code mainitain
->Type safety
->give erorr before runtime
->less code to write

Example:
        const number = 42;          // TypeScript infers: number
        const text = "Hello";       // TypeScript infers: string
        const isActive = true;      // TypeScript infers: boolean
        const numbers = [1, 2, 3];  // TypeScript infers: number[]


6. How does TypeScript help in improving code quality and project maintainability?
->give error at compile time and before runtime
->increase code productibity
->support modern feature like classes,interface,generic etc.
->it has built in documentaion
->conver js older version easily
->it has own data type like enum,tuple,any.unknown,never,void etc.
->Increase code maintainability 


7. Provide an example of using union and intersection types in TypeScript.
=>Union: In union type a varibale have multiple type
Example:
    let id: string | number;
    id = "123";    // OK
    id = 123;      // OK
    id = true;     // Error: Type 'boolean' is not assignable
=>Intersection: Combine multiple types into one type.
Example:
    type Employee = {
       name: string;
       id: number;
    }
   
    type Manager = {
       department: string;
       role: string;
    }
   
    type ManagerEmployee = Employee & Manager;
    const instance:ManagerEmployee = {
    name: "jony",
    id: 1,
    department: "HR",
    role: "Manager"
    }
