import orderedDog from "./OrderFunctions"
import {prueba, expecDataHeightMax, expecDataHeightMin, expecDataWeightMax, expecDataWeightMin}
from "./testArray"

describe("ORDER FUNCTIONS", ()=>{
    
    
    let heightDesactived = {actived: false, min: false}
    let heightActived = {actived: true, min: false}
    let heightActivedMin = {actived: true, min: true}
    
    let weightDesactived = {actived: false, min: false}
    let weightActived = {actived: true, min: false}
    let weightActivedMin = {actived: true, min: true}
    it("If recibe the function recibe the property descendent, return the array descendent", 
    ()=>{
        let current = orderedDog(prueba, true, heightDesactived, weightDesactived)
        expect(current).toStrictEqual(prueba.reverse())
    })

    describe("Testing Height Actved", ()=> {
        it("Order by height max", ()=> {
            let current = orderedDog(prueba, false, heightActived, weightDesactived)
            expect(current).toStrictEqual(expecDataHeightMax)
        })

        it("Order by height min", ()=> {
            let current = orderedDog(prueba, false, heightActivedMin, weightDesactived)
            expect(current).toStrictEqual(expecDataHeightMin)
        })

        it("If reverse is true, return the result inverse", ()=> {
            let current = orderedDog(prueba, true, heightActived, weightDesactived)
            expect(current).toStrictEqual(expecDataHeightMax.reverse())
        })     
    })

    describe("Testing Weight Actved", ()=> {
        it("Order by weight max", ()=> {
            let current = orderedDog(prueba, false, heightDesactived, weightActived)
            expect(current).toStrictEqual(expecDataWeightMax)
        })

        it("Order by weight min", ()=> {
            let current = orderedDog(prueba, false, heightDesactived, weightActivedMin)
            expect(current).toStrictEqual(expecDataWeightMin)
        })

        it("If reverse is true, return the result inverse", ()=> {
            let current = orderedDog(prueba, true, heightDesactived, weightActived)
            expect(current).toStrictEqual(expecDataWeightMax.reverse())
        })     
    })
})