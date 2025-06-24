import React from 'react'
import '../scss/garam_LP.scss'
import { Button } from 'react-bootstrap';

const LiveParking = () => {
  return (
    <div className='LiveParking'>
        <h3>실시간 주차 현황</h3>
        
        <div className="LpBtn">
            <Button className='LpBtn1' onClick={() => {}}>
                공용 주차장
            </Button>

            <Button className='LpBtn2'  onClick={() => {}}>
                여성전용 주차장
            </Button>

            <Button className='LpBtn3'  onClick={() => {}}>
                장애인전용 주차장
            </Button>
        </div>


        <div className="LpBigBox">
            <div className="Lp1"></div>

            <div className="LpSlide">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
  )
}

export default LiveParking