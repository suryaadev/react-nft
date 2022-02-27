import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

const [punkListData, setPunkListdata] = useState([])
const [selectedPunk, setSelectedPunk] = useState(0)

useEffect(()=>{
  const getMyNfts = async ()=>{
    const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x0Aed68E8fB741EcdC16B2A0cb5593Da51C941f72&order_direction=asc')

    console.log(openseaData.data.assets);
    setPunkListdata(openseaData.data.assets);

  }
  return getMyNfts()
},[])

  return (
    <div className='app'>
      <Header />
      {punkListData.length > 0 &&(
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
        </>
      )}
    </div>
  );
}

export default App;
