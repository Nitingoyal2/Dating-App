import { VerifiedIcon } from '@/utils/svg/icons'
import './DashboardStyle.css'

const DashboardLayout = () => {
    return (
        <div className="dashboard-layout">
            <div className="dashboard-head">
                <div className="dashboard-header-slot">
                    {"<"}
                </div>
                <div className="dashboard-header-title">My Profile</div>
                <div className="dashboard-header-slot">
                    {">"}
                </div>
            </div>

            {/* <div className="content">
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
                <div>content</div>
            </div> */}
            {/* <div className="content">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} className="reel">
                        Reel {i + 1}
                    </div>
                ))}
            </div> */}

            <div className="content">
                <div className="avatar-content">
                    <div className='avatar'>
                        <div className="avatar-image">
                            <img src="https://picsum.photos/160/160" alt="avatar" />
                        </div>
                        <div className='percentage-content'>
                            65% completed
                        </div>
                    </div>
                    <div className="avatar-name-content">
                        <div className="avatar-name">
                            <h2>John Doe</h2>
                            <VerifiedIcon size={36} />
                        </div>
                        <h6>Get Verified</h6>
                    </div>
                </div>

                <div className="content-body">
                    {Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="body-btn">
                            <div className="body-btn-icon">
                                <img src="https://picsum.photos/42/42" alt="body-btn" width={42} height={42} />
                            </div>
                            <h5 style={{ fontWeight: '500' }}>text</h5>
                        </div>
                    ))}
                </div>

            </div>

            <div className="dashboard-footer">
                <p>A</p>
                <p>A</p>
                <p>A</p>
                <p>A</p>
                <p>A</p>
            </div>
        </div>
    )
}

export default DashboardLayout