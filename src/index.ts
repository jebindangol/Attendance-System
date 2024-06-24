import express from 'express';
import eventRouter from './router/event/eventrouter';
import bodyParser from "body-parser";
import noticeboardRouter from './router/noticeboard/noticeboardrouter'; 
import leaveRouter from './router/leave/leaverouter';
import attendanceRouter from './router/attendance/attendancerouter';
import worklogRouter from './router/worklog/worklogrouter';
import peopleRouter from './router/people/peoplerouter';
import cors from "cors";



const app = express();
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*",
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "ngrok-skip-browser-warning",
        ],
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    }),
);
app.options("*", cors());

app.use("/events", eventRouter);
app.use("/noticeboard", noticeboardRouter);
app.use("/attendance", attendanceRouter);
app.use("/worklog", worklogRouter);
app.use("/leave", leaveRouter);
app.use("/people", peopleRouter);



const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
