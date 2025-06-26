import React from 'react'
import '../scss/usage.scss'
import { Link } from 'react-router-dom'

const UsageDetails = () => {
    return (
        <div className='usageDetailsWrap'>
            <div className="usageTop"></div>
            <div className='minbanner'>
                <img src={process.env.PUBLIC_URL + "/img/minibanner.jpg"} alt="미니배너" />
            </div>

            <div className="usageContentWrap">
                <div className="usageSubMenu">
                    <div className="usageMenu1">
                        <h3>이용내역</h3>
                    </div>

                    <div className="usageMenu2">
                        <Link to={'/usage'} style={{ textDecoration: 'none' }}>
                            <p>이용내역 조회</p>
                        </Link>
                    </div>

                    <div className="usageMenu3">
                        <Link to={Link} as={'/usage'} style={{ textDecoration: 'none' }}>
                            <p>이용상세내역</p>
                        </Link>
                    </div>
                </div>

                <div className="contentBoxWrap">
                    <h2>이용상세내역</h2>

                    <div className="contentBox">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsageDetails