import React from 'react';
import "./directory.styles.scss";
import MenuItem from '../../components/menu-item/menu-item.component';
import SECTIONS_DATA from './sections.data';
import { render } from 'react-dom';

class Directory extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

            section: SECTIONS_DATA
        }


    }


render() {

    return (
        <div className='directory-menu'>
        {
            this.state.section.map(({id, ...otherSectionProps}) => {
            return (
            <MenuItem key={id} {...otherSectionProps}/>
            )}
            )
        }
          
        </div>

    )
}

}

export default Directory;