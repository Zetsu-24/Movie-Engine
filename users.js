import express from 'express';

const router = express.Router();

const users = [
    {
        firstName: "Raghav",
        lastName: "Mathur",
        age: 37
    }
]

router.get('/', (req, res) => {
    res.json(users);
});

router.post('/', (req, res) => {
    console.log('POST ROUTE REACHED');
    res.send('POST ROUTE REACHED ');
});

export default router;

