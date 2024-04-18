import { Component, useState } from 'react';
import { ProductionStatusFunctional } from './componentDidUpdate';
import { ProductionStatusUnmount } from './componentWillUnmount';

interface ProductionStatusProps {
  productName: string;
}

interface ProductionStatusState {
  productionStatus: string;
}

class ProductionStatus extends Component<ProductionStatusProps, ProductionStatusState> {
  constructor(props: ProductionStatusProps) {
    super(props);
    this.state = {
      productionStatus: 'Initializing production...',
    };
  }

  componentDidMount() {
    
    setTimeout(() => {
      this.setState({ productionStatus: 'Production in progress...' });
    }, 2000);
  }
  

  render() {
    return (
      <div>
        <h2>Production status {this.props.productName}:</h2>
        <p>{this.state.productionStatus}</p>
      </div>
    );
  }
}

const ComponentMount = () => {
  const [productName, setProductName] = useState("Product A");
  const [updateMessage, setUpdateMessage] = useState('');
  const [stopProduction, setStopProduction] = useState(false);
  
  const handleChangeProductName = (newProductName: string) => {
    setUpdateMessage('Updating production...');
    setProductName(newProductName);
    setStopProduction(false);
  };
  const handleStopProduction = () => {
    setStopProduction(true);
  };

  return (
    <div>
    <ProductionStatusFunctional productName={productName} />
   
    <button onClick={() => handleChangeProductName("Product B")}>Change Product</button>
   
    {updateMessage && <p>{updateMessage}</p>}
    <ProductionStatusUnmount productName={productName} stopProduction={handleStopProduction} />
      {stopProduction && <p>Stop production</p>}
  </div>
  );
};

export default ComponentMount;
