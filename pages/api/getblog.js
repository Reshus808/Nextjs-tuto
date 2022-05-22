// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/getblog?slug=how-to-learn-javascript
//
import * as fs from 'fs';

// /api/getblog?slug=how-to-learn-js // run this code
export default function handler(req, res){
    fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data)=>{
        if(err){
            res.status(500).json({error: 'no such file or blog found'})
        }
        console.log(req.query.slug)
        res.status(200).json(JSON.parse(data))
    })
}

// /api/getblog?slug=reshu //run this code in browser
// export default function handler(req, res) {
//     fs.readFile('blogdata/how-to-learn-react.json','utf-8', (err, data) => {
//         if(err){
//             console.log(err.message)
//         } else {
//             console.log(req.query)
//             res.status(200).json(JSON.parse(data))
//         }
//     })
// }