import {Component} from 'react' 
import TabItem from '../TabItem'

import { BsQuestionCircle } from 'react-icons/bs'
import { BsFillFileEarmarkDiffFill } from 'react-icons/bs'
import { BsAlarm } from 'react-icons/bs'
import { MdEscalatorWarning } from 'react-icons/md'
import { AiOutlineCalendar } from 'react-icons/ai'

import './index.css'

const tabsList =[
    {tabId: 'Syllabus', displayText: 'Syllabus'},
    {tabId: 'Making Schema', displayText: 'Making Schema'},
    {tabId: 'Instructions', displayText: 'Instructions'},
]

class Home extends Component {
    state = { 
        activeTabId:tabsList[0].tabId,
        isChecked:false, 
    }

    setActiveTabId = tabId => {
        this.setState({activeTabId: tabId})
      }

    handleOnChange = () => {
        this.setState({isChecked:true})
      };
    
    render() {
        const { activeTabId , isChecked} = this.state
        return (
            <div className='appContainer'>
                <div className='heading-container'>
                    <h1 className='heading'>Egnify Grand Test</h1>
                    <p className='paragraph'><AiOutlineCalendar/>27 Nov 2020 - 10:00 am to 27 Nov 2020 - 12:00pm </p>
                </div>
                <div className='Detail-view'>
                    <div className='img-direc'>
                        <div className='margin'>
                            <BsQuestionCircle className='img' />
                            <p className='para-1'>40 Q</p>
                        </div>
                        <div className='margin'>
                            <BsFillFileEarmarkDiffFill className='img'/>
                            <p className='para-1'>90 M</p>
                        </div>
                        <div>
                            <BsAlarm className='img'/>
                            <p className='para-1'>180 min</p>
                        </div>
                    </div>
                    <div>
                        <MdEscalatorWarning className='img-2'/>
                    </div>
                </div>
                <div>
                <ul className="tabs-list">
                    {tabsList.map(eachTab => (
                    <TabItem
                        key={eachTab.tabId}
                        tabDetails={eachTab}
                        setActiveTabId={this.setActiveTabId}
                        isActive={activeTabId === eachTab.tabId}
                    />
                    ))}
                </ul>
                <hr className='line'/>
                </div>
                <h1 className='sub-heading'> Instructions to the Candiatates</h1>
                <ul className='order-line'>
                    <li>1.The examination does not require using any pen,paper and calculator.</li>
                    <li>2.Every student will take the examination on a Laptop/Desktop/Smart Phone</li>
                    <li>3.On computer screen every student will be given objective type type multiple choice Question(MCQS)</li>
                    <li>4.Each student get question and answer in different selected randomly from a fixed question Databank</li>
                    <li>5.The student just need to click on the right choice s/options given  with each questiono . for multiple choice question ,each question has four options, and the candidate has to click the appropriate.</li>
                </ul>
                <hr className='line'/>
                <div className='footer'>
                    <div>
                        <input type="checkbox" id='checkboxId'  checked={isChecked}
                                 onChange={this.handleOnChange}   />
                        <label htmlFor='checkboxId'>I accept the Instructions</label>
                    </div>
                    
                    <button  className={isChecked ? ' button' : 'tab-button'}> Start Test</button>
                
                </div>
            </div>
        )
    }
  
    
}   
export default Home