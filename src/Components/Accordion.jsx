import  {useState} from "react";
// import  './Accordion.css'
function Accordion() {
    const [select, setSelect] = useState(null)
  const data = [
    {
      question: "What is React",
      answer:
        "Lorem ipsum kasjkbasjakn lorem3jaskb ksbjbasjbkabsbsabbsbasbbsbkjbsjbasbabskbajksbabsbaskjb",
    },
    {
        question: "What is Js",
        answer:
          "Lorem ipsum kasjkbasjakn lorem3jaskb ksbjbasjbkabsbsabbsbasbbsbkjbsjbasbabskbajksbabsbaskjb",
      },
      {
        question: "What is Material UI",
        answer:
          "Lorem ipsum kasjkbasjakn lorem3jaskb ksbjbasjbkabsbsabbsbasbbsbkjbsjbasbabskbajksbabsbaskjb",
      },
  ];
  const toggle =(i)=>{
    if(select === i){
        return setSelect(null)
    }
  setSelect(i)
  }
  return <div className="contained">
                <h2 className="heading">Accordion</h2>

    {data.map((item, i)=>{
       return (
            <div className="content">
                <h2 className="question">{item.question}</h2>
                <span
                onClick={()=> toggle(i)}
                 
                 >{select === i ? '-' : '+'}</span>
                <div className="details">
                <p className={
                    select === i ? 'answer show': 'answer'
                }>{item.answer}</p>
                </div>
            </div>
        )
    })}
  </div>;
}

export default Accordion;
