const fs = require("fs")
const csv = require("csv-parser")
const deleteCountry = ["usa.txt", "canada.txt"]

// Deleting the CSV files
deleteCountry.map(country => {
    fs.unlink(country, (err) => {
        if (err) return err;
        console.log(`--> ${country} has been deleted successfully`)
    })
}
)

// Filtering the data and writing it
fs.createReadStream("input_countries.csv").pipe(csv()).on("data", (data) => {
    if (data.country === "Canada") {
        fs.appendFileSync("canada.txt", `${data.country}, ${data.year}, ${data.population}\n`)
    }
    if (data.country === "United States") {
        fs.appendFileSync("usa.txt", `${data.country}, ${data.year}, ${data.population}\n`)
    }
})
