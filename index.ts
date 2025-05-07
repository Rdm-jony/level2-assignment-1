function formatString(input: string, toUpper?: boolean | undefined): string {
    if (toUpper || toUpper === undefined) {
        return input.toUpperCase()
    }
    return input.toLowerCase()
}


type Item = {
    title: string
    rating: number
}

function filterByRating(items: Item[]): Item[] {
    const filterArray:Item[] = items.filter((item: Item):boolean => item.rating >= 4)
    return filterArray
}



function concatenateArrays<T>(...arrays: T[][]): T[] {
    let finalArray: T[] = []
    arrays.forEach((ele: T[]) => {
        ele.forEach((item:T) => {
            finalArray.push(item)
        })
    })
    return finalArray
}



class Vehicle {
    private make: string;
    private year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;
    }
    getInfo(): string {
        return `Make: ${this.make} , Year: ${this.year}`
    }

}

class Car extends Vehicle {
    private model: string;
    constructor(make: string, year: number, model: string) {
        super(make, year)
        this.model = model;
    }

    getModel(): string {
        return `Model: ${this.model}`
    }
}



function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length

    }

    return value * 2
}


interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) return null;

    return products.reduce((maxPrice: Product, currentPrice: Product): Product => {
        return currentPrice.price > maxPrice.price ? currentPrice : maxPrice
    })
}



enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day):string {
    if (day === Day.Sunday) {
        return "Weekend"
    }
    return "Weekday"
}



const squareAsync = async (n: number): Promise<number> => {
    return new Promise((resolve, reject) => {
        if (n >= 0) {
            setTimeout(() => {
                return resolve(n * n)
            }, 1000)
        } else {
            reject("Negative number not allowed")

        }
    })
}








