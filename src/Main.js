import React, { useState } from 'react'
import { TextField, Button, Typography, Box, Grid } from '@mui/material';
import { PieChart } from 'react-minimal-pie-chart';

function Main() {

    const [box1value, setBox1value] = useState('')
    const [box2value, setBox2value] = useState('')
    const [error1, setError1] = useState('')
    const [error2, setError2] = useState('')
    const [chartData, setChartData] = useState('')
    const [flag, setFlag] = useState(false)

    // const [inputs, setInputs] = useState({
    //     box1value: "",
    //     box2value: ""
    // })

    const handleBox1Change = (e) => {
        const value = e.target.value;
        if (value <= 100) {
            setBox1value(value);
            setBox2value(100 - value);
            setError1('');
        } else {
            setError1('Incorrect Value');
        }
    }
    const handleBox2Change = (e) => {
        const value = e.target.value;
        if (value <= 100) {
            setBox2value(value);
            setBox1value(100 - value);
            setError2('');
        } else {
            setError2('Incorrect Value');
        }

    }

    const handleClick = () => {
        const newData = [
            { title: 'Box 1', value: parseInt(box1value), color: '#ccc' },
            { title: 'Box 2', value: parseInt(box2value), color: '#C13C37' },
        ];
        setChartData(newData);
        setFlag(true)
    }
    console.log(chartData);
    console.log(box1value);
    console.log(box2value);

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ textAlign: "right" }}>
                    <Typography variant="h5" component="div" className="title" gutterBottom sx={{ marginRight: "150px" }}>
                        Box 1:
                    </Typography>
                    <TextField
                        type="number"
                        value={box1value}
                        onChange={handleBox1Change}
                          error={error1 !== ''}
                          helperText={error1}
                        className="text-field"

                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography variant="h5" component="div" className="title" gutterBottom>
                        Box 2:
                    </Typography>
                    <TextField
                        type="number"
                        value={box2value}
                        onChange={handleBox2Change}
                          error={error2 !== ''}
                          helperText={error2}
                        className="text-field"
                    />
                </Grid>
                <Grid item xs={5}>
                    <Button variant='contained' sx={{ marginTop: "50px" }} onClick={handleClick}>Create Chart</Button>
                </Grid>
            </Grid>
            {flag && <PieChart data={chartData} className="chart" style={{width:"400px",height:"400px",margin:"20px 200px"}}/>}
        </>
    )
}

export default Main