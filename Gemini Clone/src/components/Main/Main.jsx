import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

function Main() {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p><img src={assets.gemini_icon} alt="" /> Gemini Clone</p>
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Visitor</span></p>
                            <p>How can I help you today?</p>
                        </div>
                    </>
                    : <div className="result">
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? <div className="loader">
                                <hr />
                                <hr />
                                <hr />
                            </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }
                        </div>
                    </div>

                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            type="text"
                            placeholder="Ask Gemini"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && input) {
                                    onSent();
                                    setInput('');
                                }
                            }}
                        />
                        <div>
                            {input ? (
                                <img
                                    onClick={() => {
                                        onSent();
                                        setInput('');
                                    }}
                                    src={assets.send_icon}
                                    alt=""
                                />
                            ) : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Made by <a className='bottom-credit' href="https://www.linkedin.com/in/muhammad-mudassir-awan-b98147284/" target="_blank" rel="noopener noreferrer">Mudassir Awan</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
