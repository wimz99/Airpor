import React from 'react'

function ResearchGap() {
    return (
        <section className='mt-2' id='researchgap'>
            <h1 style={{ marginLeft: '8%' }}>Research Gap</h1>
            <p style={{ marginLeft: '8%' }}>Following areas are the research gaps found in most of the recent researches.</p>
            <div className="achievements">
                <div className="work">
                    <i className="fas fa-search"></i>
                    <p className="work-heading">Inadequate Integration of Security and Efficiency:</p>
                    <p className="work-text">Many existing systems focus on either enhancing efficiency or
                         improving security, often neglecting a comprehensive integration of both.
                         Hawk combines advanced security features with streamlined processes to ensure
                          both efficiency and robust security, providing a holistic solution.</p>
</div>
                <div className="work">
                    <i className="fas fa-chart-line"></i>
                    <p className="work-heading">Lack of Real-Time Threat Detection and Response:</p>
                    <p className="work-text">Current systems often lack the capability to detect and 
                        respond to threats in real time, leaving them vulnerable to new and evolving threats.
                    Hawk employs real-time user behavior analysis and monitoring to immediately
                     identify and mitigate potential threats, enhancing overall security.</p>

                    </div>
                <div className="work">
                    <i className="fas fa-comments"></i>
                    <p className="work-heading">Poor Scalability and Adaptability:
                    </p>
                    <p className="work-text">Many existing products are not scalable or adaptable to different airport sizes and varying passenger volumes, leading to inefficiencies in dynamic environments.
                    Hawk is designed to be highly scalable and adaptable, ensuring efficient operation across airports of different sizes and passenger traffic levels.</p>
                </div>
            </div>
        </section>
    )
}

export default ResearchGap