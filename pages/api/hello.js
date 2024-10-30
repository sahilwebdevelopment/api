// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from 'fs'


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    const hi = await fs.readFile('hi.json', 'UTF-8');
    const ob = JSON.parse(hi)
    ob.push(data)
    const ids = JSON.stringify(ob)
    await fs.writeFile("hi.json", ids);
    return res.json(data);
}else{
  const hi = await fs.readFile('hi.json', 'UTF-8');
  const ob = JSON.parse(hi)
  res.status(200).json(ob);
}
}
