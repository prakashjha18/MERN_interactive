import React,{useState, useEffect} from 'react';
import axios from 'axios'

const Announcementbot = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    const response = axios.get('/api/products/announcement');
	response.then(res=>setData(res.data))
  },[])

  return (
		<div style={{ height: "420px" }}  className="h-full bg-gray flex flex-col wrap overflow-y-auto scroll">
			<div className=" flex  flex-wrap w-100 z-10 my-4  m-auto">
				{data.map(({ name, description }) => (
					<div className="max-w-sm rounded my-4 w-10/12 mx-auto bg-white  overflow-hidden shadow-lg">
						<div className="px-6 py-4">
							<div className="font-bold text-xl text-center mb-2">{name}</div>
							<p className="text-gray-700 text-justify text-base">{description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
  );
}

export default Announcementbot;