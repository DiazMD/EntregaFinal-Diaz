import DATA from "../data/DATA.json"

export const getData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA)
        }, 500)
    })
}