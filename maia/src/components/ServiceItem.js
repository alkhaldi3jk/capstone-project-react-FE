import { observer } from 'mobx-react'
import React from 'react'
import serviceStore from '../stores/serviceStore'
import AddService from './AddService'


function ServiceItem({service}) {


    return (
        <div>
            <text>{service.name}</text>
            <image src= {service.image}/>
        </div>
    )
}

export default observer(ServiceItem)
