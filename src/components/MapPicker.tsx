import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import {Map} from "./Map"
import {Stage} from "./Stage"
import { MapType } from './MapType';


function MapPicker(props: {listOfMaps: Map[], listOfStages: Stage[], listOfMapTypes: MapType[], parentFunction: Function}) {
    const stagesList: string[] = props.listOfStages.filter((stage) => {
        if (stage.checkedState === true) {
            return stage.stageName
        }
    }).map((stage) => {return stage.stageName})
    const mapTypesList: string[] = props.listOfMapTypes.filter((mapType) => {
        if (mapType.checkedState === true) {
            return mapType.typeName
        }
    }).map((mapType) => {return mapType.typeName})
    let uniqueMaps: string[] = props.listOfMaps.filter((map) => {
        if (stagesList.includes(map.stage) && mapTypesList.includes(map.type)) {
            return map.mapName
        }
    }).map((map) => {return map.mapName})
    
    // const [mapNames, updateMapsNames] = useState<string[]>(props.listOfMapNames);
    
    const updateMapsNamesHelper = (newArray) => {
        updateMapsNames([...newArray])
    }

    const handleChange = (newArray) => {
        // updateMapsNamesHelper(newArray)
        props.parentFunction(newArray)
    }

    return(
        <div>
            <p>
                Map
            </p>
            <div>
            <Autocomplete
            multiple
            limitTags={2}
            id="checkboxes-tags-demo"
            options={props.listOfMapNames}
            disableCloseOnSelect
            getOptionLabel={(mapName) => mapName}
            isOptionEqualToValue={(option, value) => option === value}
            onChange={(event, newArray) => handleChange(newArray)}
            style={{ width: 500 }}
            // renderOption={(props, options) => {
            //     <li {...props}>
            //         {}
            //     </li>
            // }}
            renderInput={(params) => (
                <TextField {...params} label={mapNames.length === props.listOfMapNames.length ? "All" : mapNames.length === 0 ? "" : "Multiple Values"}/>
            )}
            renderTags={(mapNames) => {
                return mapNames.length === props.listOfMapNames.length ? "All" : "Multiple Values"
            }}
            />
            </div>
        </div>
    )
}

export default MapPicker;