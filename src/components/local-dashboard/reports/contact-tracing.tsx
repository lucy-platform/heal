import * as React from 'react';

declare const window: any;

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

interface IProps {
    apiUrl: string,
    apiKey: string,
    goBack: () => void;
}

interface IState {
    searchText: string,
    tempSearchText: string
    searchResult: IEmployeeDetails[]
}

interface ISearchResultProps {
    apiUrl: string,
    apiKey: string,
    items: IEmployeeDetails[],
    goBack: () => void,
    searchText: string
}

interface ITracing {
    location: string,
    time: string,
    people: IEmployeeDetails[]
}

interface ISearchResultState {
    selected: IEmployeeDetails,
    tracingDetails: ITracing[]
}

class SearchResult extends React.Component<ISearchResultProps, ISearchResultState>{


    constructor(props: ISearchResultProps) {
        super(props);

        this.state = {
            selected: null,
            tracingDetails: []
        }

        this.onScroll = this.onScroll.bind(this);
    }

    componentDidUpdate(prevProps: ISearchResultProps) {
        if (prevProps.searchText.length != this.props.searchText.length) {
            this.setState({ selected: null });
        }

        this.onScroll();
    }

    getTracingDetails(item: IEmployeeDetails) {
        this.setState({ selected: item });

        // get tracing 
        fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/reports/contact-tracing", {
            method: 'GET',
            headers: {
                'Authorization': 'APIKEY ' + this.props.apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ tracingDetails: res });
            })
            .catch(err => {
                console.log(err);

                throw err;
            })
    }

    renderItems(item: IEmployeeDetails, key: number) {
        console.log(item);
        let temperatue = null;
        if (item.temperature !== null && item.temperature !== "") {
            temperatue = item.temperature;
        }

        return (
            <div className={`result-item`} key={key}>
                <div className={`column status ${item.status == null ? "" : item.status}`}>

                </div>
                <div className={`column name`}>
                    {item.name}
                    {
                        temperatue == null ? "" : <span className={`temp ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}`}>{temperatue} </span>
                    }

                </div>
                <div className={`column temperature`}>
                    {
                        temperatue == null ? "" : <span className={`temp ${item.temperature != null ? item.temperature !== "" ? item.tempunit : "" : ""}`}>{temperatue} </span>
                    }
                </div>
                <div className={`column details`}>
                    <span className="time">08.00 AM {item.location == null ? "" : item.location}</span>
                    <span className="connector"></span>
                    <span className="contacted">Contacted "Jamie Thompson"</span>
                </div>
                <div className={`column trace`}>
                    <div className="trace-button" onClick={() => this.getTracingDetails(item)}>
                        Trace
                    </div>
                </div>
                <div className={`column star`}></div>
                <div className={`column count`}>
                    08 others
                </div>
            </div>
        );
    }

    renderSearchResult() {
        return <>
            <div className={`back-button-container`}>
                <div className="back-button" onClick={() => this.props.goBack()}>Back to search</div>
            </div>
            <div className="search-result-container">
                {
                    this.props.items.length > 0 ?
                        this.props.items.map((item, key) => this.renderItems(item, key))
                        :
                        <div className="no-result">No record found</div>
                }
            </div>
        </>;
    }


    renderEmployeeDetails(employ: IEmployeeDetails, key: number) {

        return (
            <div className="item" key={key}>
                <div className="name">{employ.name}</div>
                <div className="other">
                    <span className="email">{employ.email}</span>
                    <span className="tel">{employ.contactnumber}</span>

                    {/* <span className="star"></span> */}
                </div>
            </div>
        );

    }
    renderTracingDetails(item: ITracing, key: number) {

        let header = <div className="header">
            {/* <span className="star"></span> */}
        </div>;

        if (key == 0) {
            header = <>
                <div className="header">
                    <span className="email">{this.state.selected.email}</span>
                    <span className="tel">{this.state.selected.contactnumber}</span>

                    {/* <span className="star"></span> */}
                </div>;

                <div className="sub-header">
                    <div className="name">{this.state.selected.name}</div>
                    <div className="temperature celsius">{this.state.selected.temperature}</div>
                </div>
            </>
        }

        return (
            <div className="details-block" key={key} id={`tracing-block-${key}`} >

                {header}

                <div className="details">
                    <div className="title">{item.time}  {item.location}</div>

                    {
                        item.people.map((emp, key) => this.renderEmployeeDetails(emp, key))
                    }

                </div>


            </div>
        );
    }

    renderTracingNavItem(item: ITracing, key: number) {

        return (
            <a className="nav-item" id={`nav-item-${key}`} key={key} href={`#tracing-block-${key}`} >
                {item.time} {item.location}
            </a>
        );
    }

    onScroll() {

        for (let i = 0; i < this.state.tracingDetails.length; i++) {
            let element = document.getElementById("tracing-block-" + i);
            let inView = this.isInView(element);

            console.log("tracing-block-" + i + " :: " + inView);


            if (inView) {
                // remove active class
                let navItems = document.getElementsByClassName("nav-item");
                for (let j = 0; j < navItems.length; j++) {
                    navItems[j].classList.remove("active");
                }

                // add active class
                document.getElementById("nav-item-" + i).classList.add("active");
                break;
            }
        }
    }

    private isInView = (element: HTMLElement) => {

        if (!element) {
            return false;
        }
        const offset = 20;
        const rect = element.getBoundingClientRect();

        return rect.top >= 0 - offset && rect.bottom <= window.innerHeight + offset;
    };

    renderTracing() {
        return <>
            <div className={`back-button-container`}>
                <div className="back-button" onClick={() => this.setState({ selected: null })}>Back to search results</div>
            </div>
            <div className="tracing-container">
                <div className="tracing-details" id="tracing-details" onScroll={this.onScroll}>

                    {
                        this.state.tracingDetails.map((item, key) => this.renderTracingDetails(item, key))
                    }

                </div>
                <div className="tracing-nav">
                    {
                        this.state.tracingDetails.map((item, key) => this.renderTracingNavItem(item, key))
                    }
                </div>
            </div>
        </>;
    }

    render() {


        return (<>

            {
                this.state.selected == null ?
                    this.renderSearchResult()
                    :
                    this.renderTracing()
            }


        </>);
    }
}

