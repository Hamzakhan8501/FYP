import React from "react";
import ReactDOM from "react-dom";
import "./feature.css"

export default function AddProject() {
    const [form, setForm] = React.useState(
        {
            username: "",
            email: "",
            password: "",
            conpassword: "",
            check: true
        }
    )
    const [error, setError] = React.useState({})
    function handleChange(event) {
        const { name, value } = event.target
        setForm(pre => {
            return {
                ...pre,
                [name]: value
            }
        })

    }
    return (
        <div className="addproduct">
            <h1 className="addtitle">ADD NEW PRODUCT</h1>
            <form className="product">
                <div className="form-group">
                    <div className="name">
                        <label className="label">Brand Name</label>
                        <input
                            type="text"
                            placeholder="The name of your product"
                            required="required"
                            className="form-control"
                        />
                    </div>
                    <div className="name">
                        <label className="label">Product class</label>
                        <select className="form-control">
                            <option>Crops</option>
                            <option>Ferilizer</option>
                            <option>Land</option>
                            <option>Cold storage</option>
                        </select>
                    </div>

                    <div className="name">
                        <label className="label">Product price</label>
                        <input
                            type="text"
                            placeholder="The cost of your goods"
                            required="required"
                            className="form-control"
                        />
                    </div>
                    <div className="name">
                        <label className="label">Product Description</label>
                        <textarea
                            placeholder="Describe the product"
                            required="required"
                            className="form-control"></textarea>
                    </div>
                    <div className="imgg">
                        <label className="label">Product Imges</label>
                        <input type="file" required="required" />
                    </div>
                    <button type="submit" className="btnn">Submit</button>
                </div>
            </form>
        </div>

    )
}


