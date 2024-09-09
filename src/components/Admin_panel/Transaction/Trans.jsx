import React from 'react'
import Table from '../common/Table'

const Trans = () => {
    const Heading = [
        "no", "Date", "Transaction ID", "Name ", "AIDEOA ID", "VALID UPTO", "PRICE", "ACTION"
    ]
    const data = [{
        no: 1,
        Date: "25-05-2040",
        trans: 3838,
        name: "John Doe",
        AIDEOA_ID: 20202,
        valid: 20202,
        price: 202,
    },
    {
        no: 1,
        Date: "25-05-2040",
        trans: 3838,
        name: "John Doe",
        AIDEOA_ID: 20202,
        valid: 20202,
        price: 202,
    }
    ]
    return (
        <Table />
    )
}

export default Trans