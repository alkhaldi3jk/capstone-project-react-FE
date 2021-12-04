import { observer } from 'mobx-react'
import React from 'react'
import serviceStore from '../stores/serviceStore'
import CreateService from './CreateService'


function ServiceItem({service}) {


    return (
        <div>
            <text>{service.name}</text>
            <CreateService service={service}/>
        </div>
    )
}

export default observer(ServiceItem)
