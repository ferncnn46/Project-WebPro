import { Card, Col, Divider, Row } from 'antd';
import React, { useState, useEffect, CSSProperties } from 'react'
import { useSelector } from "react-redux";
import { getAllPlant } from '../function/plant';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const { Meta } = Card;
const style = { background: '#0092ff', padding: '8px 0' };


const CardPlant = () => {

    const { user } = useSelector((state) => ({ ...state }));
    const [data, setData] = useState([]);

    console.log('data', data)
    useEffect(() => {
        //code
        loadData(user.token);
    }, []);

    const loadData = (authtoken) => {
        //code
        getAllPlant(authtoken)
            .then((res) => {
                //code
                setData(res.data);
            })
            .catch((err) => {
                //err
                console.log(err.respond);
            });
    };

    return (
        <div >
            <h1> All Plants </h1>
            <Row gutter={[16, 16]}>
                {data.map((item, index) => (
                    <Col key={index} xs={24} sm={12} md={2} lg={6}>
                        <Card
                            hoverable
                            style={{ width: 250 }}
                            cover={<img alt="example" src={item.image} />}
                        >
                            <Meta title={item.name} description={item.category} />
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default CardPlant;