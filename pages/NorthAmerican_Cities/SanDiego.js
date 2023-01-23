import React from 'react';
import { useEffect, useState } from 'react';
import {Button, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import Router from 'next/router';
import HomeIcon from '@mui/icons-material/Home';

export default function SanDiego() {

const [status, setStatus] = useState("idle");
const [ipaddressdata , setIpaddressData] = useState([{
    data: "",
    iata: ""
}]);

const [status2, setStatus2] = useState("idle");
const [flightData , setFlightData] = useState([{
    data: "",
    value: "",
}]);

useEffect(() => {
    setStatus("pending");
    setStatus2("pending");

  
    const axiosPosts = async () => {
        
        try{
        
        const response = await axios("https://www.travelpayouts.com/whereami?ip=")
        setIpaddressData(response.data)
        setStatus("resolved")
        

        const destination = "SAN" 
        
        /* Conditional IF Statement included for. Flight origin and destination logically be the same. If so, API is not fetched. */
        if(response.data.iata !== destination){
        const response2 = await axios(`${'https://cors-anywhere.herokuapp.com/'}https://api.travelpayouts.com/v2/prices/latest?currency=usd&period_type=year&page=1&duration=hour&limit=5&origin=${response.data.iata}&destination=${destination}&show_to_affiliates=true&sorting=price&token=1fb2829993009e6a7db3163d4d00a1ff`)
        setFlightData(response2.data)
        setStatus2("resolved")
        }
        
        
      
        
        
        
    }catch(error){
        
        

        console.log(error);
        setStatus("rejected");

        console.log(error);
        setStatus2("rejected");
        }
        };
        axiosPosts();
       
        
    }, []);
    
   
    
const apiKey = '6ca5492956c0cad241e72a5b6126ed5f'
const [weatherData, setWeatherData] = useState([{}])
const [city, setCity] = useState("")

useEffect(() => {
fetch('https://api.openweathermap.org/data/2.5/weather?q=san diego&units=imperial&APPID=6ca5492956c0cad241e72a5b6126ed5f').then(response => response.json()).then(data => setWeatherData(data));
}, [])

const YELPapiKey =
"34_H2aphTr2KCBnKHh-VkawG67HFJBMMLBjR51PVjwQYDNIPDpc_vIICnjYMmhU37ZnzBz04Ua82FYi-Y180FFBZOatgcijVBtij-UpZw4j-eZ778tPmMP7kh6fNYnYx";
const [yelpData, setYelpData] = useState([{}])
const [location, setLoction] = useState("")

useEffect(() => {
axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
    headers: {
        Authorization: `Bearer ${YELPapiKey}`
    },
    params: {
        limit: 6,
        location: "San Diego",
        sort_by: "best_match"
      }
  }).then(data => setYelpData(data))
}, [])

function timeConvert(n) {
    var num = n;
    var hours = (num / 60);
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " hr " + rminutes + " min";
    }

    var selecteddate;
    var dateformatted;
        
    const SelectedCheckInDate = () => {
        const [startDate, setStartDate] = useState(new Date());
        return (
            <DatePicker 
            selected={startDate} 
            onChange={(date=Date) => {
                setStartDate(date);
                selecteddate = date;
                dateformatted = String(selecteddate.getFullYear()) + "-" + String((selecteddate.getMonth() + 1)).padStart(2, '0') + "-" + String(selecteddate.getDate()).padStart(2, '0')
            }
            } 
            dateFormat="yyyy-MM-dd" />
        );
    }

    var selecteddate2;
    var dateformatted2;

    const SelectedCheckOutDate = () => {
        const [endDate, setEndDate] = useState(new Date());
        return (
            <DatePicker 
            selected={endDate} 
            onChange={(date=Date) => {
                setEndDate(date);
                selecteddate2 = date;
                dateformatted2 = String(selecteddate2.getFullYear()) + "-" + String((selecteddate2.getMonth() + 1)).padStart(2, '0') + "-" + String(selecteddate2.getDate()).padStart(2, '0')
            }
            } 
            dateFormat="yyyy-MM-dd" />
        );
    }
  
    const [status3, setStatus3] = useState("idle");
    const [hoteldata , setHotelData] = useState([{
        location: "",
        geo: "",
        hotelName: ""
    }]);
    
    function clickHandler(){
        setStatus3("pending"); 
        const axiosPosts = async () => {
            try{
            const response3 = await axios(`${'https://cors-anywhere.herokuapp.com/'}https://engine.hotellook.com/api/v2/cache.json?location=SAN&checkIn=${dateformatted}&checkOut=${dateformatted2}&currency=usd&limit=20&sortBy=priceFrom&token=1fb2829993009e6a7db3163d4d00a1ff`)
            setHotelData(response3.data)
            setStatus3("resolved")
        }catch(error){
            setStatus3("rejected");
            }
            };
            axiosPosts();
    }

    
        
