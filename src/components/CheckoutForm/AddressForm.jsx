import React, {useState, useEffect} from "react";
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";
import {Link} from "react-router-dom";

import {commerce} from "../../lib/commerce";
import FormInput from './CustomTextField';

const AddressForm = ({checkoutToken, next}) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');

    const methods = useForm();

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    };

    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode);

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };

    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region: stateProvince});

        setShippingOptions(options);
        setShippingOption(options[0].id);
    };

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);

    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
        // eslint-disable-next-line
    }, [shippingSubdivision]);

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom >Адресс доставки</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({
                    ...data,
                    shippingCountry,
                    shippingSubdivision,
                    shippingOption,
                }))}>
                    <Grid container spacing={3}>
                        <FormInput name="firstName" label="Имя"/>
                        <FormInput name="lastName" label="Фамилия"/>
                        <FormInput name="address1" label="Адрес"/>
                        <FormInput name="email" label="Email"/>
                        <FormInput name="city" label="Город"/>
                        <FormInput name="zip" label="Индекс"/>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Страна доставки</InputLabel>
                            <Select value={shippingCountry} fullWidth
                                    onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({
                                    id: code,
                                    label: name
                                })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Область</InputLabel>
                            <Select value={shippingSubdivision} fullWidth
                                    onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {Object.entries(shippingSubdivisions).map(([code, name]) => ({
                                    id: code,
                                    label: name
                                })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <InputLabel>Цена доставки</InputLabel>
                            <Select value={shippingOption} fullWidth
                                    onChange={(e) => setShippingOption(e.target.value)}>
                                {shippingOptions.map((sO) => ({
                                    id: sO.id,
                                    label: `${sO.description} - (${sO.price.formatted_with_symbol})`
                                })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>

                    </Grid>
                    <br/>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link} to="/cart" variant="outlined" color="secondary">Назад</Button>
                        <Button type="submit" variant="contained" color="secondary">Дальше</Button>
                    </div>
                </form>
            </FormProvider>
        </React.Fragment>
    )
}

export default AddressForm;
