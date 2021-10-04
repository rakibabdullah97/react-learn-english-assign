import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';


const ServiceCardHome = (props) => {
    const { title, img, fee, duration } = (props.service)
    const history =useHistory()
 
    const goToServices =()=>{
        history.push('/services')
    }
    return (
        <div >
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Course Title: {title}</h5>
                        <p className="card-text">Fees;$ {fee}</p>
                        <p className="card-text">Duration: {duration}</p>
                        <Button onClick={goToServices} variant="danger">Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardHome;