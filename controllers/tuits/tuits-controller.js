import posts from "./tuits.js";
let tuits = posts;

const createTuit = async (req, res) => {
    const newTuit = req.body;
    newTuit.time= "0m";
    newTuit.liked= false;
    newTuit.disliked= false;
    newTuit.replies= 0;
    newTuit.retuits= 0;
    newTuit.likes= 0;
    newTuit.dislikes= 0;
    newTuit.handle= "@user";
    newTuit.image="bridge.jpg";
    const insertedTuit = await tuitsDao
        .createTuit(newTuit);
    res.json(insertedTuit);
}


const findTuits = async (req, res) => {
    const tuits = await tuitsDao.findTuits()
    res.json(tuits);
}


const updateTuit = async (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const status = await tuitsDao
        .updateTuit(tuitIdToUpdate,
            updates);
    res.json(status);
}


const deleteTuit = async (req, res) => {
    const tuitIdToDelete = req.params.tid;
    const status = await tuitsDao
        .deleteTuit(tuitIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
