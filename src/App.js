import './App.css';
import { useEffect, useState } from 'react';
import { getAllCountriesNamesWithFlag, getCountryByName } from './api/countryService';
import { Card, CardActions, CardContent, Grid, useMediaQuery } from '@mui/material';
import Swal from 'sweetalert2'
import { Header } from './components/Header';
import { CountryCard } from './components/CountryCard';
import { SearchButton } from './components/SearchButton';
import { SearchInput } from './components/SearchInput';
import { SearchAutoComplete } from './components/SearchAutoComplete';
import SuccessSnackbar from './components/SuccessSnackbar';
import { SwitchAutoComplete } from './components/SwitchAutoComplete';
function App() {
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [autoComplete, setAutoComplete] = useState(true);

  const [isOpen, setIsOpen] = useState(true);

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  
  useEffect(() => {
    setLoading(true);
    const getCountries = async () => {
      await getAllCountriesNamesWithFlag()
        .then((data) => {
          setCountries(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        })
    }
    getCountries();
  }, []);


  const handleSearch = async (e) => {
    if (searchCountry === null) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter country name!',
      })
    }
    else {
      setLoading(true);
      await getCountryByName(searchCountry)
        .then((data) => {
          setCountry(data.data);
          setIsOpen(true);
          setLoading(false);
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message ?? "Something went wrong!",
          })
          setLoading(false);
          setCountry(null);
        })
    }

  };

  return (
    <div className="App">
      {
        country ?
          <SuccessSnackbar isOpen={isOpen} setIsOpen={setIsOpen} />
          : null
      }
      <Grid container rowSpacing={3} spacing={2} >
        <Grid item xs={12} >
          <Header />
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          <Card sx={{ width: isSmallScreen ? "90%" : "50%"  , borderRadius: "20px", border: "1px solid #1976d2" }}>
            <CardContent>
              <SwitchAutoComplete setAutoComplete={setAutoComplete} />
              {autoComplete ?
                <SearchAutoComplete
                  loading={loading}
                  handleSearch={handleSearch}
                  setSearchCountry={setSearchCountry}
                  countries={countries}
                />
                :
                <SearchInput
                  loading={loading}
                  handleSearch={handleSearch}
                  setSearchCountry={setSearchCountry}
                />
              }
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <SearchButton loading={loading} onClick={handleSearch} />
            </CardActions>
          </Card>
        </Grid>
        <Grid item container xs={12} justifyContent="center">
          {
            country ?
              <CountryCard country={country} />
              : null
          }
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
