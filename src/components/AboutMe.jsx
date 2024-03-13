import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import dashedCircle from "../assets/heading-pattern.png"
import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
        >
            {/* BACKGROUND ELEMENTS START */}
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            {/* BACKGROUND ELEMENTS END */}

            <Wrapper>
                {/* HEADING START */}
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span className="flex items-center gap-2">
                        <span>A Full Stack</span>
                        <img
                            src={dashedCircle}
                            alt=""
                            className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
                        />
                    </span>
                    <span>Blockchain Developer</span>
                </Div>
                {/* HEADING END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                    Greetings! I'm Sufiyan, a Full Stack Blockchain Developer on a mission to revolutionize the digital landscape through the power of blockchain technology. With almost 2 years of hands-on experience in the field, I've had the privilege of working on diverse projects that showcase my commitment to innovation and excellence.


                </Div>
                {/* PARAGRAPH END */}

                {/* PARAGRAPH START */}
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                In the dynamic landscape of blockchain technology, my efforts have been acknowledged with industry accolades. I bring a wealth of expertise in Solidity, demonstrating proficiency in crafting secure and efficient smart contracts. My mastery extends to both front-end and back-end technologies, enabling me to create intuitive user interfaces and scalable server architectures.
                </Div>
                {/* PARAGRAPH END*/}

                {/* PARAGRAPH START */}
                <Div>
                    <h1>Achivements 🏆</h1>
                    <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                        <ul>
                            <li>- <b>Hackathon Success : </b>Secured the second position in a prestigious hackathon, demonstrating problem-solving skills and the ability to thrive in high-pressure environments.</li>
                            <li>- <b>Team Leadership : </b>Led teams with a collaborative and innovative approach, fostering a culture of creativity and excellence.</li>
                        </ul>
                    </Div>
                </Div>
                {/* PARAGRAPH END */}

                
            </Wrapper>
        </div>
    );
};

export default AboutMe;
