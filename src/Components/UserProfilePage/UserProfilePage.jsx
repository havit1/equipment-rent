import React from "react";
import { fetchProfileInfo } from "../../Actions/userProfileAction";
import { connect } from "react-redux";
import { removeItemAction } from "../../Actions/removeItemAction";
import "./UserProfilePage.scss";
import cardGenerator from "../Common/cardGenerator";

class UserProfilePage extends cardGenerator {
  componentDidMount() {
    document.title = "Your account";

    this.props.getUserItems();
  }

  render() {
    const { userItems, handleRemoveItem } = this.props;

    return (
      <section className="user-profile">
        <ul className="user-profile__items">
          {userItems.items &&
            userItems.items.map(item => (
              <li className="user-profile__items-item" key={item.id}>
                {this.renderCard(
                  item,
                  item.category.categoryName,
                  item.category.id,
                  true,
                  "product-card"
                )}
                <button
                  className="user-profile__items-item-button"
                  onClick={() => {
                    handleRemoveItem(item);
                  }}
                >
                  Remove this product
                </button>
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    userItems: state.userInfo
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserItems: () => dispatch(fetchProfileInfo()),
    handleRemoveItem: item => dispatch(removeItemAction(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
