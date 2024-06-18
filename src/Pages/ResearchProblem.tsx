import React from 'react'

function ResearchProblem() {
    return (
        <section className='mt-1' id="Problem">
            <h1 style={{ marginLeft: '8%' }}>Research Problem & Solution</h1>
            <br /><br />
            <div className="container-fluid " id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h5 style={{ fontWeight: '700' }} className='ms-3'>Problems addressed</h5>
                            
                            <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                            Over the years, the use of airports in Sri Lanka has surged dramatically,
                             driven by an increase in international travel and a growing tourism industry. 
                             This rapid expansion has brought significant challenges, such as long queues, delays, 
                             and operational inefficiencies. Passengers often endure lengthy queues, multiple checkpoints, 
                             and manSual document verifications, which can result in missed flights and heightened stress levels. 
                             The existing system heavily relies on manual checks and physical documents,
                              making it prone to errors and security vulnerabilities. 
                              This method is not only time-consuming but also labor-intensive and costly, 
                              requiring airport staff to manually verify each passenger's identity and travel documents. 
                              Consequently, passengers experience significant inconvenience and delays, 
                              while airport operations are burdened by inefficiencies and high labor costs, 
                              negatively impacting the overall travel experience.
                            </p>
                        </div>
                        <div className="col-lg-6 pb-4 pb-lg-0">
                            <iframe style={{ marginLeft: '5%' }} width="560" height="315" src="https://youtu.be/Oh7pOdLxv2s" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                        </div>
                    </div>
                    <h5 style={{ fontWeight: '700' }} className='ms-3 mt-3'>Proposed Solution</h5>
                    <p style={{ textAlign: 'justify' }} className='ms-3 mt-4'>
                    HAWK is a groundbreaking system designed to transform the departure process at Sri Lankan airports
                     through the use of advanced technologies. It employs facial recognition technology for swift and 
                     precise passenger identification, eliminating the need for manual document checks and drastically 
                     reducing wait times. HAWK also incorporates Zero-Knowledge Proofs and Homomorphic Encryption
                      to ensure data privacy and security, allowing for the secure verification of passenger information
                       without revealing sensitive personal data. Furthermore, HAWK leverages machine learning algorithms, 
                       such as Random Forest and kNN, to analyze passenger data, identify potential security threats, 
                       and optimize airport operations. These algorithms detect patterns and anomalies that may indicate 
                       fraudulent activity or security risks, while also predicting passenger flow and resource allocation to 
                       minimize wait times. To address the new threats introduced by automation, 
                       HAWK includes advanced security features like biometric authentication, 
                       access control and authentication, fraud detection and prevention, user behavior analysis, 
                       and secure data storage and transfer using encryption. By seamlessly integrating efficiency 
                       with robust security measures, HAWK ensures a faster, safer, and more reliable departure process, 
                       revolutionizing airport operations in Sri Lanka and significantly enhancing passenger satisfaction.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default ResearchProblem