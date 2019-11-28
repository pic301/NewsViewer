import React,{useState} from 'react';
import axios from 'axios'

function App() {
const [data,setData] = useState(null)

  return (
    <div>
      <div>
        <button onClick={async() => {
        try{
          const res =axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=1dcc26f473c446e491f763a15e2e9db3'
   ).then(res=> {
            setData(res.data)
          })
        } catch(e){
          console.log(e)
        }

        }}>불러오기</button>
      </div>
    {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true}/>}
    </div>
  );
}

export default App;
