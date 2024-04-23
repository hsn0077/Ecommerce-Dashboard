import React, { useEffect } from 'react'
import { useState } from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
// import "./BodyCard.css";
import { Link } from "react-router-dom";
// import { spacing } from '@mui/system';
import card1 from "../img/home-card/card-1.jpg";
import Footer from "./Footer";
import Nav from "./Nav";

export default function Laptop() {
    const styles = {
        Typography:{
          fontSize: "14px",
          display: {
            xs: 'none',
            md: 'block'
          }},
          Card:{
            maxWidth: "300px",
            minWidth: '300px',
            marginTop: "8px",
            marginLeft: "160px",
            marginBottom: "8px"
            },
          Button1:{
            backgroundColor: "yellow",
            fontWeight: "bold",
            borders: "none"
            },
          Button2:{
            fontWeight: "bold",
            },
          }

    const [laptops, setLaptops] = useState([]);

    useEffect(() =>{
        getLaptops();
    },[])

    const getLaptops = async () =>{
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setLaptops(result);
    }

    const deleteLaptops = async (id)=>{
      let result = await fetch(`http://localhost:5000/products/${id}`,{
        method: "Delete"
      });
      result = await result.json()
      if(result){
        getLaptops();
      }
    };

    
    const ad = localStorage.getItem("admin");

  return (
    <div className="container-flex">
    <Nav/>
      <div className="container card-group">
        {/* card-1 */}
        {/* <Card sx={[styles.Card]}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={card1}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                Acer Predator Helios Neo 16 PHN16-71-75FC ...
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={[styles.Typography]}
              >
                When you brandish this gaming laptop, you’re ...
                <li>
                  13th Gen Intel Core™ i7-13700HX - Hexadeca-core (16 Core™)
                  Processor, 16GB DDR5 SDRAM - 1TB PCIe NVMe M.2 SSD
                  NVIDIA GeForce® RTX™ 4060 8GB GDDR6 Dedicated - Wi-Fi 6 AX
                  1650i 16" FHD WUXGA 165Hz ComfyView IPS LED Display - Backlit KB -
                  Windows 11 SL
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="warning" sx={[styles.Button2]}>
              100k
            </Button>
            <Button size="small" color="primary" sx={[styles.Button1]}>
            <Link to="/checkOut">Buy Now</Link>
            </Button>
          </CardActions>
        </Card> */}
        {
            laptops.map((item)=>
             
            <Card sx={[styles.Card]}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={card1}
              alt="green iguana"
            />
            <CardContent >
              <Typography gutterBottom variant="h6" component="div">
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={[styles.Typography]}
              >
                {item.description}...
                <h6 sx={{'fontWeight':'bolder'}}>Specifications</h6>
                
                 {item.specification}
      
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions key={item._id}>
            <Button size="small" color="warning" sx={[styles.Button2]}>
              Rs. {item.price}
            </Button>
            { ad ? (
            <Button size="small" color="warning" onClick={()=>deleteLaptops(item._id)}>
              Delete
            </Button>)
            : <>
            <Button size="small" color="primary" sx={[styles.Button1]}>
            <Link to="/checkOut">Buy Now</Link>
            </Button>
            </>}
          </CardActions>
        </Card>
            )
        }
      </div>
      <Footer/>
      </div>
      
  )
}
