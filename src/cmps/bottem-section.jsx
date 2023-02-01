import top from '../assets/imgs/bg-pattern-home-4-about-3.svg'
import bottom from '../assets/imgs/bg-pattern-home-5.svg'
import iconQuotes from '../assets/imgs/icon-quotes.svg'
import avatar1 from '../assets/imgs/avatar-drake.jpg'



export function BottemSection() {

    return (
        <div className="bottem-section main-layout full">

            <div className="bottem-section-main">
                <img className="top-img" src={top} alt="" />

                <header>Delivering real results for top <br /> companies. Some of our <span>success stories.</span> </header>

                <ul className="storys-ul">
                    <li>
                        <p className="story"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <img className="icon" src={iconQuotes} alt="" />
                        <h3>Drake something</h3>
                        <img src={avatar1} alt="" />
                    </li>

                    <li>
                        <img className="icon" src={iconQuotes} alt="" />
                        <p className="story"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h3>Drake something</h3>
                        <img src={avatar1} alt="" />
                    </li>

                    <li>
                        <img className="icon" src={iconQuotes} alt="" />
                        <p className="story"> “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”</p>
                        <h3>Drake something</h3>
                        <img src={avatar1} alt="" />
                    </li>

                </ul>

                <img className="bottom-img" src={bottom} alt="" />
            </div>
        </div>
    )
}