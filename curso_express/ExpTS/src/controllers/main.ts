import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

export const bemvindo = (req: Request, res: Response) => {
    res.send(req.params.name);
};

export const page = (req: Request, res: Response) => {
    res.sendFile(`${publicPath}/html/index.html`);
};

export const index = (req: Request, res: Response) => {
    res.end('Web academy!');
};

export const lorem = (req: Request, res: Response) => {
    res.sendFile(`${publicPath}/html/lorem.html`);
};

export const hb1 = (req: Request, res: Response) => {
    res.render('main/hb1', {
        uf: 'Universidade Federal do Amazonas',
    });
};

export const hb2 = (req: Request, res: Response) => {
    const profs = [
        { nome: 'Tayana Conte', sala: 1234 },
        { nome: 'Horacio Fernandes', sala: 1652 },
        { nome: 'Elaine Harada', sala: 2525 },
        { nome: 'Edleno Moura', sala: 1263 },
    ];
    res.render('main/hb2', {
        profs,
    });
};

export const hb3 = (req: Request, res: Response) => {
    res.render('main/hb3', {
        nome: 'Express',
        tipo: 'Framework',
        poweredByNode: true,
    });
};

export const hb4 = (req: Request, res: Response) => {
    const profs = [
        { nome: 'Tayana Conte', sala: 1234 },
        { nome: 'Horacio Fernandes', sala: 1652 },
        { nome: 'Elaine Harada', sala: 2525 },
        { nome: 'Edleno Moura', sala: 1263 },
    ];
    res.render('main/hb4', {
        profs,
    });
};

export const hb5 = (req: Request, res: Response) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('main/hb5', {
        technologies,
    });
};

export default { bemvindo, page, index, lorem, hb1, hb2, hb3, hb4, hb5 };
