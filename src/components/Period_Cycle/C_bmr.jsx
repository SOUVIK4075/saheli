import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

function Cbmr() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("female");
    const [bmr, setBmr] = useState(null);

    const calculateBmr = () => {
        if (weight && height && age) {
            let bmrValue;
            if (sex === "female") {
                bmrValue = (10 * weight) + (6.25 * height) - (5 * age) - 161;
            } else {
                bmrValue = (10 * weight) + (6.25 * height) - (5 * age) + 5;
            }
            setBmr(bmrValue.toFixed(2));
        }
    };

    return (
        <>
            <TopNavbar />
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: "#F5F5F5",
                }}
            >
                <Box 
                    style={{
                        backgroundColor: "#FFF",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        maxWidth: "500px",
                        width: "100%",
                        textAlign: "center",
                        marginBottom: "20px",
                    }}
                >
                    <Typography variant="h5" style={{ marginBottom: "20px" }}>
                        BMR Calculator
                    </Typography>
                    {/* <Typography variant="body1" style={{ marginBottom: "20px" }}>
                        Basal Metabolic Rate (BMR) is the number of calories your body needs to maintain basic physiological functions such as breathing, circulation, and cell production while at rest. It's a crucial component in determining daily caloric needs and managing weight.
                    </Typography> */}
                    <TextField
                        label="Weight (kg)"
                        variant="outlined"
                        fullWidth
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        style={{ marginBottom: "20px" }}
                    />
                    <TextField
                        label="Height (cm)"
                        variant="outlined"
                        fullWidth
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        style={{ marginBottom: "20px" }}
                    />
                    <TextField
                        label="Age (years)"
                        variant="outlined"
                        fullWidth
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        style={{ marginBottom: "20px" }}
                    />
                    <TextField
                        label="Sex (male/female)"
                        variant="outlined"
                        fullWidth
                        value={sex}
                        onChange={(e) => setSex(e.target.value.toLowerCase())}
                        style={{ marginBottom: "20px" }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={calculateBmr}
                        style={{ marginBottom: "20px", backgroundColor: "#FA4C86" }}
                    >
                        Calculate BMR
                    </Button>
                    {bmr && (
                        <Typography variant="h6" style={{ marginTop: "20px" }}>
                            Your BMR is: {bmr} kcal/day
                        </Typography>
                    )}
                </Box>

                <Box 
                    style={{
                        backgroundColor: "#FFF",
                        borderRadius: "10px",
                        padding: "20px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        maxWidth: "500px",
                        width: "100%",
                        textAlign: "center",
                    }}
                >
                    <Typography variant="h5" style={{ marginBottom: "20px" }}>
                        BMR Ranges
                    </Typography>
                    <table 
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            marginBottom: "20px"
                        }}
                    >
                        <thead>
                            <tr style={{ backgroundColor: "#FA4C86", color: "#FFF" }}>
                                <th style={{ padding: "10px", border: "1px solid #ddd" }}>BMR Range (kcal/day)</th>
                                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Below 1200</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Below Average</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>1200 - 1600</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Average</td>
                            </tr>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>1600 - 2000</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Above Average</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>2000 and higher</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>High</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default Cbmr;
