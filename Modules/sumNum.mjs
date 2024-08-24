export const sumoofNum = (num, num1) => {
    return num + num1;
}

export const obj = {
    name: "vikas",
    age: 23,
    fun: function () {
        return `My name is ${this.name} and I am ${this.age} year old.`
    }
}

const defaultFun = (data) => {
    return data
}

export default defaultFun;