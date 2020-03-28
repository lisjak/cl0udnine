import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { LiquidDistortionText, SplitColorChannelText, FliesText } from 'react-text-fun';


function FadeInSection(props) {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef();
    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}


class Splash extends Component {
    render() {
        return (


            <div className="splash">
                <FadeInSection>
                    <LiquidDistortionText
                        text="hey, you!"
                        fontSize={120}
                        speed={0.2}
                        volatility={0.03}
                        fontFamily="Courier Prime"
                        fill="#000000"
                        width={30}
                    />
                </FadeInSection>


                <FadeInSection>
                    <p>Cloud Nine is a brand designed with the modern aesthetic-oriented person living in the year 3020. Whether you're seeking stylish cyberbiotic enhancements <span className="underlined">for your vision</span> to make Lunar life easier, or if you're seeking <span className="underlined">facial enhancements</span> to protect and adorn you while visiting Martian menageries, Cloud Nine has got you cool and covered even while the Sun swells each day! </p>
                </FadeInSection>

                <FadeInSection><div className="button"><a href="/products">SHOP ALL PRODUCTS</a></div></FadeInSection>




                <FadeInSection>
                    <div id="splashItemHeader">

                        <LiquidDistortionText
                            text="S/S 3020"
                            fontSize={120}
                            speed={0.1}
                            volatility={0.04}
                            fontFamily="Courier Prime"
                            fill="#000000"
                            width={30}
                            appendTo="splashItemHeader"
                        />

                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div id="splashItemOdd">
                        <a href="/products/1"><img src="./assets/1.jpg" /></a>

                        <div id="splashItemText">



                            <LiquidDistortionText
                                text="__NüVision Cybercontacts__"
                                fontSize={40}
                                speed={0.2}
                                volatility={0.03}
                                fontFamily="Courier Prime"
                                appendTo="splashItemText"
                                fill="#ffffff"
                                width={50}
                            />



                        </div>

                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div id="splashItemEven">

                        <a href="/products/2"><img src="./assets/2.jpg" /></a>

                        <div id="splashItemText2">

                            <LiquidDistortionText
                                text="__CV Dazzle Paint__"
                                fontSize={40}
                                speed={0.4}
                                volatility={0.10}
                                appendTo="splashItemText2"
                                fill="#000000"
                                cellWidth={30}
                                width={30}
                                fontFamily="Courier Prime"
                            />

                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div id="splashItemOdd">

                        <a href="/products/3"><img src="./assets/3.jpg" /></a>

                        <div id="splashItemText3">

                            <LiquidDistortionText
                                text="__Augmented Reality Beamers__"
                                fontSize={40}
                                speed={0.3}
                                volatility={0.03}
                                appendTo="splashItemText3"
                                fontFamily="Courier Prime"
                                fill="#ffffff"
                            />
                        </div>

                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div id="splashItemEven">

                        <a href="/products/4"><img src="./assets/4.jpg" /></a>

                        <div id="splashItemText4">

                            <LiquidDistortionText
                                text="__UV Flash Goo__"
                                fontSize={40}
                                speed={0.6}
                                volatility={0.09}
                                appendTo="splashItemText4"
                                fontFamily="Courier Prime"
                                fill="#000000"
                            />
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection>
                    <div id="splashItemOdd">
                        <a href="/products/5"><img src="./assets/5.jpg" /></a>
                        <div id="splashItemText5">
                            <LiquidDistortionText
                                text="__Kinetic Makeup__"
                                fontSize={40}
                                speed={0.4}
                                volatility={0.14}
                                appendTo="splashItemText5"
                                fontFamily="Courier Prime"
                                fill="#ffffff"
                            />

                        </div>

                    </div>
                </FadeInSection>
            </div >
        )
    }
}




export default Splash

