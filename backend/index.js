import express from "express";
import cors from "cors";
import fs from "fs";
import csv from "csv-parser";

const app = express();

app.use(cors({
    origin: "*"
}));

app.get("/g1", (req, res) => {
    const dataPoints = { x: [], y: [] };

    fs.createReadStream('/Users/shivamratnani/DSSDShivam/spotify-2023.csv') 
        .pipe(csv())
        .on('data', row => {
            dataPoints.x.push(row.released_year);
            dataPoints.y.push(row.streams);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            res.status(200).send(dataPoints);
        })
        .on('error', (err) => {
            console.error(err);
            res.status(500).send('Could not read CSV file');
        });
});

app.get("/g2", (req, res) => {
    const dataPoints = { x: [], y: [] };

    fs.createReadStream('/Users/shivamratnani/DSSDShivam/spotify-2023.csv') 
        .pipe(csv())
        .on('data', row => {
            dataPoints.x.push(row.released_month);
            dataPoints.y.push(row.streams);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            res.status(200).send(dataPoints);
        })
        .on('error', (err) => {
            console.error(err);
            res.status(500).send('Could not read CSV file');
        });
});

app.get("/g3", (req, res) => {
    const dataPoints = { x: [], y: [] };

    fs.createReadStream('/Users/shivamratnani/DSSDShivam/spotify-2023.csv') 
        .pipe(csv())
        .on('data', row => {
            dataPoints.x.push(row.released_day);
            dataPoints.y.push(row.streams);
        })
        .on('end', () => {
            console.log('CSV file successfully processed');
            res.status(200).send(dataPoints);
        })
        .on('error', (err) => {
            console.error(err);
            res.status(500).send('Could not read CSV file');
        });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port} 🚀`));


