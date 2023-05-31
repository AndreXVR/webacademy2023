import { Router } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/bemvindo/:nome', (req, res) => {
    res.send(req.params.nome);
});

router.get('/page', (req, res) => {
    res.sendFile(`${publicPath}/html/index.html`);
});

router.get('/', (req, res) => {
    res.end('Web academy!');
});

router.get('/lorem', (req, res) => {
    res.sendFile(`${publicPath}/html/lorem.html`);
});

export default router;
