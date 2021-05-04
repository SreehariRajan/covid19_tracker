import React, { useContext } from 'react';
import { StateContext } from '../StateProvider';
import useDatafetch from '../useDatafetch';
function CountryContainer(){
    const {country,loading} = useDatafetch();
    const [input] = useContext(StateContext);
    const filtering = country.filter(item => {
        return input !=="" ? item.country.toLowerCase().includes(input.toLowerCase()):item;
    })
    return(
        <div className="d-flex flex-wrap m-7 tryyy">
            
            {!loading?(filtering.map((countryy) =>{
                        return (
                        <div key={countryy.country} className="try p-2 text-center">
                            <div className="w-100 p-3 text-center try trystyle">
                            <img className="w-75 tryy" src={countryy.countryInfo.flag} alt={countryy.country}/>
                            <h4 className="m-1">{countryy.country}</h4>
                            <hr />
                            <h6 className="m-2">Cases: {countryy.cases}</h6>
                            <h6 className="m-2">Recoverd: {countryy.recovered}</h6>
                            <h6 className="m-2">Deaths: {countryy.deaths}</h6>
                            </div>
                        </div>
                   )}
                )
            ):(<div className="spinner-border spinnerss" role="status">
            <span className="sr-only">Loading...</span>
          </div>)} 
        </div>
    )
}
export default CountryContainer;