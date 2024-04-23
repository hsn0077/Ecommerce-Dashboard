import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [specification, setSpecification] = useState("");

  const addProduct = async () => {
    let result = await fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
        description,
        specification,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.warn(result);
  };
  const defaultTheme = createTheme();
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Products
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Product Name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="price"
                  label="Product Price"
                  name="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="category"
                  label="Category"
                  name="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="description"
                  label="Products Description"
                  id="description"
                  multiline
                  maxRows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="specification"
                  label="Product Specifications"
                  id="specification"
                  multiline
                  maxRows={4}
                  value={specification}
                  onChange={(e) => setSpecification(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="company"
                  label="Company Name"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Grid>
            </Grid>
            <Link to="/laptop"><Button
              onClick={addProduct}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button></Link>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
