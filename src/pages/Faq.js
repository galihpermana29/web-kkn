import {useEffect, useState} from 'react'
import Jumbotron from '../components/Jumbotron'
import NgadiresoApi from "../utils/Endpoint"

export default function Faq({moduleData}) {
    const {
        jmbtFaq : jmbt,
        textFaq : text
    } = moduleData;
    const [faq,setFaq] = useState([]);

    const getFaq = async () =>{
        const{data : data} = await NgadiresoApi.getFaq();
        setFaq(data);
        console.log(data);
    }
    useEffect(()=>{
        getFaq()
    },[])
    const [isOpen, setOpen] = useState(null);
    const handleClickFaq = (id) => {
		setOpen(id);
	};
  return (
    <div>
        <Jumbotron
				mode="half"
				background={jmbt}
				type="secondary"
				height="min-h-[60vh]"
				paragraph={text}
				title="FAQ"
			/>
        <div className='px-10 lg:px-96 py-16'>
            <div className="mt-5 my-10">
                {faq.map((e,i)=>(
                    <div
                        key={i}
                        className="border-b-2 w-full py-3 cursor-pointer"
                        onClick={()=>{handleClickFaq(e.id)}}
                        onBlur={()=>{handleClickFaq(null)}}>
                        <div className='flex items-center'>
                            <div className='flex text-white bg-greencus font-medium text-lg h-10 w-10 justify-center items-center mr-3'>{i+1}</div>
                            <div>
                                <h1 className="font-semibold text-lg">
                                    {e.quest}
                                </h1>
                            </div>
                        </div>
                        <p className={`${isOpen == e.id ? 'visible' : 'hidden'} ml-16 mt-3`}>
                            {e.ans}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
