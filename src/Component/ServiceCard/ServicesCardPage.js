import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServicesCardPage = (props) => {
    const { title, img, fee, duration, Description, instructor, enrolled } = (props.serviceCard)
    const history = useHistory()

    const goToHome = () => {
        history.push('/home')
    }

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">Course Title: {title}</h5>
                        <p className="card-text">By:{instructor}</p>
                        <p className="card-text">Student Enrolled: {enrolled}</p>
                        <p className="card-text">Description :{Description}</p>
                        <p className="card-text">Fees:$ {fee}</p>
                        <p className="card-text">Duration: {duration}</p>
                        <Button onClick={goToHome} variant="danger">Back To Home</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCardPage;