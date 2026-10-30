import {mkdir,copyFile,rm} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});for(const f of ['index.html','style.css','app.js','model.js','report.js','research.json'])await copyFile(f,'dist/'+f);console.log('Static production build complete. Relative paths support GitHub Pages subfolders.');
