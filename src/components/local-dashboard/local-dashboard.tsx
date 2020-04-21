import * as React from 'react';
import { Map, Marker, TileLayer } from "react-leaflet";
import { divIcon, Map as LeafletMap, LatLngBoundsExpression } from 'leaflet';
import { getCountryDetails, ICountry } from './countries';

import Reports from "./reports/reports"

declare const window: any;
type IStatType = 'screened' | 'employees' | 'oranges';
type IListFilter = 'starred' | 'all';

function checkInStatusText(s: string) {
    switch (s?.toLowerCase()) {
        default: return 'Expected';
        case 'check-in': return 'Checked In';
        case 'check-out': return 'Checked Out';
    }
}

interface IEmployeeDetails {
    _id: string,
    id: string,
    name: string,
    location: string,
    temperature: string,
    source: string,
    countriesvisited: string,
    currentstatus: string,
    checkinat: Date,
    checkoutat: Date,
    createdat: Date,
    email: string,
    expectedat: Date,
    healthflag: string,
    status: string,
    contactnumber: string,
    starred: boolean,
    tempunit: string,

    lat: number,
    long: number,
    locationName: string,
    dataSourceIcon: string,
    lastScanned: string
}

interface IScanData {
    temperature: string,
    id: string,
    name: string,
    location: string,
    lastVisitedCountry: string,
    isValid: boolean,
    feedback: any,
    buttonText: string,
    tempUnit: string
}

interface IEditFormData {
    buttonText: string,
    stateButtonText: string,
    feedback: any
}

interface ILocalProps {
    apiUrl: string,
    apiKey: string,
    basePath: string,
    renderInfo: any
}

interface ILocalState {
    userId: string,
    lastUpdated: string,
    sorting: IListFilter,
    data: IEmployeeDetails[],
    dialog: '' | 'info' | 'precautions' | 'scann' | 'edit' | 'scan-dialog',
    mapFilter: IStatType,
    scannData: IScanData,
    selected: IEmployeeDetails | null,
    editForm: IEditFormData,
    searchText: string,
    newItems: IEmployeeDetails[],
    view: 'all' | 'reports';
}

interface IListWidgetProps {
    items: IEmployeeDetails[],
    sorting: IListFilter,
    toggleStarred: any,
    selected: IEmployeeDetails,
    onSelectItem: any,
    searchText: string
}

interface IListWidgetState {
}

interface IMapWidgetProps {
    items: IEmployeeDetails[]
}


class ListWidget extends React.Component<IListWidgetProps, IListWidgetState> {

    constructor(props: IListWidgetProps) {
        super(props);
    }

    componentDidUpdate(prevProps: IListWidgetProps, prevState: IListWidgetState) { }


    renderItem(item: IEmployeeDetails, key: number) {

        let cls = "";
        if (this.props.selected != null && this.props.selected._id == item._id) {
            cls = "selected"
        }
        if (parseInt(item.healthflag) == 1) {
            cls += " warning";
        }

        return <div key={key} className={`item local-list ${cls} ${item.status == null || item.status == "" ? "arriving" : item.status} `} id={`emp-${item._id}`}>

            <div className='c status' onClick={() => this.props.onSelectItem(item)}>
                <div className={`label ${item.status == null || item.status == "" ? "arriving" : item.status} `}></div>
                <div className='value'>{item.status == null ? "Expected" : checkInStatusText(item.status)}</div>
            </div>
            <div className='c temperature' onClick={() => this.props.onSelectItem(item)}>
                <div className='label'>Temperature</div>
                <div className={`value ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}`}>{item.temperature} </div>
            </div>
            <div className='c location' onClick={() => this.props.onSelectItem(item)}>
                <div className='label'>Location <span className="icon"></span></div>
                <div className='value'>{item.location} </div>
            </div>
            <div className='c name' onClick={() => this.props.onSelectItem(item)}>
                <div className='label'><span className="icon"></span>Name</div>
                <div className='value'>{item.name}</div>
            </div>
            <div className='c last-country' onClick={() => this.props.onSelectItem(item)}>
                <div className='label'>Countries Visited</div>
                <div className='value'>{item.countriesvisited}</div>
            </div>
            <div className='c data-source' onClick={() => this.props.onSelectItem(item)}>
                <div className='label'>Data Source</div>
                <div className='value'>
                    {
                        item.source == null ? "" : <img src={`https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/datasources/${item.source.toLowerCase()}.png`} alt={item.source} />
                    }
                </div>
            </div>
            <div className={`c starred`}>
                <div className={`value starred ${item.starred ? "fill" : ""}  `} onClick={() => this.props.toggleStarred(item._id)} >
                </div>
            </div>
        </div>;
    }

