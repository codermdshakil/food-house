import React from 'react';
import './QuestionAndAns.css';
import questionImg from '../../images/questionans.gif';




const QuestionAndAns = () => {
    return (
        <div className='mt-5 pt-5'>
            <div className="container">
                <h2 className='text-center py-2 '> <span style={{color:'red', fontWeight:'bold'}}>Q</span>uestions and <span style={{color:'#82cd00', fontWeight:'bold'}}>A</span>nswers</h2>
                <div className="row">
                    
                    <div className="col-lg-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed temporibus voluptatibus doloribus? Ut vel minima at velit aliquid maiores, quidem eveniet soluta. Officiis sunt amet aspernatur, accusamus maiores sint rem.</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="question-img-frame">
                            <img src={questionImg}  className="img-fluid w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionAndAns;