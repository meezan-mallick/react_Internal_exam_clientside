import React, { Component } from 'react';

class AcademicDetails extends Component {
    render() {
        return (
            <div className="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                <h2>Academic Details 📔</h2>

                <div className='mt-4'>
                    <p className='h6'>BSc IT - Gujarat University</p>
                    <p>Jun-2018 – March 2021 <br />9.05 SGPA (6th - Semester)</p>

                    <p className='h6'>MSc IT - Gujarat University</p>
                    <p>July 2021 - March 2023 Current (8th - Semester)</p>

                </div>
            </div>

        );
    }
}

export default AcademicDetails