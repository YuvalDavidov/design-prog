import { AppHeader } from "../cmps/app-header";



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

            <div className="middle-img">
                <div className="oval-1">
                    <div className="hole"></div>
                </div>
                <div className="square"></div>
                <div className="squares">

                </div>
            </div>

            <div className="buttom-img">
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>

                <div className="square"></div>
                <div className="oval-1"></div>
                <div className="oval-2">
                    <div className="hole"></div>
                </div>
                <div className="oval-3">
                    <div className="hole"></div>
                </div>
            </div>

        </section>
    )
}