class ContactTracing extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);

        this.state = {
            searchText: "",
            tempSearchText: "",
            searchResult: []
        }

        this.onClickSearchbutton = this.onClickSearchbutton.bind(this);
        this.showSearchView = this.showSearchView.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
        this.searchUsers = this.searchUsers.bind(this);

    }



    onKeyPress(event: React.KeyboardEvent) {
        if (event.keyCode == 13) {
            this.onClickSearchbutton();
        }
    }

    onClickSearchbutton() {
        let tempSearchText = this.state.tempSearchText;
        this.setState({ searchText: tempSearchText }, this.searchUsers);
    }

    searchUsers() {

        let _data = JSON.stringify({
            searchtext: this.state.searchText
        });
        fetch(this.props.apiUrl + "/Lucy/SituationalAwareness/users/search", {
            method: 'POST',
            headers: {
                'Authorization': 'APIKEY ' + this.props.apiKey,
                'Content-Type': 'application/json'
            },
            body: _data
        })
            .then(res => res.json())
            .then(res => {
                this.setState({ searchResult: res });
            })
            .catch(err => {
                console.log(err);
                throw err;
            });
    }

    showSearchView() {
        this.setState({ searchText: "" }, this.searchUsers);
    }

    render() {

        let searchBoxClass = "search-box";
        if (this.state.searchText.length > 0 || this.state.tempSearchText.length > 0) {
            searchBoxClass += " filled";
        }

        let Items: IEmployeeDetails[] = [];

        return (

            <div className="report-section">
                <div className="report-container">

                    <div className="header">
                        <div className="title"><span className={`arrow`}></span>Contact Tracking</div>

                        <div className="last-updated">
                            {
                                this.state.searchText.length > 0 ?
                                    <><i>Showing Results for&nbsp;&nbsp;</i> <span>"{this.state.searchText}"</span></>
                                    :
                                    ""
                            }

                        </div>

                        <div className="filters">
                            <div className={searchBoxClass}>
                                <input type="text" className={`search `} placeholder="search by name or email"
                                    value={this.state.searchText}
                                    onChange={event => { this.setState({ searchText: event.target.value }, this.searchUsers) }}
                                />
                                <span className="close-button" onClick={() => this.setState({ searchText: "" }, this.searchUsers)}></span>
                            </div>
                        </div>

                    </div>

                    <div className="body">

                        <div className="contact-tracing-block">

                            {
                                this.state.searchText.length > 0 ?
                                    <SearchResult
                                        searchText={this.state.searchText}
                                        items={this.state.searchResult}
                                        apiUrl={this.props.apiUrl}
                                        apiKey={this.props.apiKey}
                                        goBack={this.showSearchView}
                                    />
                                    :
                                    <>
                                        <div className={`back-button-container`}>
                                            <div className="back-button" onClick={() => this.props.goBack()}>Reports Home</div>
                                        </div>
                                        <div className={searchBoxClass}>
                                            <input type="text" name="search" className="search" placeholder="search by name or email"
                                                value={this.state.tempSearchText}
                                                onChange={(event) => { this.setState({ tempSearchText: event.target.value }) }}
                                                onKeyDown={(event) => this.onKeyPress(event)}
                                            />
                                            <span className={`search-button`} onClick={this.onClickSearchbutton} ></span>
                                        </div>
                                    </>
                            }
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ContactTracing;