return (
<Grid container spacing={3} style= {{backgroundColor: "#FDF5DF"}} >

    {/* Explore Widget  */}
    <Grid item xs={8}  >
        <Card  style={{backgroundColor: "#F3CBBD"}}  sx={{ display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }} >
            <CardContent sx={{ width: '100%' }}>
                <Typography  gutterBottom variant="h7" component="div" align="center">
                <br></br>
                <br></br>
                <h1 style={{color: "black" , fontSize: 46, fontFamily: "Fantasy"}} >Explore San Diego!</h1> 
                <div><a target="_blank" style={{fontFamily: "Optima", color: "black", fontSize: 25, textDecoration: "none"}}  href="https://www.midway.org/">USS Midway Museum</a></div>
                <br></br>
                <div><a target="_blank" style={{fontFamily: "Optima", color: "black", fontSize: 25, textDecoration: "none"}}  href="https://lajollamom.com/la-jolla-cove/">La Jolla Cove</a></div>
                <br></br>
                <div><a target="_blank" style={{fontFamily: "Optima", color: "black", fontSize: 25, textDecoration: "none"}}  href= "https://sandiegozoowildlifealliance.org/">San Diego Zoo</a></div> 
                <br></br>
                <br></br>
                </Typography>
            </CardContent>
        </Card>
    </Grid>


    {/* Weather Widget  */}
    <Grid item xs={4}>
        <Card  style={{backgroundColor: "#90CDC3"}}  sx={{ display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }} >
            <CardContent sx={{ width: '100%' }}>
                <Typography gutterBottom variant="h7" component="div" align="center">
                <div>
                    {weatherData.main ?  <h1 style={{color: "#FDF5DF", fontSize: 80, height: 80}}>{Math.round(weatherData.main.temp)}° </h1> : null }
                    {weatherData.weather ? <p style={{fontFamily: "Optima", color: "Black", fontSize: 25}}>{weatherData.weather[0].main} </p> : null }
                    {weatherData.main ? <p style={{fontFamily: "Optima", color: "Black", fontSize: 25, height: 15}}>Real Feel: {Math.round(weatherData.main.feels_like)}° F </p> : null }
                    {weatherData.main ? <p style={{fontFamily: "Optima", color: "Black", fontSize: 25, height: 24}}>Humidity: {weatherData.main.humidity}% </p> : null }
                </div> 
                </Typography>
            </CardContent>
        </Card>
    </Grid>



    {/* Restaurant Widget */} 
    <Grid item xs={8}>
        <Card style={{backgroundColor: "#AF8C72"}}  sx={{ align:"center",display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }} >
            <CardContent sx={{ width: '100%' }}>
                <Typography gutterBottom variant="h7" component="div" align="center">
                    <div>
                    <h1 style={{color: "#FDF5DF" , fontSize: 46, fontFamily: "Fantasy"}} align="center" >Top Rated Restaurants</h1> 
                    <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ display: 'flex', border: 2, borderColor: 'white', borderRadius: '0px' }} >
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[0].name}</p> : null }
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[1].name}</p> : null }
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[2].name}</p> : null }
                            </Grid>
                            <Grid item xs={6}>
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[3].name}</p> : null }
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[4].name}</p> : null }
                            {yelpData.data ? <p style={{color: "black", fontFamily: "cursive", fontSize: 25, textDecoration: "none"}}>{yelpData.data.businesses[5].name}</p> : null }
                            </Grid>
                        </Grid>
                    </Card>
                    <br></br>
                    
                    <Grid container spacing={0} display="flex" justifyContent="center" alignItems="justify-end">
                        <Button rel="noopener" href= "https://www.yelp.com/search?find_desc=Restaurants&find_loc=SanDiego&sortby=recommended" color='success' target="_blank" variant="contained">Yelp</Button>
                    </Grid>
                    </div> 
                </Typography>
            </CardContent>
        </Card>
    </Grid>


    {/* Suggested Travel Months Widget */}
    <Grid item xs={4}>
        <Card style={{backgroundColor: "white"}}  sx={{ display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }}>
            <CardContent sx={{ width: '100%' }}>
                <Typography  gutterBottom variant="overline" component="div" align="center">
                <div>
                <img src="/BestMonthsToTravel_SanDiego.png" width="100%" height="100%"/>
                </div>
                <br></br>
                </Typography>
            </CardContent>
        </Card>
    </Grid>


    {/* Hotels Widget */}
    <Grid item xs={6}>
        <Card style={{backgroundColor: "#8DA47E"}}  sx={{fontFamily: "Optima",  display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }} >
            <CardContent sx={{ width: '100%' }}>
                <Typography gutterBottom variant="h7" component="div">
                <h1 style={{color: "#FDF5DF" , fontSize: 40, fontWeight: 'bold', fontFamily: "Fantasy"}} align="center" >Hotels</h1> 
                
                    <Grid>
                        <CardContent sx={{ display: 'flex' }}>
                            <Grid item xs={6}>
                            <h1 align= "left" style={{fontFamily: "Fantasy", color:'#FDF5DF'}}>Check - In</h1>
                            <SelectedCheckInDate popperPlacement="bottom-start" />
                            </Grid>
                            
                            <Grid item xs={6} align="right">
                            <h1 align= "right" style={{fontFamily: "Fantasy", color:'#FDF5DF'}}>Check - Out</h1>
                            <SelectedCheckOutDate popperPlacement="bottom-end"/>
                            </Grid>
                        </CardContent>
                        
                        <Grid container sx={{ p: 2 }} spacing={0} display="flex" justifyContent="center" alignItems="justify-end">
                            <Button onClick={() => {clickHandler() }} color='success' rel="noopener" target="_blank" variant="contained">Search</Button>
                        </Grid>
                        <br></br>
                    </Grid>
                    
                    <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                        <Grid container spacing={1}></Grid>
                            <Grid item xs={12}>
                            {hoteldata[1] ? <p style={{textAlign:"center", color: "black", fontSize: 21, textDecoration: "none"}}> <b> {hoteldata[0].hotelName}</b> </p>  : null }
                            </Grid>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {hoteldata[1] ? <p style={{textAlign:"left",marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>From:</b> ${Math.round(hoteldata[0].priceFrom)} USD </p>  : null }
                            </Grid>
                            <Grid item xs={6}>
                            {hoteldata[1] ? <p style={{textAlign:"right",marginRight: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b></b> {hoteldata[0].stars} Star Rating</p>  : null }
                            </Grid>
                        </Grid>
                    </Card>

                    <Grid container spacing={1}></Grid>
                        <Grid item xs={12}>
                        {hoteldata[1] ? <p style={{textAlign:"center", color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b> {hoteldata[1].hotelName}</b> </p>  : null }
                        </Grid>
                        <Grid container spacing={1}>
                        <Grid item xs={6}>
                        {hoteldata[1] ? <p style={{textAlign:"left",marginLeft: 15, color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b>From:</b> ${Math.round(hoteldata[1].priceFrom)} USD </p>  : null }
                        </Grid>
                        <Grid item xs={6}>
                        {hoteldata[1] ? <p style={{textAlign:"right",marginRight: 15, color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b></b> {hoteldata[1].stars} Star Rating</p>  : null }
                        </Grid>
                    </Grid>
                
                    <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                        <Grid container spacing={1}></Grid>
                            <Grid item xs={12}>
                            {hoteldata[2] ? <p style={{textAlign:"center", color: "black", fontSize: 21, textDecoration: "none"}}> <b> {hoteldata[2].hotelName}</b> </p>  : null }
                            </Grid>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {hoteldata[2] ? <p style={{textAlign:"left",marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>From:</b> ${Math.round(hoteldata[2].priceFrom)} USD </p>  : null }
                            </Grid>
                            <Grid item xs={6}>
                            {hoteldata[2] ? <p style={{textAlign:"right",marginRight: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b></b> {hoteldata[2].stars} Star Rating</p>  : null }
                            </Grid>
                        </Grid>
                    </Card>

                    <Grid container spacing={1}></Grid>
                        <Grid item xs={12}>
                        {hoteldata[3] ? <p style={{textAlign:"center", color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b> {hoteldata[3].hotelName}</b> </p>  : null }
                        </Grid>
                        <Grid container spacing={1}>
                        <Grid item xs={6}>
                        {hoteldata[3] ? <p style={{textAlign:"left",marginLeft: 15, color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b>From:</b> ${Math.round(hoteldata[3].priceFrom)} USD </p>  : null }
                        </Grid>
                        <Grid item xs={6}>
                        {hoteldata[3] ? <p style={{textAlign:"right",marginRight: 15, color: "#FDF5DF", fontSize: 21, textDecoration: "none"}}> <b></b> {hoteldata[3].stars} Star Rating</p>  : null }
                        </Grid>
                    </Grid>
                    
                    <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                        <Grid container spacing={1}></Grid>
                            <Grid item xs={12}>
                            {hoteldata[4] ? <p style={{textAlign:"center", color: "black", fontSize: 21, textDecoration: "none"}}> <b> {hoteldata[4].hotelName}</b> </p>  : null }
                            </Grid>
                            <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {hoteldata[4] ? <p style={{textAlign:"left",marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>From:</b> ${Math.round(hoteldata[4].priceFrom)} USD </p>  : null }
                            </Grid>
                            <Grid item xs={6}>
                            {hoteldata[4] ? <p style={{textAlign:"right",marginRight: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b></b> {hoteldata[4].stars} Star Rating</p>  : null }
                            </Grid>
                        </Grid>
                    </Card>
                </Typography>
            </CardContent>
        </Card>
    </Grid>

 
    {/* Flight Widget */}
    <Grid item xs={6}>
        <Card style={{backgroundColor: "#F3CBBD"}}  sx={{fontFamily: "Optima",  display: 'flex', border: 4, borderColor: 'black', borderRadius: '16px' }} >
            <CardContent sx={{ width: '100%' }}>
                <Typography gutterBottom variant="h7" component="div">
                    <h1 style={{color: "black" , fontSize: 40, fontWeight: 'bold', fontFamily: "Fantasy"}} align="center" >Cheapest Flights</h1> 
                    

                
                        <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ display: 'flex', border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Origin Airport:</b> {flightData.data[0]?.origin} </p>  : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Price:</b> ${flightData.data[0]?.value} USD</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Depart Date:</b> {flightData.data[0]?.depart_date}</p> : null }
                                </Grid>
                                <Grid item xs={6}>
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Destination Airport:</b> {flightData.data[0]?.destination}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Duration:</b> {timeConvert(flightData.data[0]?.duration)}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Return Date:</b> {flightData.data[0]?.return_date}</p> : null }
                            
                    
                
                                </Grid>
                            </Grid>
                        </Card>
                        
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Origin Airport:</b>  {flightData.data[1]?.origin} </p>  : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Price:</b>${flightData.data[1]?.value} USD</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Depart Date:</b>  {flightData.data[1]?.depart_date}</p> : null }
                            </Grid>
                            <Grid item xs={6}>
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Destination Airport:</b>  {flightData.data[1]?.destination}</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Duration:</b> {timeConvert(flightData.data[1]?.duration)}</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Return Date:</b> {flightData.data[1]?.return_date}</p> : null }
                            </Grid>
                        </Grid>
                    
                        <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ display: 'flex', border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Origin Airport:</b>  {flightData.data[2]?.origin} </p>  : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Price:</b> ${flightData.data[2]?.value} USD</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Depart Date:</b>  {flightData.data[2]?.depart_date}</p> : null }
                                </Grid>
                                <Grid item xs={6}>
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Destination Airport:</b>  {flightData.data[2]?.destination}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Duration:</b> {timeConvert(flightData.data[2]?.duration)}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Return Date:</b> {flightData.data[2]?.return_date}</p> : null }
                                </Grid>
                            </Grid>
                        </Card>

                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Origin Airport:</b>  {flightData.data[3]?.origin} </p>  : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Price:</b> ${flightData.data[3]?.value} USD</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Depart Date:</b>  {flightData.data[3]?.depart_date}</p> : null }
                            </Grid>
                            <Grid item xs={6}>
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Destination Airport:</b>  {flightData.data[3]?.destination}</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Duration:</b> {timeConvert(flightData.data[3]?.duration)}</p> : null }
                            {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Return Date:</b> {flightData.data[3]?.return_date}</p> : null }
                            </Grid>
                        </Grid>
                
                        <Card style={{backgroundColor: "#FDF5DF"}}  sx={{ display: 'flex', border: 3, borderColor: '#AF8C72', borderRadius: '0px' }} >
                            <Grid container spacing={1}>
                                <Grid item xs={6}>
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Origin Airport:</b>  {flightData.data[4]?.origin} </p>  : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Price:</b> ${flightData.data[4]?.value} USD</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Depart Date:</b>  {flightData.data[4]?.depart_date}</p> : null }
                                </Grid>
                                <Grid item xs={6}>
                                    
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Destination Airport:</b>  {flightData.data[4]?.destination}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Duration:</b> {timeConvert(flightData.data[4]?.duration)}</p> : null }
                                {flightData.data ? <p style={{marginLeft: 15, color: "black", fontSize: 21, textDecoration: "none"}}> <b>Return Date:</b> {flightData.data[4]?.return_date}</p> : null }
                                </Grid>
                            </Grid>
                        </Card>

                        <Grid container sx={{ p: 2 }} spacing={0} display="flex" justifyContent="center" alignItems="justify-end">
                            <Button rel="noopener" href= "https://www.skyscanner.com/" color= 'success' target="_blank" variant="contained">Search</Button>
                        </Grid>
                        
                       
                </Typography>
            </CardContent>
        </Card>
    </Grid>
  
    

    <Grid container sx={{ p: 3 }} spacing={0} display="flex" justifyContent="center">
    <Button onClick={() => Router.back()} style={{maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}} rel="noopener" justifyContent="center" color= 'success' target="_blank" >
        <HomeIcon style={{maxWidth: '100px', maxHeight: '100px', minWidth: '100px', minHeight: '100px'}}/>
    </Button>
    
    
      
    </Grid>

</Grid>


);
}
