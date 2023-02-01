// bg-pattern-home-3
import middle from '../assets/imgs/bg-pattern-home-3.svg'
import iconCog from '../assets/imgs/icon-cog.svg'
import iconChart from '../assets/imgs/icon-chart.svg'
import iconPerson from '../assets/imgs/icon-person.svg'

export function MiddleSection() {

    return (
        <div className="middle-section main-layout full">

            <div className="middle-section-main">
                <article className="text">
                    <div className="top-line"></div>
                    Build & manage distributed teams like no one else.
                </article>

                <ul className="info">
                    <li>
                        <img src={iconPerson} alt="" />
                        <div className="header">Experienced Individuals</div>
                        <p>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
                    </li>
                    <li>
                        <img src={iconCog} alt="" />
                        <div className="header">Easy to Implement</div>
                        <p>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
                    </li>
                    <li>
                        <img src={iconChart} alt="" />
                        <div className="header">Enhanced Productivity</div>
                        <p>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
                    </li>
                </ul>
            </div>

            <img className='middle-img' src={middle} alt="" />

        </div>
    )
}