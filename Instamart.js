import {useState} from "react";

const Section =({title, description, isvisible, setIsVisible}) =>{
    
    return(
        <div className="border border-black p-2 m-2">
            <h3 className="font-bold text-xl">{title}</h3>
            {isvisible ?(
                <button 
                onClick={() => setIsVisible(false)}
                 className="cursor-pointer underline"> Hide</button>
            ):(
                <button 
            onClick={() => setIsVisible(true)}
             className="cursor-pointer underline"> Show </button>

            )}
            {isvisible && <p>{description}</p>}
        </div>
    );
};

const  Instamart =() => {
    const [visibleSection, setVisibleSection]= useState("Team");
       
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
           <Section 
           title ={"About Instamart"}
           description={"This is about section of Instamart"}
           isvisible={visibleSection === "about"}
           setIsVisible={()=>setVisibleSection(
            "about"
           )}
           />
           <Section 
           title ={"Team Instamart"}
           description={"This is team contains 50 members...!"}
           isvisible={visibleSection === "Team"}
           setIsVisible={()=>setVisibleSection("Team")}
           />
            <Section 
           title ={"careers"}
           description={"careers!"}
           isvisible={visibleSection === "careers"}
           setIsVisible={()=>setVisibleSection("careers")}
           />
        </div>
    );
};
 export default Instamart;
