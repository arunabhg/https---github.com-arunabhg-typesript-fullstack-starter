import express from "express";
const port = 3002;

const app = express();

app.listen(port, () => {
	console.log(`App listening on port ${port}`);
});
