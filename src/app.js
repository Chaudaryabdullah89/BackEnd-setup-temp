import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
const app = express();


app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(express.json({ limit: "16kb" }));
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
app.use(express.json({ limit: "16kb" }));
app.use(cookieParser());

app.get("/", (req, res) => {

    res.send("Hello World! i am a backend developer");
});


app.post("/", (req, res) => {
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

