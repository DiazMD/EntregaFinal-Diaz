import DATA from "../data/DATA.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA)
        }, 500)
    })
}