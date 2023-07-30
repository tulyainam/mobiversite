import { useEffect, useState } from "react";
import "./App.css";
import { dataJson } from "./data";
import { useTranslation } from "react-i18next";

const App = () => {
  const [show, setShow] = useState([{name: '', image:'', desc:''}]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    clickHandle('en')
  }, []);

  const { t, i18n } = useTranslation();

  const clickHandle = (lang) => {
    const defaultLang = 'en';
    i18n.changeLanguage(lang)
    setShow([])
    let size = [];

    const size40 = dataJson.find((e) => e.name == "IPHONE_40" && e.lang == lang);
    const size47 = dataJson.find((e) => e.name == "IPHONE_47" && e.lang == lang);
    const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
    const size58 = dataJson.find((e) => e.name == "IPHONE_58" && e.lang == lang);
    const size61 = dataJson.find((e) => e.name == "IPHONE_61" && e.lang == lang);
    const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
    const size67 = dataJson.find((e) => e.name == "IPHONE_67" && e.lang == lang);

    if(size67){
      console.log('47 giriş')
      size.push({name: size67.name, image:  size67.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size67 && lang != defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size67En = dataJson.find((e) => e.name == "IPHONE_67" && e.lang == defaultLang);
        if(size67En){
          size.push({name: size67En.name, image: size67En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size65En = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == defaultLang);
          if(size65En){
            size.push({name: size65En.name, image: size65En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
      console.log('47eng')
    }else if(!size67 && lang == defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi47???')
    }

    if(size65){
      size.push({name: size65.name, image:  size65.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size65 && lang != defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size65En = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == defaultLang);
        if(size65En){
          size.push({name: size65En.name, image: size65En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size65En = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == defaultLang);
          if(size65En){
            size.push({name: size65En.name, image: size65En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
    }else if(!size65 && lang == defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi55???')
    }

    if(size61){
      console.log('47 giriş')
      size.push({name: size61.name, image:  size61.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size61 && lang != defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size61En = dataJson.find((e) => e.name == "IPHONE_61" && e.lang == defaultLang);
        if(size61En){
          size.push({name: size61En.name, image: size61En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size65En = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == defaultLang);
          if(size65En){
            size.push({name: size65En.name, image: size65En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
      console.log('47eng')
    }else if(!size61 && lang == defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi47???')
    }

    if(size58){
      console.log('47 giriş')
      size.push({name: size58.name, image:  size58.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size58 && lang != defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size58En = dataJson.find((e) => e.name == "IPHONE_58" && e.lang == defaultLang);
        if(size58En){
          size.push({name: size58En.name, image: size58En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size65En = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == defaultLang);
          if(size65En){
            size.push({name: size65En.name, image: size65En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
      console.log('47eng')
    }else if(!size58 && lang == defaultLang){
      const size65 = dataJson.find((e) => e.name == "IPHONE_65" && e.lang == lang);
      if(size65){
        size.push({name: size65.name, image: size65.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi47???')
    }

    if(size55){
      size.push({name: size55.name, image:  size55.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size55 && lang != defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size55En = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == defaultLang);
        if(size55En){
          size.push({name: size55En.name, image: size55En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size55En = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == defaultLang);
          if(size55En){
            size.push({name: size55En.name, image: size55En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
    }else if(!size55 && lang == defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi55???')
    }

    if(size47){
      console.log('47 giriş')
      size.push({name: size47.name, image:  size47.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size47 && lang != defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'türkçe 55'});
      }else{
        const size47En = dataJson.find((e) => e.name == "IPHONE_47" && e.lang == defaultLang);
        if(size47En){
          size.push({name: size47En.name, image: size47En.image, isThere: true, isAlert: true, desc: 'ingilizce 47'});
        }else{
          const size55En = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == defaultLang);
          if(size55En){
            size.push({name: size55En.name, image: size55En.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
      console.log('47eng')
    }else if(!size47 && lang == defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi47???')
    }

    if(size40){
      size.push({name: size40.name, image: size40.image, isThere: true, isAlert: false, desc: ''});
    }else if(!size40 && lang != defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'Using 6.5 Display'});
      }else{
        const size40En = dataJson.find((e) => e.name == "IPHONE_40" && e.lang == defaultLang);
        if(size40En){
          size.push({name: size40En.name, image: size40En.image, isThere: true, isAlert: true, desc: 'ingilizce 40'});
        }else{
          const size55En = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == defaultLang);
          if(size55En){
            size.push({name: size55En.name, image: size55En.image, isThere: true, isAlert: true, desc: 'ingilizce 55 dfdfdffsd'});
          }else{
            size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
          }
        }
      }
    }else if(!size40 && lang == defaultLang){
      const size55 = dataJson.find((e) => e.name == "IPHONE_55" && e.lang == lang);
      if(size55){
        size.push({name: size55.name, image: size55.image, isThere: true, isAlert: true, desc: 'ingilizce 55'});
      }else{
        size.push({name: '', image: '', isThere: false, isAlert: true, desc: 'No screenshot'});
      }
      console.log('buraya geldi mi40???')
    }

    setShow(size);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <button onClick={() => clickHandle("en")}>English</button>
            <button onClick={() => clickHandle("tr")}>Turkish</button>
            <button onClick={() => clickHandle("gr")}>German</button>
          </div>
          <div className="col-lg-12">
           {show.length > 1 ? 
           <div>
              <div className="size-box-container">
                <div className="button" onClick={()=> setIsActive(!isActive)}>
                  <h3>iPhone 6.7 Display</h3>
                  {isActive == false ? (
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#000"><path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="#000"><path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
                  )}
                </div>
                {isActive == true ? (
                  <div className="size-box-content">
                    <img src={show[0].image} alt="" className="size-img"/>
                    <h3>{show[0].name}</h3>
                    <p>{show[0].desc}</p>
                  </div>
                ):null}
              </div>
              <div className="size-box-container">
                <h3>iPhone 6.5 Display</h3>
                <div className="size-box-content">
                  <h3>{show[1].name}</h3>
                  <p>{show[1].desc}</p>
                </div>
              </div>
              <div className="size-box-container">
                <h3>iPhone 6.1 Display</h3>
                <div className="size-box-content">
                  <h3>{show[2].name}</h3>
                  <p>{show[2].desc}</p>
                </div>
              </div>
              <div className="size-box-container">
                <h3>iPhone 5.8 Display</h3>
                <div className="size-box-content">
                  <h3>{show[3].name}</h3>
                  <p>{show[3].desc}</p>
                </div>
              </div>
              <div className="size-box-container">
                <h3>iPhone 5.5 Display</h3>
                <div className="size-box-content">
                  <h3>{show[4].name}</h3>
                  <p>{show[4].desc}</p>
                </div>
              </div>
              <div className="size-box-container">
                <h3>iPhone 4.7 Display</h3>
                <div className="size-box-content">
                  <h3>{show[5].name}</h3>
                  <p>{show[5].desc}</p>
                </div>
              </div>
              <div className="size-box-container">
                <h3>iPhone 4.0 Display</h3>
                <div className="size-box-content">
                  <h3>{show[6].name}</h3>
                  <p>{show[6].desc}</p>
                </div>
              </div>
           </div>: null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
