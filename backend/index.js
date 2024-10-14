import express from 'express';
import uniqid from 'uniqid';
import fs from 'fs';
import cors from 'cors';
import { GPTScript, RunEventType } from '@gptscript-ai/gptscript';

const g = new GPTScript();

const app = express();
app.use(cors());

app.get('/test', (req, res) =>{
    return res.json('test ok');
});

app.get('/create-story', (req, res) => {
    const url = req.query.url;
    const dir = uniqid();
    const path = './stories/'+dir;
    fs.mkdirSync(path, {resursive: true});

    console.log({
        url,
    });

    const run = await gptscript.run('./story.gpt', {
        input: `--url ${url} --dir ${dir}`, 
        disableCache: true,
    })
    run.on(RunEventType.Event, ev =>{
        if(ev.type == RunEventType.CallFinish && ev.output){
            console.log(ev.output);
        }
    });
    const result = await run.text();

    return res.json('ok');
});

app.listen(7070, () => console.log('Listening on port 7070'));
