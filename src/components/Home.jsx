import { useState, useEffect } from 'react';
import BeerCard from './BeerCard'
import { ContainerStyled } from '../StyledComponents/ContainerStyled';
import Search from "../components/Search";
import BASE_URL from '../BASE_URL';
import { Pagination } from "antd"
import PhSlider from '../components/PhSlider'
import SrmSlider from '../components/SrmSlider'
import VolumeSlider from '../components/VolumeSlider'


function Home() {

  const [data, setData] = useState([]);

  const [search, setSearch] = useState("");
  
  const [filteredData, setFilteredData] = useState([])
  
  const [baseUrl, setBaseUrl] = useState(`${BASE_URL}`)

  const [resetButton, setResetButton] = useState(false)

  const [srm, setSrm] = useState(0)
  const [srmChecked, setSrmChecked] = useState(false)

  const [ph, setPh] = useState([0, 2])
  const [phChecked, setPhChecked] = useState(false)

  const [current, setCurrent] = useState(1);
  const [minPage, setMinPage] = useState();
  const [maxPage, setMaxPage] = useState();
  const [pageSize, setPageSize] = useState(6);
  
  //FETCH
  useEffect(() => {
    fetch(BASE_URL)
        .then(response => response.json())
        .then(json => {
            setData(json)
        })
  }, [BASE_URL])

  //FILTERED
  useEffect(() => {
    setFilteredData(data.filter(searchFilter).filter(srmFilter).filter(phFilter))
    setMinPage(0)
    setMaxPage(pageSize)
    setCurrent(1)
    }, [srm, ph, srmChecked, phChecked, search, baseUrl, data])
  

  function searchFilter(item) {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
        return true
    }
    return false
  }

  function phFilter(item) {
    if (phChecked) {
        if (item.ph >= ph[0] && item.ph <= ph[1]) {
            return true
        }
        return false
    }
    return true
}

function srmFilter(item) {
    if (srmChecked) {
        if (item.srm >= srm) {
            return true
        }
        return false
    }
    return true
}
      
  //PAGINATION
    function handlePageChange(page) {
      setCurrent(page)
      setMinPage((page - 1) * pageSize)
      setMaxPage(page * pageSize)
  };

  function handleReset() {
    setSearch('')
    setPhChecked(false)
    setSrmChecked(false)
    setResetButton(true)
}
    
    return <>

  
    <div>
        <div>
           <Search search={search} setSearch={setSearch}/>
          </div>
      <div>
       <button type="reset" onClick={handleReset}>Reset</button>
     </div>
    </div>

    <VolumeSlider setBaseUrl={setBaseUrl} baseUrl={baseUrl} resetButton={resetButton} setResetButton={setResetButton} />



    <PhSlider ph={ph} setPh={setPh} phChecked={phChecked} setPhChecked={setPhChecked} /> 

    <SrmSlider srm={srm} setSrm={setSrm} srmChecked={srmChecked} setSrmChecked={setSrmChecked} />

    



    <ContainerStyled>
        <div>
          {filteredData.map((beer, index) => index >= minPage && index < maxPage &&
                 <BeerCard
                 key={beer.id}
                 image_url={beer.image_url}
                 name={beer.name}
                 id={beer.id}
                 first_brewed={beer.first_brewed}
                 >
                 </BeerCard>
          )}
        </div>      
        </ContainerStyled>
        <ContainerStyled>
        <div>
            {
                filteredData.length > 0 ?
                    <div>
                        <Pagination current={current} onChange={handlePageChange} total={filteredData.length} pageSize={pageSize} showSizeChanger={false} />
                    </div>
                    :
                    <h3>Beer Not Found</h3>
            }
         </div>
         </ContainerStyled> 
       
      </>
  };
  
  export default Home;