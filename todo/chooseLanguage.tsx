import "../index.css"
import englishFlag from "./EnglishFlag.svg"
import russianFlag from "./russianFlag.png"

interface switchedLanguages {
   switchedLanguage:boolean,
   setSwitchedLanguage:(switchedLanguage:boolean) => void
}

export let ChooseLanguage = (props:switchedLanguages) => {
   return (
       <header className="container__switchLanguages">
          <nav>
             <div className="lang-menu">
                <div className="selected-lang">
                   {props.switchedLanguage ? "Russian" : "English"}
                </div>
                <ul>
                   <li style={{cursor:"pointer"}} onClick={()=>props.setSwitchedLanguage(false)}>
                      <a style={{color:"black"}}  className="de">English</a>
                      <img style={{width:"20px"}} src={englishFlag}/>
                   </li>
                   <li style={{color:"black", cursor:"pointer"}} onClick={()=>props.setSwitchedLanguage(true)}>
                      <a  className="en">Russian</a>
                      <img style={{width:"20px"}} src={russianFlag}/>
                   </li>
                </ul>

             </div>
          </nav>
       </header>
   )
}