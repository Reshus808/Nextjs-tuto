// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';


export default async function handler(req, res) {
    let data = await fs.promises.readdir('blogdata');
    let myfiles;
    let allblogs = [];
    for (let index = 0; index < data.length; index++) {
        const item = data[index];
        console.log(item)
        myfiles = await fs.promises.readFile(('blogdata/' + item), 'utf-8');
        allblogs.push(JSON.parse(myfiles))
    }
    res.status(200).json(allblogs)
}
// export default function handler(req, res) {
//   // console.log(res)
//   fs.readdir('blogdata', (err, data) => {
//     console.log(data)
//   // res.status(200).json({ name: 'John Doe' })
//   res.status(200).json(data)
//   })
// }

// export default function handler(req, res) {
//   fs.readFile('blogdata/how-to-learn-react.json','utf-8', (err, data) => {
//    if(err){
//      console.log(err.message)
//    } else {
//        // console.log(typeof data, data)
//        res.status(200).json(JSON.parse(data))
//        console.log(typeof data)
//    }
//   })
//   }