import express from 'express';
import uniqid from 'uniqid';
import fs from 'fs';
import cors from 'cors';
import { GPTScript, RunEventType } from '@gptscript-ai/gptscript';



const app = express();

app.use(cors());

const g = new GPTScript();

app.get('/test', (req, res) =>{
    return res.json('test ok');
});

app.get('/create-story', async (req, res) => {
    const url = req.query.url;
    const dir = uniqid();
    const path = './stories/'+dir;
    fs.mkdirSync(path, {resursive: true});

    console.log({
        url,
    });

    const opts = {
        input: `--url ${url} --dir ${dir}`, 
        disableCache: true,
    };

    console.log('about to run story.gpt');

    const run = await g.run('./story.gpt', opts);

    console.log('awaiting result');
    run.on(RunEventType.Event, ev =>{
        //if(ev.type == RunEventType.CallFinish && ev.output){
            console.log(ev.output);
        //}
    });
    const result = await run.text();

    return res.json(result);
});

app.listen(7070, () => console.log('Listening on port 7070'));
