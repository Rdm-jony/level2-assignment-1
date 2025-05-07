### 1. What are some differences between interfaces and types in TypeScript?

**Declaration Merging:**
> Interfaces can have multiple declarations that are merged  
***Example:***
```
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
```

> Type aliases cannot have multiple declarations  
***Example:***
```
        type Animal = {
            name: string
        }
        type Animal = {       //Error: Duplicate identifier 'Animal'.ts
            age: number
        }
```
**Extends vs Intersection:**
> Interfaces use extends for combining types  
***Example:***
```
        interface Animal {
            name: string
        }
        interface Dog extends Animal {
            species: string
        }

        const instance: Dog = {
            name: "jony", 
            species: "dog"
        }
```
> Type aliases use "&" for combining types  
***Example:***
```
        type Animal = {
            name: string
        }
        type Dog = Animal & {
            species: string
        }

        const instance: Dog = {
            name: "jony",
            species: "dog"
        }
```
**Primitive vs Non-Primitive Types:**
> Interfaces can only be used for object types (non-primitive)
**Example:**
```
        interface Animal {
            name: string,
            species: string
        }

        const instance: Animal = {
            name: "jony",
            species: "dog"
        }
```
> Type aliases can be used for both primitive and non-primitive types  
**Example:**
```
        type Animal = {
            name: string,
            species: string
        }

        const instance: Animal = {
            name: "jony",
            species: "dog"
        }

        type IsAdmin = boolean
        type UserId = string | number
```
***Union Types:***
> Interfaces cannot create union types  
>
> Type aliases can create union types  
**Example:**
```
    type UserId = string | number
```
        

### 2. What is the use of the keyof keyword in TypeScript? Provide an example.
The "keyof" keyword is used to create a union type from the keys of an existing type.
Example:
        type Animal = {
            name: string,
            species: string
        }

        type AnimalKeys = keyof Animal; // "name" | "species"

### 3. Explain the difference between any, unknown, and never types in TypeScript.

* any:
- Can be assigned any type
- Less type-safe
Example:
        let anyValue: any = "jony"
        anyValue = 4
        anyValue = true

* unknown:
- Can be assigned any type
- Must be type-checked before use
- More type-safe than any
Example:
        let unknownValue: unknown = 4;
        unknownValue = "hello"; 
        if (typeof unknownValue === "string") {
            unknownValue.toUpperCase(); // OK after type check
        }

* never:
- Used for functions that never return or always throw errors
Example:
        function throwError(): never {
            throw new Error("Error");
        }


### 4. What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Enums provide a way to define named constants, making code more readable and maintainable.

* Numeric enum:
- Values automatically increment from 0 by default
Example:
        enum Direction {
            Up,    // 0
            Down,  // 1
            Left,  // 2
            Right  // 3
        }

* String enum:
- Must be initialized with strings
- No automatic incrementation
Example:
        enum Status {
            Active = "ACTIVE",
            Inactive = "INACTIVE"
        }


### 5. What is type inference in TypeScript? Why is it helpful?
Type inference is TypeScript's ability to automatically determine types based on values.

Benefits:
- Easier code maintenance
- Type safety
- Catches errors before runtime
- Reduces code verbosity

Example:
        const number = 42;          // TypeScript infers: number
        const text = "Hello";       // TypeScript infers: string
        const isActive = true;      // TypeScript infers: boolean
        const numbers = [1, 2, 3];  // TypeScript infers: number[]


### 6. How does TypeScript help in improving code quality and project maintainability?
- Catches errors at compile time before runtime
- Increases code productivity
- Supports modern features like classes, interfaces, generics
- Provides built-in documentation
- Easily transpiles to older JavaScript versions
- Offers additional data types (enum, tuple, any, unknown, never, void)
- Enhances code maintainability


### 7. Provide an example of using union and intersection types in TypeScript.

* Union Types: Allow a variable to have multiple types
Example:
    let id: string | number;
    id = "123";    // OK
    id = 123;      // OK
    id = true;     // Error: Type 'boolean' is not assignable

* Intersection Types: Combine multiple types into one
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
    const instance: ManagerEmployee = {
        name: "jony",
        id: 1,
        department: "HR",
        role: "Manager"
    }
