import React from "react";

import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    address: {
      streetName: "",
      postalCode: "",
      city: "",
      country: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Max Schwarzmüller",
        address: {
          street: "Teststreet 1",
          zipCode: "41351",
          country: "Germany"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };
  render() {
    let form = (
      <form>
        <input
          className={classes.input}
          type="text"
          name="name"
          placeholder="Enter your name"
        />
        <input
          className={classes.input}
          type="text"
          name="email"
          placeholder="Enter your email"
        />
        <input
          className={classes.input}
          type="text"
          name="street"
          placeholder="Enter your Street name"
        />
        <input
          className={classes.input}
          type="text"
          name="postalCode"
          placeholder="Enter your zip code"
        />
        <input
          className={classes.input}
          type="text"
          name="city"
          placeholder="Enter your City"
        />
        <input
          className={classes.input}
          type="text"
          name="country"
          placeholder="Enter your Country"
        />
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h3>Enter your contact data:</h3>
        {form}
      </div>
    );
  }
}

export default ContactData;