    render() {
        let items = this.props.items;
        let starredItemsString = localStorage.getItem("starredItems");
        let starredItems = JSON.parse(starredItemsString);

        if (starredItems == null) {
            starredItems = [];
        }

        if (this.props.sorting == "starred") {
            items = items.filter((item: IEmployeeDetails) => {
                return (starredItems.indexOf(item._id) != -1);
            })
        }

        let searchText = this.props.searchText;

        if (searchText != null && searchText.trim().length > 0) {
            items = items.filter((item: IEmployeeDetails) => {
                let regExp = new RegExp(searchText, "i");
                return ((item.id == searchText) || (regExp.test(item.name)));
            });
        }

        // group items
        let labels = ["check-in", "check-out", "expected"];
        let grouped: IEmployeeDetails[] = [];

        labels.forEach(label => {
            let temp = items.filter(item => {

                if (label == "expected") {
                    return (item.status == null || item.status == "");
                }

                return (item.status == label);
            });

            grouped = grouped.concat(temp);
        });

        return <div className='list-widget'>
            {
                grouped.map((item, key) => this.renderItem(item, key))
            }

        </div>;
    }
}

class MapWidget extends React.Component<IMapWidgetProps, {}> {
    map: LeafletMap;

    componentDidUpdate(prevProps: IMapWidgetProps) {
        // if (this.props.items.length == 0) return;

        // /* if only one point is present - fitBounds() fails. So just pan to that item */
        // if (this.props.items.length == 1) {
        //     let zoom = this.map?.getZoom() || 0;
        //     //if (zoom < 3) zoom = 3;
        //     this.map?.setView([this.props.items[0].lat, this.props.items[0].long], zoom);
        //     return;
        // }

        // let bounds = this.props.items.map(item => [item.lat, item.long]) as LatLngBoundsExpression;
        // this.map.fitBounds(bounds);

    }

    render() {
        let size = '';
        let zoom = this.map?.getZoom();

        if (zoom < 3) {
            size = 'tiny';
        }
        let availableCountries: any = {};
        for (var i in this.props.items) {
            let countries = this.props.items[i].countriesvisited?.split(',');
            for (var c in countries) {
                let country = countries[c]?.trim() || '';
                if (!country) continue;
                availableCountries[country] = 1;
            }
        }
        let countryData = getCountryDetails(Object.keys(availableCountries));

        return <div className='gmap' >
            <Map center={[45.4, -75.7]} zoom={1}
                ref={(el) => {
                    if (!!el) {
                        this.map = el.leafletElement;
                    }
                }}

            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {
                    countryData.map((item, key) => this.renderMarker(item, key, size))
                }
            </Map>

        </div>;
    }

    renderMarker(item: ICountry, key: number, size: string) {
        //let stat = shortenNumber(item[this.props.stat]);
        //console.log(stat);
        let markerClass = `micon screened -selected ${size}`;

        return <Marker
            //onClick={() => this.props.onItemSelected(item)}
            position={[item.lat, item.lon]}
            key={key}
            icon={divIcon({ className: markerClass, 'html': '<div><div class="inner"></div><div class="outer"></div><div class="txt"></div></div>' })}
        />;
    }
}

class LocalDashboard extends React.Component<ILocalProps, ILocalState>  {

