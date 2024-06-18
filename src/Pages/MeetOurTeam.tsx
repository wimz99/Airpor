import React from 'react'

function MeetOurTeam() {
    const ourTeamPanl = [
        {
            name: 'Mr. Kanishka Yapa',
            position: 'Supervisor',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\kanishkay-1611897608.jpg',
            department: 'Computer Systems Engineering'
        },
        {
            name: 'Mr. Amila Senarathne',
            position: 'Co_Supervisor',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\Mr__Amila_Edit.jpg',
            department: 'Computer Systems Engineering'
        }
    ]

    const ourTeamMem = [
        {
            name: 'R.M. Thushan Jaliya',
            position: 'Group Leader',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\Thushan.jpg',
            department: 'Department of Computer Systems Engineering Sri Lanka Institute of Information TechnologyMalabe, Sri Lanka'
           
        },
        {
            name: 'Jayakodi J.A.W.N',
            position: 'Group Member',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\Wimanga.jpg',
            department: 'Department of Computer Systems Engineering Sri Lanka Institute of Information TechnologyMalabe, Sri Lanka'
        },
        {
            name: 'Shehnaz A.A.M',
            position: 'Group Member',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\Shenaz.jpeg',
            department: 'Department of Computer Systems Engineering Sri Lanka Institute of Information TechnologyMalabe, Sri Lanka'
        },
        {
            name: 'M. L. Kalutantirige',
            position: 'Group Member',
            image: 'C:\Users\shehn\OneDrive\Desktop\rp\src\images\Melisha.jpg',
            department: 'Department of Computer Systems Engineering Sri Lanka Institute of Information TechnologyMalabe, Sri Lanka'
        },
    ]

    return (
        <section className='mt-5 meetteam' id='aboutus'>
            <h1 style={{ marginLeft: '8%' }}> Presenting Team Hawk</h1>
            <div className="container mt-5">
                <div className="row">
                    {ourTeamPanl.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                                
                                    <a href="/" style={{ fontSize: '14px', color: 'green' }} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5"></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-5">
                    {ourTeamMem.map((ourTeamm) => (
                        <div className="col-xs-12 col-sm-3">
                            <div className="card d-flex flex-column h-100">
                                <a className="img-card">
                                    <img src={ourTeamm?.image} alt='' />
                                </a>
                                <div className="card-content">
                                    <h4 className="card-title mb-3"> {ourTeamm?.name}</h4>
                                    <img className='mb-2' src={`https://img.shields.io/badge/-${ourTeamm?.position}-807e7e`} />
                                    <p style={{ fontSize: '14px' }}>
                                        Sri Lanka Institute of Information Technology
                                    </p>
                                    <p style={{ fontSize: '14px' }}>
                                        <span style={{ fontWeight: '700' }}>Department</span>
                                        <br />
                                        {ourTeamm?.department}
                                    </p>
                                </div>
                                <div className="card-read-more">
                            
                                    <a href="/" style={{ fontSize: '14px', color: 'green'}} className="btn btn-link btn-block">
                                        <i className="fas fa-envelope-open-text me-1 mt-5" ></i> E-Mail
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MeetOurTeam