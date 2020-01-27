function produceDrivingRange(num) {
    return function blockRange(b1, b2) {
        const b1Num = b1.slice(0, 2);
        const b2Num = b2.slice(0, 2);
        const range = Number(b2Num) - Number(b1Num);
        if (range >= num ) {
            return `${range - num} blocks out of range`;
        } else {
            return `within range by ${-(range - num)}`;
        }
    }
}

function produceTipCalculator(percent) {
    return function (amount) {
        return amount * percent;
    }
}

function createDriver() {
    let driverID = 0;
    return class Driver {
        constructor(name) {
            this.name = name;
            this.id = ++driverID;
        }
    }
}