    constructor(props: ILocalProps) {
        super(props);

        this.state = {
            userId: "user_01",
            lastUpdated: null,
            sorting: 'all',
            data: [],
            dialog: "",
            mapFilter: 'screened',
            scannData: {
                temperature: "",
                id: "",
                name: "",
                location: "",
                lastVisitedCountry: "",
                isValid: false,
                feedback: <span></span>,
                buttonText: "Submit",
                tempUnit: "celsius"
            },
            selected: null,
            editForm: {
                buttonText: "submit",
                stateButtonText: "check-in",
                feedback: ""
            },
            searchText: "",
            newItems: [],
            view: "all"
        }

        this.submitForm = this.submitForm.bind(this);
        this.updateFormData = this.updateFormData.bind(this);
        this.updateEditFormData = this.updateEditFormData.bind(this);
        this.closeScanningForm = this.closeScanningForm.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.toggleItemStarred = this.toggleItemStarred.bind(this);
        this.onSelectItem = this.onSelectItem.bind(this);
        this.onCloseEditDialog = this.onCloseEditDialog.bind(this);
        this.submitEditForm = this.submitEditForm.bind(this);
        this.updateTempUnit = this.updateTempUnit.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.toggleReportsView = this.toggleReportsView.bind(this);
    }

    componentDidMount() {
        this.loadRemoteData();
        this.subscribe();
    }

    subscribe() {
        window.Lucy.MessageBus.init({ url: this.props.apiUrl, apiKey: this.props.apiKey })
            .then(() => {
                window.Lucy.MessageBus.subscribe('situation-dashboard', (value: string, channel: string) => {
                    // update status
                    var dataSet = this.state.data;
                    let NewRecords = this.state.newItems;
                    let NewRecord: IEmployeeDetails = JSON.parse(value);

                    /* keep it on the top */
                    dataSet.unshift(NewRecord);
                    NewRecords.unshift(NewRecord);

                    this.setState({
                        data: dataSet,
                        newItems: NewRecords
                    });
                });
            });
    }

    async loadRemoteData(): Promise<{ details: IEmployeeDetails[] }> {
        try {
            let response = await fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/today", {
                method: 'GET',
                headers: {
                    'Authorization': 'APIKEY ' + this.props.apiKey,
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw await response.text();
            }
            let rawData = await response.json();
            let lastUpdate = rawData.lastUpdated;
            localStorage.setItem('locallastUpdated', lastUpdate);

            let details = [];

            let screened = 0;
            let employees = 0;
            let oranges = 0;

            if (rawData) {
                details = rawData;

                // get localstorage data
                let starredItemsString = localStorage.getItem("starredItems");
                let starredItems = JSON.parse(starredItemsString);

                let temp = details.map((item: IEmployeeDetails) => {

                    if (starredItems != null) {
                        item.starred = (starredItems.indexOf(item._id) != -1);
                    }

                    item.tempunit = "celsius";

                    if (item.temperature != null && item.temperature.trim().length > 0) {
                        screened++;
                    }
                    employees++;

                    return item;
                });

                details = temp;

            }

            this.setState({
                data: details,
                lastUpdated: lastUpdate,
            });

            return { details };
        } catch (e) {
            throw e;
        }

    }

    setSorting(type: IListFilter) {
        this.setState({ sorting: type });
    }

    setMapFilter(filter: IStatType) {
        this.setState({ mapFilter: filter });
    }

    renderPrecautions() {
        return <><div className='dialog-sheet' onClick={() => this.setState({ dialog: '' })} />
            <div className='dialog info'>
                <div className='header'>
                    <div className='first'></div>
                    <div className='title'>
                        Precautions To avoid infection
                        </div>
                    <div className='last'>

                        <div className='closer' onClick={() => this.setState({ dialog: '' })} />
                    </div>
                </div>
                <div className='body'>
                    <ol className='items'>
                        <li>
                            <div className='text'>Wash your hands each time you walk in the door </div>
                            <div className='action-container'>
                                <a className='action' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public' target='_blank'>Read more</a>
                            </div>
                        </li>

                    </ol>

                </div>
            </div>
        </>;
    }

