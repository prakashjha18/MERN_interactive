import React, { useEffect, useState } from 'react';
import Airbus_Logo from "../../Logo/logo_white.svg";
import axios from 'axios';
import CategoriesScreen from './categoriesScreen';
import ChatBot from './chatBot';
import Bugreport from './bugReport';
import MainScreen from './mainScreen';
import QuestionScreen from './questionsScreen';
import AnswerScreen from './answerScreen';
import LiveChat from './liveChat';
import SearchflightScreen from './SearchFlight';
import { useHistory } from 'react-router-dom';
import Announcementbot from './Announcementbot';
import Draggable from 'react-draggable';

const Bot = (props) => {
  const { isOpen, toggle } = props;
  const [screenStack,setScreenStack] = useState(['MAIN_SCREEN']);
  const [faqData,setFaqData] = useState([]);
  const [selectedQuestion,setSelectedQuestion] = useState({});
  const [navSearchOpen,setNavSearchOpen] = useState(false);
  const [navSearchValue,setNavSearchValue] = useState('');
  const [botPos,setBotPos] = useState({ x: 0, y: 0 });
  const [isDragging,setIsDragging] = useState(false);

  let history = useHistory();

  const getFaqData = () => {
    axios.get('/api/faqs')
      .then((res) => {
        console.log(res.data);
        setFaqData(res.data);
      })
  }

  const updateStack = (screen) => {
    const tempStack = [...screenStack, screen];
    setScreenStack(tempStack);
    console.log(tempStack);
  }

  const removeLastStack = () => {
    screenStack.pop();
    setScreenStack([...screenStack]);
    setNavSearchOpen(false);
    setNavSearchValue('');
  }

  const navigateSite = (item) => {
    history.push(`/${item.id}`)
  }

  const mainScreenData = [
    {
      id: 'BOT_SCREEN',
      header: 'Bot Support',
      description: 'Hello, how can I help you?',
      icon: 'comments'
    },
    {
      id: 'LIVE_CHAT',
      header: '24x7 Chat Support',
      description: 'Ask our experts',
      icon: 'headset'
    },
    {
      id: 'SITE_NAVIGATION',
      header: 'Navigation',
      description: 'Ease your trip to our app.',
      icon: 'route'
    },
    {
      id: 'BUG_REPORT',
      header: 'Report Bug',
      description: 'Report a bug',
      icon: 'exclamation-circle'
    },
    {
      id: 'GET_ANNOUNCEMENTS',
      header: 'Announcements',
      description: 'Daily alerts',
      icon: 'bullhorn'
    },
    {
      id: 'GET_FLIGHTS',
      header: 'Search Flights',
      description: 'Search for flights',
      icon: 'plane'
    }
  ];

  const navigationData = [
    {
      id: '',
      header: 'Home',
      icon: 'home'
    },
    {
      id: 'about',
      header: 'About',
      icon: 'users'
    },
    {
      id: 'reportBug',
      header: 'Report Bug',
      icon: 'exclamation-circle'
    },
    {
      id: 'aircraft',
      header: 'Aircrafts',
      icon: 'plane'
    },
    {
      id: 'safety',
      header: 'Safety',
      icon: 'user-shield'
    },
    {
      id: 'getannouncements',
      header: 'Announcements',
      icon: 'bullhorn'
    },
  ];

  useEffect(() => {
    getFaqData();
  },[])

  let NavigationHeader = (
    <div className="relative h-8">
      <div className={`absolute w-full ${navSearchOpen?'visible opacity-100':'invisible opacity-0'} transform transition-all duration-500 `}>
        <input
          className={`bg-white h-8 focus:outline-none border border-gray-300 focus:shadow-outline border rounded-lg py-2 px-4 block w-full appearance-none leading-normal text-sm`}
          onChange={(e)=>setNavSearchValue(e.target.value)}
          placeholder="Search"
        />
      </div>
      <div className={`absolute w-full ${!navSearchOpen?'visible opacity-100':'invisible opacity-0'} transform transition-all duration-500 `}>
        Navigation
        <div className="float-right cursor-pointer" onClick={()=>setNavSearchOpen(!navSearchOpen)}>
          <i className="fas fa-search"/>
        </div>
      </div>
    </div>
  )

  const handleDrag = (e, d) => {
    const { x, y } = botPos;
    setBotPos({
        x: x + d.deltaX,
        y: y + d.deltaY,
    });
    setIsDragging(true);
  };

  const handleStop = (e) => {
    if(isDragging) setIsDragging(false);
    else toggle();
  }

  return (
    <>
      <Draggable
        defaultPosition={botPos}
        position={null}
        scale={1}
        //onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
        <div
          style={{ zIndex: 9999 }}
          className={`${!isOpen?'visible opacity-100':'invisible opacity-0'} fixed bottom-7 right-7 transform transition-all duration-500 text-3xl rounded-full bg-current p-3 text-white cursor-pointer`}
        >
          <i className="fas fa-robot"/>
        </div>
      </Draggable>
      <div className={`${isOpen?'visible opacity-100':'invisible opacity-0'} transform transition-all duration-500 fixed bottom-5 right-3 bg-gray-100 w-1/4 h-2/3 rounded-lg z-50`}>
        <div className="bg-current text-white p-2 grid grid-cols-6">
        { screenStack.length===1 && <div className="rounded-lg cursor-pointer hover:bg-opacity-70" onClick={toggle}> <i className="fas fa-times-circle"/> </div> }
          { screenStack.length>1 && <div className="rounded-lg cursor-pointer hover:bg-opacity-70" onClick={removeLastStack}> <i className="fas fa-chevron-left"/> </div> }
          <div className="col-start-2 col-end-7 ml-auto"> <img src={Airbus_Logo} alt="airbus logo" className="w-auto h-6"/> </div>
        </div>
        <div style={{ height:'27rem'}} className="overflow-y-auto scroll">
          { screenStack[screenStack.length-1] ==='MAIN_SCREEN' && <MainScreen data={mainScreenData} faqData={faqData} updateScreen={updateStack}/>}
          { screenStack[screenStack.length-1] ==='BOT_SCREEN' && <ChatBot/> }
          <LiveChat isOpen={screenStack[screenStack.length-1] ==='LIVE_CHAT'}/>
          { screenStack[screenStack.length-1] ==='GET_ANNOUNCEMENTS' && <Announcementbot/> }
          { screenStack[screenStack.length-1] ==='BUG_REPORT' && <Bugreport/> }
          { screenStack[screenStack.length-1] ==='CATEGORIES_SCREEN' && <CategoriesScreen header="Category" data={faqData} updateScreen={(item) => updateStack(`FAQ_${item._id}`)}/> }
          { screenStack[screenStack.length-1] ==='SITE_NAVIGATION' && <CategoriesScreen header={NavigationHeader} data={navigationData.filter(i=>i.header.toLowerCase().includes(navSearchValue.toLowerCase()))} updateScreen={navigateSite}/> }
          { screenStack[screenStack.length-1] ==='GET_FLIGHTS' && <SearchflightScreen /> }
          { screenStack[screenStack.length-1].split('_')[0] === 'FAQ' && <QuestionScreen
            questions={(faqData.find(i => i._id===screenStack[screenStack.length-1].split('_')[1]) || {}).questions || []} 
            header={faqData.find(i => i._id === screenStack[screenStack.length-1].split('_')[1]).header}
            updateScreen={(item)=>{ updateStack(`QUESTION_${item._id}`); setSelectedQuestion(item) }}
          />}
          { screenStack[screenStack.length-1].split('_')[0] === 'QUESTION' && <AnswerScreen
            item={selectedQuestion}
            />
          }
        </div>
      </div>
    </>
  )
}

export default Bot;