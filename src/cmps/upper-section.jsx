import { AppHeader } from "../cmps/app-header";
import middle from '../assets/imgs/bg-pattern-home-1.svg'
import bottem from '../assets/imgs/bg-pattern-home-2.svg'


export function UpperSection() {

    return (
        <section className="upper main-layout full">
            <AppHeader />

            <section className="upper-main">
                <div className="big">
                    Find the best <span>talent</span>
                </div>

                <div className="text">
                    <div className="line"></div>

                    Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.
                </div>
            </section>


            <img className="middle-img" src={middle} alt="" />

            <img className="buttom-img" src={bottem} alt="" />

        </section>
    )
}