    renderScanningForm() {
        return <>
            <div className='dialog-sheet' onClick={this.closeScanningForm} />
            <div className='dialog scann-form'>
                <div className='header'>

                    <div className='title'>
                        New Screening Form
                        </div>
                    <div className='last'>

                        <div className='closer' onClick={this.closeScanningForm} />
                    </div>
                </div>
                <div className='body'>

                    <div className="form-group">
                        <label className="label" >Name  </label>
                        <input type="text" name="name" className={`input ${this.state.scannData.name.trim().length == 0 ? "" : "filled"} `} value={this.state.scannData.name} placeholder="Example: John Doe" onChange={(event) => this.updateFormData(event, 'name')} />
                    </div>

                    <div className="form-group">
                        <label className="label" >Id (if available) </label>
                        <input type="text" name="id" className={`input ${this.state.scannData.id.trim().length == 0 ? "" : "filled"} `} value={this.state.scannData.id} placeholder="Example: E123" onChange={(event) => this.updateFormData(event, 'id')} />
                    </div>

                    <div className="form-group">
                        <label className="label" >Temperature</label>
                        <input type="text" name="temperature" className={`input ${this.state.scannData.temperature.trim().length == 0 ? "" : "filled"} `} value={this.state.scannData.temperature} placeholder="Example: 23" onChange={(event) => this.updateFormData(event, 'temperature')} />
                    </div>

                    <div className="form-group" style={{ display: 'none' }}>
                        <label className="label" >Location  </label>
                        <input type="text" name="location" className={`input ${this.state.scannData.location.trim().length == 0 ? "" : "filled"} `} value={this.state.scannData.location} placeholder="Example: Singapore" onChange={(event) => this.updateFormData(event, 'location')} />
                    </div>

                    <div className="form-group">
                        <label className="label" >Countries Visited </label>
                        <input type="text" name="lastvisited" className={`input ${this.state.scannData.lastVisitedCountry.trim().length == 0 ? "" : "filled"} `} value={this.state.scannData.lastVisitedCountry} placeholder="Example: Kenya" onChange={(event) => this.updateFormData(event, 'lastVisited')} />
                    </div>

                    <div className="form-group">
                        {this.state.scannData.feedback}
                    </div>

                    <div className="form-group buttons">
                        <button type="button" className={`submit-button ${this.state.scannData.isValid ? "valid" : ""} `} onClick={this.submitForm}>
                            <span className="icon"></span>
                            {this.state.scannData.buttonText}
                        </button>
                    </div>

                    <div className='qrcodes'>
                        <div className='code'>
                            <img src='https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/qrcodes/qr-lobby.png' />
                            <div className='caption'>Scan for Lobby Staff</div>
                        </div>
                        <div className='code'>
                            <img src='https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/qrcodes/qr-user.png' />
                            <div className='caption'>Scan for Users and Guests</div>
                        </div>
                    </div>

                </div>
            </div>

        </>;
    }

