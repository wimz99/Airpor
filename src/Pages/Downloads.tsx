import React from 'react'

function Downloads() {

    const documents = [
        {
            name: 'Topic Assessment Form',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EgaxicYF-8pCm3Nchtt7g38BIQWg9FPh2bSIj-NJIw3tvg?e=0t0wBT'
            
        },
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EljGXdszIS1Nq1AuIQFyvqMBJDbnv0kQ1Vzj3cd54QurQQ?e=d6aCwl'
        },
        {
            name: 'Status Documents I',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EljGXdszIS1Nq1AuIQFyvqMBJDbnv0kQ1Vzj3cd54QurQQ?e=1nDYYw'
        },
        {
            name: 'Status Documents II',
            submittionDate: '2023-09-28',
            grouporindi: 'Individual',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EhWw8UnG4ztHqiUcO5GpL7gBxXSdvyqbNWSfz1WgZqCGsA?e=Dj093q'
            
        },
        {
            name: 'Research Paper',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EiOX4JWvCftGlPw7-PHWAW4BIfkuPr8lwZEJtj48qzhVuQ?e=IQxeg4'
        },
        {
            name: 'Final Report',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EmRU044NKENMiGfXGN8PVYMBJCJjtJNWA2AYKad1bDmObg?e=oWw3Q3'
        },
        {
            name: 'Poster',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/ElsGKjzNgRtLoc5n4DmM9E4BEhNeSlDpalLSsslX1hMRDQ?e=Mw7RT0'
        }
    ]

    const presentations = [
        {
            name: 'Project Proposal',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EtrO6p0dLp9Bh9I1RgTdIkkBstMKcNaYmK9lpLAHpDgUOA?e=pSUSLd'
        },
        {
            name: 'Progress Presentation I',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/EZhnqBJLxoJDlsdOhhpNBOgBgzq3x_9_xl2wK8M1K72Jwg?e=KAKwVL'
        },
        {
            name: 'Progress Presentation II',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:p:/s/CDAPSubmissionCloud/ESCh3PFA_dpMsHaXUXW_I5QBWskuQwEqb2QSRgxAMb5UrA?e=ssQ249'
        },
        {
            name: 'Final Presentation',
            submittionDate: '2023-09-28',
            grouporindi: 'Group',
            link: 'https://mysliit.sharepoint.com/:f:/s/CDAPSubmissionCloud/EhYjy4Q4tL5EjcKKCeyYHkQBPew__o5kMdUkqW5l8UW0Ug?e=9yYdZF'
        }
    ]

    return (
        <section className='mt-5 meetteam' style={{ backgroundColor: '#dff5eb', padding: '30px' }} id='Documents'>
            <h1 style={{ marginLeft: '8%' }} className='mb-5'>Downloads</h1>

            <h4 style={{ marginLeft: '10%' }}>Documents</h4>
            <p style={{ marginLeft: '10%' }}>Please find all documents related to this project below</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {documents.map((document) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {document?.name}</h5>
                    

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {document?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'blue', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${document?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{ marginLeft: '10%' }} id='Presentations'>Presentations</h4>
            <p style={{ marginLeft: '10%' }}>Please find all presentations related this project below</p>
            <div className=" mt-4" style={{ marginInlineStart: '14%', marginInlineEnd: '14%' }}>
                <div className="row">
                    {presentations.map((presentation) => (
                        <div className="col-xs-12 col-sm-3 mb-5">
                            <div className="card carddowndolad d-flex flex-column h-100">
                                <div className="card-content" style={{ height: '150px' }}>
                                    <h5 className=" mb-3"> <i className="fas fa-file-alt me-2 docicon"></i> {presentation?.name}</h5>
                                    
                                    

                                </div>
                                <div className="card-read-more">
                                    <p style={{ fontSize: '15px', color: 'black', textDecoration: 'none', fontWeight: '500' }} className="btn btn-link btn-block ms-2">
                                        {presentation?.grouporindi}
                                    </p>
                                    <p style={{ fontSize: '15px', color: 'blue', float: 'right', textDecoration: 'none' }} className="btn btn-link btn-block" onClick={() => { window.open(`${presentation?.link}`) }}>
                                        <i className="fas fa-download me-1"></i> Download
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Downloads