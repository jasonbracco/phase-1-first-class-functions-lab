const returnFirstTwoDrivers = function(drivers){
    return [drivers[0],drivers[1]]
} 

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2) //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(number){
    return function(fare){
        return number*fare
        }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, neededFunction){
    return neededFunction(array)
}
