import React from 'react';
import "./directory.styles.scss";
import MenuItem from '../../components/menu-item/menu-item.component';

import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory/director.selector';
import { render } from 'react-dom';

const Directory = ({sections}) => (
    




    
        <div className='directory-menu'>
        {
            sections.map(({id, ...otherSectionProps}) => {
            return (
            <MenuItem key={id} {...otherSectionProps}/>
            )}
            )
        }
          
        </div>

    


);



const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
}) 

export default connect(mapStateToProps)(Directory);