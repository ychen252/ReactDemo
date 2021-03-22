// dev
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const models = require("../db/models");
//middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
// all exception will throw http status = 500
app.use((err, req, res, next) => {
    if (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

app.get('/list', async (req, res, next) => {
    try {
        let tasks = await models.tasks.findAll();
        res.json({
            list: tasks
        });
    } catch(error) {
        next(error);
    }
})

app.post('/create', async (req, res, next) => {
    try {
        let { name, content, deadline } = req.body;
        let task = await models.tasks.create({
            name,
            content,
            deadline
        })
        res.json({
            task,
        })
    } catch (error) {
        next(error);
    }

})

app.post('/update', async (req, res, next) => {
    try {
        let { id, name, content, deadline } = req.body;
        let task = await models.tasks.findOne({
            where: {
                id: id
            }
        });
        if (task) {
            task.update({
                name,
                content,
                deadline
            });
        }
        res.json({
            task: {},
        })
    }
    catch (error) { next(error) }
})

app.post('/update_status', async (req, res, next) => {
    try {
        let { id, status } = req.body;
        let task = await models.tasks.findOne({
            where: {
                id: id
            }
        });
        task.update({
            isFinished:status
        });
        res.json({
            todo: {},
        })
    } catch (err) {
        next(error);

    }
})







app.listen(3000, () => {
    console.log("server started!!");
})



