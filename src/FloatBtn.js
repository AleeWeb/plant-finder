import React from 'react';
import { Container, Link, darkColors } from 'react-floating-action-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { relative } from 'path';

function FloatBtn() {
    return (
        <Container>
          
            <Link href="#"
                tooltip="Scroll Back to the Top"
                icon="fas fa-user-plus"
                styles={{backgroundColor: darkColors.green, color: '#ffffff', position: relative, left: '60px'}}
                id="floatBtn"
                >
                    <FontAwesomeIcon icon="arrow-up" />
                </Link>
           
        </Container>
    )
}

export default FloatBtn;