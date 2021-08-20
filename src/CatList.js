import React, {Component} from 'react';


class CatList extends Component {


    render() {
        const catPicccs = this.props.catPics.map(pic => {
            return (
                <li><img src={pic.url} key={pic.id} alt={pic.id} /></li>
            )
        })
        
        return(
            <div>
                <ul>
                    {catPicccs}
                </ul>
            </div>
        )
    }

}


export default CatList;

