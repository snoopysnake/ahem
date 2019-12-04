import React from 'react';
import './Item.css'

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.purchaseItem = this.purchaseItem.bind(this);
  }
  purchaseItem() {
    this.props.purchaseItem(this.props.item);
  }
  render() {
  	const path = `./assets/${ this.props.item.name.replace(' ','_').toLowerCase() }.png`;
    return (
      <div className="component-item" onClick={ this.purchaseItem }>
      	<img src={ path } alt={ this.props.item.name } />
      	<div className="item-cost">{ this.props.item.cost }</div>
        <div className="item-name">{ this.props.item.name }</div>
      </div>
    );
  }
}
