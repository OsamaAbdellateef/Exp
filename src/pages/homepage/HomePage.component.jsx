import React from 'react';
import {Link} from 'react-router-dom';
import './HomePage.style.scss'
import Directory from '../../components/directory/directory.component';
import {Container} from 'react-bootstrap';
const HomePage = ({history}) => (
    <Container>
        <div className="homepage"> 
        <Directory />
    </div>
    </Container>
    )

export default HomePage;