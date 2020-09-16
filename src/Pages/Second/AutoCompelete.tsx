import React, {useState, useEffect} from 'react';
import {getAllCountries, CountryI} from '../../services';

interface FilteredDataI {}

export const AutoCompelete = () => {
  const [display, setDisplay] = useState(true);
  const [Country, setCountry] = useState<any[]>([]);
  const [search, setSearch] = useState('');
  const [Select, setSelect] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const data: CountryI[] = await getAllCountries();
      const filteredData = data.map((value: CountryI, index) => {
        const obj = {
          'name': value.country.toLowerCase(),
          'active': value.active,
          'cases': value.cases,
          'recovered': value.recovered,
          'deaths': value.deaths,
        };
        return obj;
      });
      setCountry(filteredData);
    };
    fetchData();
  }, []);

  const setSelectValue = (event: any) => {
    setSelect(event.target.value);
  };

  return (
    <div>
      <input
        onClick={() => setDisplay(!display)}
        placeholder="type to search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <select value={Select} onChange={setSelectValue}>
        <option value="country">country</option>
        <option value="active">active</option>
        <option value="cases">cases</option>
        <option value="recovered">recovered</option>
        <option value="deaths">deaths</option>
      </select>
      {
        <div>
          {Country.filter(
            ({name}) => name.indexOf(search.toLowerCase()) > -1,
          )
            .sort((a: any, b: any) => {
              return a[Select] - b[Select];
            })
            .map((value, i) => {
              return (
                <div key={i}>
                  <span>country: {value.name}</span>{' '}
                  <span>active: {value.active}</span>{' '}
                  <span>cases: {value.cases}</span>{' '}
                  <span>recovered: {value.recovered}</span>{' '}
                  <span>deaths: {value.deaths}</span>{' '}
                </div>
              );
            })}
        </div>
      }
    </div>
  );
};