    renderEditForm() {
        return <>
            <div className='dialog-sheet' onClick={this.onCloseEditDialog} />
            <div className='dialog scann-form'>
                <div className='header'>

                    <div className='title edit'>
                        <label className={`${this.state.selected.status}`} >{this.state.selected.status}</label>
                    </div>
                    <div className='last'>
                        <div className='closer' onClick={this.onCloseEditDialog} />
                    </div>
                </div>
                <div className='body edit'>

                    <div className={`left`}>
                        <div className="form-group">
                            <label className="label" >Temperature</label>
                            <input type="text" name="temperature" className={`input ${this.state.selected.temperature != null && this.state.selected.temperature.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.temperature} placeholder="Ex: 23" onChange={(event) => this.updateEditFormData(event, 'temperature')} />

                            <span className="temp-units">
                                <span className={`temp-label ${this.state.selected.tempunit == "celsius" ? "selected" : ""}`} onClick={() => this.updateTempUnit("celsius")}><span>&#8451;</span></span>
                                <span className={`temp-label ${this.state.selected.tempunit == "fahrenheit" ? "selected" : ""} `} onClick={() => this.updateTempUnit("fahrenheit")}><span>&#8457;</span></span>
                            </span>
                        </div>

                        <div className="form-group">
                            <label className="label" >Name  </label>
                            <input type="text" name="name" className={`input ${this.state.selected.name != null && this.state.selected.name.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.name} placeholder="Ex: John Doe" onChange={(event) => this.updateEditFormData(event, 'name')} />
                        </div>

                        <div className="form-group">
                            <label className="label" >Location  </label>
                            <input type="text" name="location" className={`input ${this.state.selected.location != null && this.state.selected.location.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.location} placeholder="Ex: Singapore" onChange={(event) => this.updateEditFormData(event, 'location')} />
                        </div>

                        <div className="form-group">
                            <label className="label" >Countries Visited </label>
                            <input type="text" name="lastvisited" className={`input ${this.state.selected.countriesvisited != null && this.state.selected.countriesvisited.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.countriesvisited} placeholder="Ex: Kenya" onChange={(event) => this.updateEditFormData(event, 'lastVisited')} />
                        </div>

                        <div className="form-group">
                            <label className="label" >Email </label>
                            <input type="text" name="email" className={`input ${this.state.selected.email != null && this.state.selected.email.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.email} placeholder="Ex: abc@abc.com" onChange={(event) => this.updateEditFormData(event, 'email')} />
                        </div>

                        <div className="form-group">
                            <label className="label" >Contact Number </label>
                            <input type="text" name="contactnumber" className={`input ${this.state.selected.contactnumber != null && this.state.selected.contactnumber.trim().length == 0 ? "" : "filled"} `} value={this.state.selected.contactnumber} placeholder="Ex: +1(504)43227645" onChange={(event) => this.updateEditFormData(event, 'contactnnumber')} />
                        </div>

                        <div className="form-group">
                            <label className="label" >Data Source </label>
                            {
                                this.state.selected.source == null ? "" : <img className="data-source-image" src={`https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/datasources/${this.state.selected.source.toLowerCase()}.png`} alt={this.state.selected.source} />
                            }
                        </div>

                    </div>
                    <div className={`middle`}></div>
                    <div className={`right`}>

                        <div className="form-group">
                            <label className="label full-width" >Capture Image </label>
                            <div className="placeholder">
                                <img src="images/camera.png" alt="camera" />
                            </div>
                            <button className={`take-photo`}><span className={`icon`}></span> Take Photo </button>
                        </div>

                    </div>

                    <div className="form-group">
                        {this.state.editForm.feedback}
                    </div>

                    <div className="form-group buttons">

                        <button type="button" className={`check-in-button `} onClick={() => this.submitEditForm("status")}>
                            <span className="icon"></span>
                            {this.state.editForm.stateButtonText}
                        </button>

                        <button type="button" className={`save-changes-button `} onClick={() => this.submitEditForm("save")}>
                            <span className="icon"></span>
                            {this.state.editForm.buttonText}
                        </button>
                    </div>
                </div>
            </div>

        </>;
    }

    closeScanningForm() {
        let scannData = this.state.scannData;

        scannData.id = "";
        scannData.name = "";
        scannData.temperature = "";
        scannData.location = "";
        scannData.lastVisitedCountry = "";
        scannData.isValid = false;
        scannData.feedback = <span></span>;
        scannData.buttonText = "Submit"

        this.setState({
            scannData: scannData,
            dialog: ""
        });
    }

    updateFormData(event: React.ChangeEvent<HTMLInputElement>, filed: string) {
        let scannedData = this.state.scannData;
        let newValue = event.target.value

        switch (filed) {
            case "temperature":
                scannedData.temperature = newValue;
                break;
            case "id":
                scannedData.id = newValue;
                break;
            case "name":
                scannedData.name = newValue;
                break;
            case "location":
                scannedData.location = newValue;
                break;
            case "lastVisited":
                scannedData.lastVisitedCountry = newValue;
                break;
        }

        scannedData.isValid = scannedData.name.trim().length > 0 && scannedData.temperature.trim().length > 0;

        this.setState({ scannData: scannedData });
    }

    updateEditFormData(event: React.ChangeEvent<HTMLInputElement>, filed: string) {
        let selected = this.state.selected;
        let newValue = event.target.value

        switch (filed) {
            case "temperature":
                selected.temperature = newValue;
                break;
            case "name":
                selected.name = newValue;
                break;
            case "location":
                selected.location = newValue;
                break;
            case "lastVisited":
                selected.countriesvisited = newValue;
                break;
            case "email":
                selected.email = newValue;
                break;
            case "contactnnumber":
                selected.contactnumber = newValue;
                break;
        }

        this.setState({ selected: selected });
    }

    updateTempUnit(unit: string) {
        let selected = this.state.selected;
        selected.tempunit = unit;
        this.setState({ selected: selected });
    }

    submitForm() {

        let scanData = this.state.scannData;
        scanData.feedback = <span className="feedback info" >Submitting...</span>;
        scanData.buttonText = "Submitting...";

        this.setState({ scannData: scanData });

        if (this.state.scannData.isValid) {

            let temperature = this.state.scannData.temperature.trim();
            let tempUnit = this.state.scannData.tempUnit;
            if (tempUnit == "fahrenheit") {
                temperature = this.calcCelsiusValue(temperature);
            }

            // submit form 
            let _data = JSON.stringify({
                "id": this.state.scannData.id.trim(),
                "name": this.state.scannData.name.trim(),
                "location": this.state.scannData.location.trim(),
                "temperature": temperature,
                "source": "Lucy",
                "countriesvisited": this.state.scannData.lastVisitedCountry.trim(),
            });

            fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users", {
                method: "post",
                headers: {
                    'Authorization': 'APIKEY ' + this.props.apiKey,
                    'Content-Type': 'application/json'
                },
                body: _data
            })
                .then((res) => res.json())
                .then(response => {

                    if (response._id) {
                        let scannedData = this.state.scannData;

                        scannedData.id = "";
                        scannedData.name = "";
                        scannedData.temperature = "";
                        scannedData.lastVisitedCountry = "";
                        scannedData.location = "";
                        scannedData.isValid = false;
                        scannedData.feedback = <span className="feedback success">Done</span>;
                        scanData.buttonText = "Submit";

                        this.setState({ scannData: scannedData });
                    }
                })
                .catch(err => {

                    let scannedData = this.state.scannData;
                    scannedData.feedback = <span className="feedback error">Oops! something went wrong</span>;
                    scanData.buttonText = "Submit";
                    this.setState({ scannData: scannedData });

                    console.log(err);
                    throw err;
                })
        }
    }

    updateUserState() {
        let editForm = this.state.editForm;
        editForm.feedback = <span className="feedback info" >Submitting...</span>;
        editForm.stateButtonText = "Submitting...";

        this.setState({ editForm: editForm });


    }

    submitEditForm(type: string) {
        let editForm = this.state.editForm;
        editForm.feedback = <span className="feedback info" >Submitting...</span>;

        if (type == "status") {
            editForm.stateButtonText = "Submitting...";
        }
        else {
            editForm.buttonText = "Submitting...";
        }
        this.setState({ editForm: editForm });


        let selected = this.state.selected;
        let isValid = selected.temperature.trim().length > 0 && selected.name.trim().length > 0 && selected.location.trim().length > 0;

        if (isValid) {

            status = selected.status == null ? "" : selected.status;
            if (type == "status") {
                status = status == "check-in" ? "check-out" : "check-in";
            }

            let temperature = selected.temperature.trim();
            let tempUnit = selected.tempunit;
            if (tempUnit != "celsius") {
                temperature = this.calcCelsiusValue(temperature);
            }

            // submit form 
            let _data = JSON.stringify({
                "name": selected.name.trim(),
                "location": selected.location.trim(),
                "temperature": temperature,
                "countriesvisited": selected.countriesvisited.trim(),
                "_id": selected._id,
                "id": selected.id,
                "status": status,
                'email': selected.email,
                "contactnumber": selected.contactnumber
            });

            fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/update", {
                method: "PATCH",
                headers: {
                    'Authorization': 'APIKEY ' + this.props.apiKey,
                    'Content-Type': 'application/json'
                },
                body: _data
            })
                .then((res) => res.json())
                .then(response => {

                    let selected = response;

                    let editForm = this.state.editForm;
                    editForm.feedback = <span className="feedback success">Saved</span>;
                    editForm.buttonText = "Submit";
                    editForm.stateButtonText = selected.status == "check-in" ? "check-out" : "check-in";

                    // update data set
                    let data = this.state.data;

                    let starredItemsString = localStorage.getItem("starredItems");
                    let starredItems = JSON.parse(starredItemsString);

                    if (starredItems == null) {
                        starredItems = [];
                    }

                    let screened = 0;
                    let employees = 0;
                    let oranges = 0;

                    var updated = data.map(item => {

                        if (item._id == selected._id) {
                            item = selected;
                        }

                        item.starred = (starredItems.indexOf(item._id) != -1);
                        item.tempunit = "celsius";

                        if (item.temperature != null && item.temperature.trim().length > 0) {
                            screened++;
                        }
                        employees++;

                        return item;
                    });

                    this.setState({
                        editForm: editForm,
                        data: updated,
                        selected: selected
                    });
                })
                .catch(err => {

                    let editForm = this.state.editForm;
                    editForm.feedback = <span className="feedback error">Oops! something went wrong</span>;
                    editForm.buttonText = "Submit";
                    editForm.stateButtonText = this.state.selected.status == "check-in" ? "check-out" : "check-in";
                    this.setState({ editForm: editForm });

                    console.log(err);
                    throw err;
                })

        }
        else {
            editForm.feedback = <span className="feedback error" >Please Complete the form</span>;

            if (type == "status") {
                editForm.stateButtonText = selected.status == "check-in" ? "check-out" : "check-in";
            }
            else {
                editForm.buttonText = "Submit";
            }

            this.setState({ editForm: editForm });
        }
    }



    toggleItemStarred(_id: string) {

        let starredItemsString = localStorage.getItem("starredItems");
        let starredItems = JSON.parse(starredItemsString);

        if (starredItems == null) {
            starredItems = [];
        }

        // check if item exist in localstorage
        let index = starredItems.indexOf(_id);

        if (index == -1) {
            starredItems.push(_id);
        }
        else {
            starredItems.splice(index, 1);
        }

        // update data list 
        let data = this.state.data;
        data.map((item, key) => {
            if (item._id == _id) {
                item.starred = !item.starred;
            }
        })

        this.setState({ data: data });

        localStorage.setItem("starredItems", JSON.stringify(starredItems));

    }

    onSelectItem(item: IEmployeeDetails) {
        item.tempunit = "celsius";
        this.setState({
            selected: item,
            dialog: "edit",
            editForm: {
                stateButtonText: item.status == "check-in" ? "check-out" : "check-in",
                buttonText: "Submit",
                feedback: ""
            }
        })
    }

    onCloseEditDialog() {
        this.setState({
            selected: null,
            dialog: ""
        })
    }

    calcCelsiusValue(fahrenheit: string) {
        let F = parseFloat(fahrenheit);

        if (isNaN(F)) {
            throw "Temperature should be a numbber";
        }

        let C = (5 / 9) * (F - 32);
        C = Math.round((C + 0.00001) * 100) / 100;
        return C.toString();
    }

    onSearch(event: React.ChangeEvent<HTMLInputElement>) {
        let seatchText = event.target.value;

        let regExp = /[^\w\s+-]/gi;
        let cleanedSearchText = seatchText.replace(regExp, "");

        this.setState({ searchText: cleanedSearchText });
    }

    renderNotification(item: IEmployeeDetails, key: number) {

        setTimeout(() => {
            this.closeMessage(item);
        }, 10000);

        return (
            <div className="message-box" id={`message-${item._id}`} key={key}>
                New Registration <a href={`#emp-${item._id}`} onClick={() => this.viewNewRecord(item)}>view</a>
                <div className="close" onClick={() => this.closeMessage(item)}></div>
            </div>
        );
    }

    viewNewRecord(item: IEmployeeDetails) {
        let element = document.getElementById("emp-" + item._id);
        element.classList.add("preview");

        setTimeout(() => {
            element.classList.remove('preview');
            this.closeMessage(item);
        }, 5000);
    }

    closeMessage(item: IEmployeeDetails) {
        let newItems = this.state.newItems;
        let updatedItems = newItems.filter(newItem => {
            return !(newItem._id == item._id);
        })

        this.setState({ newItems: updatedItems });
    }

    toggleReportsView() {
        if (this.state.view == "all") {
            this.setState({ view: "reports" });
        }
        else {
            this.setState({ view: "all" })
        }
    }

    render() {

        var dialog = <></>;

        if (this.state.dialog == "precautions") {
            dialog = this.renderPrecautions();
        }
        else if (this.state.dialog == "scan-dialog") {
            dialog = this.renderScanningForm();
        }
        else if (this.state.dialog == "edit") {
            dialog = this.renderEditForm();
        }

        let screened = this.state.data.filter(e => e?.temperature?.length > 0).length;
        let employees = this.state.data.length;
        let oranges = this.state.data.filter(e => Number(e.healthflag) == 1).length;

        return (<>
            <div className='toolbar'>

                <div className={`toolbar-button ${this.state.view == "reports" ? "selected" : ""} `} onClick={this.toggleReportsView} >
                    Reports <span className="arrow"></span>
                </div>

                {/* <div className="toolbar-button" onClick={() => this.setState({ dialog: 'precautions' })} >
                    Precautions <span className="arrow"></span>
                </div> */}

                {/* <div className={`toolbar-button ${this.state.view == "all" ? "selected" : ""} `} onClick={() => this.setState({ view: 'all' })} >
                    All <span className="arrow"></span>
                </div> */}

            </div>

            {
                this.state.view == "all" ?

                    <div className='data-section'>

                        <div className='stats stat-local'>
                            <div className='stats-header'>
                                <div className='dt'>

                                </div>
                            </div>
                            <div className='stat screened'>
                                <div className='metric'>{screened}</div>
                                <div className='title'>screened</div>
                            </div>
                            <div className='stat employees'>
                                <div className='metric'>{employees}</div>
                                <div className='title'>Expected</div>
                            </div>
                            <div className='stat oranges'>
                                <div className='metric'>{oranges}</div>
                                <div className='title'>oranges</div>
                            </div>
                        </div>

                        <div className='map local-map'>
                            <div className='map-widget'>
                                <div className='filters'>
                                    {/* <div onClick={this.setMapFilter.bind(this, 'screened')} className={(this.state.mapFilter == 'screened' ? 'set' : '') + ' switch screened'}><span className="icon"></span> screened</div>
                            <div onClick={this.setMapFilter.bind(this, 'employees')} className={(this.state.mapFilter == 'employees' ? 'set' : '') + ' switch employees'}><span className="icon"></span>Expected</div>
                            <div onClick={this.setMapFilter.bind(this, 'oranges')} className={(this.state.mapFilter == 'oranges' ? 'set' : '') + ' switch oranges'}><span className="icon"></span>oranges</div> */}
                                </div>

                                <MapWidget items={this.state.data} />
                            </div>
                        </div>

                        <div className='data-list-container local-list'>
                            <div className='data-list'>
                                <div className='header'>
                                    <div className='title local-list'>
                                        <span className="arrow"></span>
                                Today
                            </div>
                                    <div className='filters'>
                                        <input type="text" name="search" className="search" placeholder="search by name or id" value={this.state.searchText} onChange={(event) => this.onSearch(event)} />
                                        <div onClick={this.setSorting.bind(this, 'starred')} className={(this.state.sorting == 'starred' ? 'set' : '') + ' switch starred'}><span className="icon star"></span>starred</div>
                                        <div onClick={this.setSorting.bind(this, 'all')} className={(this.state.sorting == 'all' ? 'set' : '') + ' switch all'}>All {/* <span className="icon arrow"></span> */} </div>

                                    </div>
                                </div>
                                <ListWidget sorting={this.state.sorting} searchText={this.state.searchText} items={this.state.data} toggleStarred={this.toggleItemStarred} selected={this.state.selected} onSelectItem={this.onSelectItem} />
                                <div className='footer'>
                                    <div className='tip'>Learn more about this dashboard</div>
                                    <div className='action' onClick={this.props.renderInfo}>Info</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Reports apiUrl={this.props.apiUrl} apiKey={this.props.apiKey} />
            }

            <div className={`bottom-bar`} >
                {
                    this.state.dialog == "scann" ?
                        <div className={`qr-code-holder`} >
                            <div className="qr-code-box" >
                                <div className="header">
                                    <div className="closeButton" onClick={() => this.setState({ dialog: "" })}></div>
                                </div>
                                <img src="https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/qrcodes/qr-lobby.png" alt="qr-code" className="qr-code-image" />

                                <p>Scan to start screening</p>
                                <h3 onClick={() => this.setState({ dialog: 'scan-dialog' })}>new screening</h3>
                            </div>
                            <img src="https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/images/footer-hover.svg" alt="qr-code-button" className={`qr-code-handle`} />
                        </div>

                        :
                        <div className="scanning-button" >
                            <img src="https://s3.amazonaws.com/ecyber.public/lucyinthesky.io/heal/images/footer-icon.svg" alt="qr-code-button" className={``} onClick={() => this.setState({ dialog: "scann" })} />
                        </div>
                }
            </div>

            {dialog}

            <div className="message-container">
                {
                    this.state.newItems.map((item, key) => this.renderNotification(item, key))
                }
            </div>


        </>);
    }
}

export default LocalDashboard;