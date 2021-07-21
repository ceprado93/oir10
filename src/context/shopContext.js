import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();

const client = Client.buildClient({
  storefrontAccessToken: "a742cf909f6416e7300e3bc8e1f4a365",
  domain: "oirdiez.myshopify.com/",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
    test: "test",
  };

  componentDidMount() {
    this.createCheckout();
  }

  createCheckout = async () => {
    const checkout = await client.checkout.create();
    this.setState({ checkout: checkout });
  };

  addItemToCheckout = async (variantId, quantity) => {
    const lineItemToAdd = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    const checkout = await client.checkout.addLineItems(this.state.checkout.id, lineItemToAdd);
    this.setState({ checkout: checkout });
  };

  deleteItemFromCheckout = async (lineItemId) => {
    console.log(lineItemId.id);

    const checkout = await client.checkout.removeLineItems(this.state.checkout.id, lineItemId);
    this.setState({ checkout: checkout });
  };

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    console.log(products);
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };

  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
          deleteItemFromCheckout: this.deleteItemFromCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.ShopConsumer;

export { ShopConsumer, ShopContext };
export default ShopProvider;
