import React, { Fragment, useState } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const ShowTable = () => {
    const [rows, setRows] = useState(
        [
            { id: 0, value: '', content: [' Volkswagen', 'Lexus', 'Peugeot'] },
            { id: 1, value: '', content: ['Porsche', 'Nissan', 'Mitsubishi'] },
            { id: 2, value: '', content: ['Mazda', 'Skoda', 'LADA'] },
        ]
    );

    const cols = [
        {
            field: 'value',
            cellClassName: 'super-app-theme--cell',
            width: 200,
            headerAlign: 'center',
        },
        {
            field: 'content',
            cellClassName: 'super-app-width--cell',
            width: 200,
            headerAlign: 'center',
            renderCell: renderRating
        }
    ];

    const useStyles = makeStyles(() => ({
        root: {
            '& .super-app-theme--cell': {
                backgroundColor: 'rgba(224, 183, 60, 0.55)',
                color: '#f5425a',
                fontWeight: '600',
                textAlign: 'center'
            },
            '& .super-app-width--cell > div': {
                width: '100%'
            }
        },
        select: {
            '& > select': {
                height: '100%',
                width: '100%',
                color: '#f5425a',
            }
        }
    }));

    const classes = useStyles();

    const handleChange = (id, event) => {
        const name = event.target.value;

        setRows(() => {
            rows[id].value = name;
            return rows;
        })
    };

    function renderRating(params) {
        return (
            <FormControl>
                <Select native defaultValue="" className={classes.select} onChange={(e) => handleChange(params.row.id, e)}>
                    <option aria-label="None" value="" />
                    {params.row.content.map((item) =>
                        <option>{item}</option>
                    )}
                </Select>
            </FormControl>
        )
    }

    return (
        <Fragment>

            <div style={{ height: 300, width: '100%' }} className={classes.root}>
                <DataGrid rows={rows} columns={cols} autoPageSize />
            </div>

        </Fragment>
    );
};

export default ShowTable;

