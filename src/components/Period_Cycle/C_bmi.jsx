import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TopNavbar from "../Nav/TopNavbar";
import Footer from "../Sections/Footer";

function Cbmi() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (weight && height) {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
            setBmi(bmiValue);
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
                        BMI Calculator
                    </Typography>
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
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={calculateBmi}
                        style={{ marginBottom: "20px", backgroundColor: "#FA4C86" }}
                    >
                        Calculate BMI
                    </Button>
                    {bmi && (
                        <Typography variant="h6" style={{ marginTop: "20px" }}>
                            Your BMI is: {bmi}
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
                        BMI Ranges for Women
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
                                <th style={{ padding: "10px", border: "1px solid #ddd" }}>BMI</th>
                                <th style={{ padding: "10px", border: "1px solid #ddd" }}>Weight Standard</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Below 18.5</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Underweight</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>18.5–24.9</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Normal weight</td>
                            </tr>
                            <tr style={{ backgroundColor: "#f9f9f9" }}>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>25.0–29.9</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Overweight</td>
                            </tr>
                            <tr>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>30.0 and higher</td>
                                <td style={{ padding: "10px", border: "1px solid #ddd" }}>Obese</td>
                            </tr>
                        </tbody>
                    </table>
                </Box>
            </div>
            <Footer />
        </>
    );
}

export default Cbmi;
