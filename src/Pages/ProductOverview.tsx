import React from 'react'

function LiteratureSurvey() {
    return (
        <section className='mt-5' id='Literature'>
            <h1 style={{ marginLeft: '10%' }}> PRODUCT OVERVIEW </h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                        <h3>Introduction</h3>
                        <p style={{ textAlign: 'justify' }} className='me-5'>
                        
                            The surge in international travel and a burgeoning tourism industry have dramatically
                        increased the use of airports in Sri Lanka. This rapid expansion has brought with it significant challenges, 
                        including long queues, delays, and operational inefficiencies. Passengers often face lengthy queues, 
                        multiple checkpoints, and manual document verifications, which can result in missed flights and heightened 
                        stress levels. 
                        <br></br>The current system heavily relies on manual checks and physical documents, 
                        making it prone to errors and security vulnerabilities. This time-consuming, labor-intensive, 
                        and costly approach requires airport staff to manually verify each passenger's identity and travel documents,
                        leading to significant inconvenience for passengers and inefficiencies for airport operations. 
                        In light of these challenges, there is a pressing need for a modern, 
                        technology-driven solution to streamline and secure the airport departure process. 
                        <br></br>
                        <b><i>HAWK</i></b>, an innovative system, is designed to address these issues by leveraging advanced technologies 
                        to enhance both security and efficiency.</p>

                        
                        <p> The surge in global air travel has exposed the limitations of traditional airport departure processes, particularly in Sri Lanka. 
                        Studies indicate that manual document checks and physical identity verifications are time-consuming and prone to human error and fraud.
                         These inefficiencies lead to long wait times, passenger dissatisfaction, and higher operational costs for airports. 
                         Research suggests that these delays and operational inefficiencies significantly impact the overall travel experience,
                         highlighting the need for a shift towards automated solutions to improve efficiency and reliability.
                        </p>
                       
                        
                        </div>
                        <div className="col-lg-6">
                            <p style={{ textAlign: 'justify' }} className='me-5'>
           
                                
                                    <p> Automation has been identified as a key strategy to address these inefficiencies.
                                         Technologies such as facial recognition have been successfully implemented in various airports worldwide, 
                                         expediting passenger identification and reducing wait times. These technologies have demonstrated the potential 
                                         to eliminate the need for manual document checks, thereby reducing errors and enhancing operational efficiency.
                                          However, the integration of automation introduces new security threats, including cyber-attacks and identity fraud,
                                           which require careful management. The secure automated system addresses these issues by integrating advanced security features
                                            with streamlined processes, ensuring both efficiency and robust security.</p>
                                    <br></br>
                                    <p>Current systems often fail to detect and respond to threats in real time, making them vulnerable to evolving security threats.
                                     HAWK employs advanced machine learning algorithms and real-time data analytics to monitor user behavior and detect anomalies, 
                                     significantly enhancing security. Furthermore, many existing products lack scalability and adaptability to different airport sizes
                                      and passenger volumes, leading to inefficiencies in dynamic environments. HAWK is designed to be highly scalable and adaptable,
                                       ensuring efficient operation across airports of varying sizes and passenger traffic levels. By integrating facial recognition,
                                        cryptographic techniques, and machine learning, HAWK revolutionizes airport operations, ensuring a faster, safer, 
                                        and more reliable departure process for passengers.
                                    </p>
                                
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LiteratureSurvey