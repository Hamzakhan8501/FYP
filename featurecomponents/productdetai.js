import React from 'react';
import Colors from '../Colors';
import DetailsThumb from '../Details';
import './product.css';


class Deta extends React.Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Product Details",
                "src": [
                    "img/services/service-2.jpeg",
                    "img/services/service-3.jpeg",
                    "img/services/service-8.jpeg",
                    "img/services/service-8.jpg",
                ],
                "description": "Crop, Fertilizer, Land for Rent, Store product",
                "content": "Fertilisers are additional substances supplied to the crops to increase their productivity. These are used by the farmers daily to increase the crop yield. These fertilisers contain essential nutrients required by the plants, including nitrogen, potassium, and phosphorusF",
                "price": 23,
                "count": 1
            }
        ],
        index: 0
    };

    myRef = React.createRef();

    handleTab = index => {
        this.setState({ index: index })
        const images = this.myRef.current.children;
        for (let i = 0; i < images.length; i++) {
            images[i].className = images[i].className.replace("active", "");
        }
        images[index].className = "active";
    };

    componentDidMount() {
        const { index } = this.state;
        this.myRef.current.children[index].className = "active";
    }


    render() {
        const { products, index } = this.state;
        return (
            <div className="app">
                {
                    products.map(item => (
                        <div className="details" key={item._id}>
                            <div className="big-img">
                                <img src={item.src[index]} alt="" />
                            </div>
                            <div className="box">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span className='price'>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                                <button className="cart">Contact Seller</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        );
    };
}
export default Deta;