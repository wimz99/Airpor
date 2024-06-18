import React from 'react'

function TimeLines() {

    const timelines = [
        {
            name: 'Proposal Presentation',
            progress: '100%',
            description: 'A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.'
        },
        {
            name: 'Proposal Document',
            progress: '100%',
            description: 'A Project Proposal document is submitted to the supervisor for the approval of the project.'
        },
        {
            name: 'Progress Presentation I',
            progress: '100%',
            description: 'Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.'
        },
        {
            name: 'Research Paper',
            progress: '100%',
            description: 'Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge'
        },
        {
            name: 'Progress Presentation II',
            progress: '100%',
            description: 'Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.'
        },
        {
            name: 'Website Assessment',
            progress: '57%',
            description: 'The Website helps to promote our research project and reveals all details related to the project.'
        },
        {
            name: 'Logbook',
            progress: '60%',
            description: 'Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.'
        },
        {
            name: 'Final Report',
            progress: '40%',
            description: 'Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.'
        },
        {
            name: 'Final Presentation & Viva',
            progress: '100%',
            description: 'Viva is held individually to assess each members contribution to the project.'
        }
    ]


    return (
        <section className='mt-5 timelinecss' id='milestones'>
            <h1 style={{ marginLeft: '8%' }}>Timeline in Brief</h1>

            <div className="container py-5 ">

                <div className="row">
                    <div className="col-lg-7 mx-auto">
                        <ul className="timeline">

                            {timelines.map((timeline, index) => (
                                <li className="timeline-item rounded ml-3 p-4 shadow">
                                    <div className="timeline-arrow mt-1"></div>
                                    
                                    <h4 className=" text-gray">{timeline?.name}</h4>
                                    <p className="text-small mt-2 font-weight-light">
                                        {timeline?.description}
                                    </p>
                                    <div className="progress mt-3 w-75" >
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${timeline?.progress}` }}>
                                            {timeline?.progress}
                                        </div>
                                    </div>
                                </li>
                            ))}

                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default TimeLines