import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "./BodyCard.css";
import { Link } from "react-router-dom";
import { spacing } from '@mui/system';
import card1 from "../../img/home-card/card-1.jpg";
import card2 from "../../img/home-card/card-2.jpg";

export default function BodyCard() {
  const styles = {
    Typography:{
      fontSize: "14px",
      display: {
        xs: 'none',
        md: 'block'
      }},
      Card:{
        maxWidth: "300px"
        }
      }
    // },
    // Card: {
    //   marginLeft : '300px'
    // }
  
  return (
    <div className="container">
      <div className="header">
        <h4>FEATURED PRODUCTS</h4>
      </div>
      <br />
      <div className="card-group">
        {/* card-1 */}
        <Card sx={[styles.Card]}>
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
                  Processor
                </li>
                <li>16GB DDR5 SDRAM - 1TB PCIe NVMe M.2 SSD</li>
                <li>
                  NVIDIA GeForce® RTX™ 4060 8GB GDDR6 Dedicated - Wi-Fi 6 AX
                  1650i
                </li>
                <li>
                  16" FHD WUXGA 165Hz ComfyView IPS LED Display - Backlit KB -
                  Windows 11 SL
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image={card2}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                MSI GeForce RTX 4070Ti GAMING X TRIO 12G V...
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={[styles.Typography]}
              >
                Play with style! GAMING is upgraded with TRI ...
                <li>
                  <li>CUDA® Cores 7680 Units</li>
                  <li>Extreme Performance: 2760 MHz (MSI Center)</li>
                  <li>12GB GDDR6X 192-bit</li>
                  <li></li>PCI Express® Gen 4
                </li>
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Buy Now
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
