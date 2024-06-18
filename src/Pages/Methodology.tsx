import React from 'react'

function Methodology() {
    return (
        <section className='mt-5' id="Methodology">
            <h1 style={{ marginLeft: '10%' }}>Methodology</h1>
            <div className="container-fluid py-5" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 pb-4 pb-lg-0 ">
                            <img className="img-fluid rounded " style={{ height: '900px',width:'400px', marginLeft: '18%' }} src="https://github.com/SachiniRasanga/RP_Project_mobile_app/blob/master/metho.jpg?raw=true" alt="" />
                        </div>
                        
                        
                        <div className="col-lg-20">
                            <br></br>
                            <br></br>
                            <p style={{ textAlign: 'justify' }} className='me-5'>
                                The proposed system consists of 4 main components:
                                <br /><br />
                                <br></br>
                                <ol style={{ fontWeight: '600', marginLeft: '10%' }}>
                                    <li>Biometric Authentication: Facial Detection and Recognition</li><br></br>
                                    <li>Access Control and Authentication: Zero-Knowledge Proof (ZKP) for Authentication</li><br></br>
                                    <li>Secure Data Storage and Transfer using Encryption: Combination of Fully Homomorphic Encryption & AES for Data Security</li><br></br>
                                    <li>Machine Learning Algorithms for Fraud Detection and User Behavioral Analysis</li><br></br>
                                   
                                </ol>
                                The system utilizes facial recognition for passenger convenience and security.
                                Passengers don't need physical documents for check-in.
                                 Facial landmarks, unique characteristics like the distance 
                                 between eyes or nose shape, are identified using the Dlib library. 
                                 A mathematical function, Euclidean distance, calculates the similarity
                                  between the captured facial landmarks and a stored template to verify the passenger's identity.

                                <br /><br />
                                Passenger logins are secured with Zero-Knowledge Proof (ZKP) authentication.
                                This method verifies a user's identity without revealing their actual password or
                                 any other sensitive information. Passengers can securely access the departure system 
                                 through a user-friendly web interface without compromising their credentials. 
                                 Additionally, facial recognition with liveness detection replaces traditional password systems
                                  for airport personnel, ensuring only authorized individuals have access to the system.
                                
                                <br /><br />
                                The system prioritizes data protection.A secure database safeguards passenger information
                                 by keeping it encrypted at all times, even during transfers.
                                 This is achieved through a combination of encryption techniques.
                                  Homomorphic encryption allows authorized personnel to perform operations 
                                  on the encrypted data without decrypting it first, further enhancing privacy. 
                                  Additionally, the Advanced Encryption Standard (AES) strengthens the encryption process.

                                <br/><br/>
                                Machine learning plays a crucial role in strengthening security.
                                Algorithms like Random Forest and k-Nearest Neighbors (kNN) are implemented 
                                to analyze passenger behavior and identify potential threats. 
                                This can help prevent fraudulent activity and ensure the overall safety of passengers 
                                and airport operations. By proactively detecting suspicious behavior, 
                                the system contributes to a safer departure process for everyone involved.
                               
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Methodology