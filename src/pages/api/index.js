import axios from "axios";

export default function handler(req, res) {
    axios.get('https://api.univest.in/resources/convey/news?page=0').then(r => {
        res.status(200).json([...r.data.data])
    })
}
