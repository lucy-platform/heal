import * as React from 'react';

function statusName(status:string) {
    switch(status) {
        case 'office': return 'Checked-In';
        case 'remote': return 'Remote';
        case 'leave': return 'On Leave';
        case 'unknown': return 'Not Reported';
        default: return status;
    }
}
interface IEmployeeStatusProps {
    apiUrl: string,
    apiKey: string,
    goBack: () => void;
}

interface IEmployee {
    name: string;
    status: string;
}
interface IEmployeeStatusState {
    searchText: string;
    tempSearchText: string;
    mode: '' | 'office' | 'remote' | 'leave' | 'search'|'unknown';
    loadingStats:boolean;
    loadingUsers:boolean;
    officeCount:number;
    leaveCount:number;
    remoteCount:number;
    unknownCount:number;
    users:IEmployee[];

}
export class EmployeeStatus extends React.Component<IEmployeeStatusProps, IEmployeeStatusState> {
    constructor(props: IEmployeeStatusProps) {
        super(props);
        this.state = {
            searchText:'',
            tempSearchText:'',
            mode:'',
            loadingStats:false,
            leaveCount:0,
            remoteCount:0,
            officeCount:0,
            unknownCount:0,
            loadingUsers:false,
            users:[],
        }
    }

    componentDidMount() {
        this.loadStats().then(_ => { }).catch(e => console.error(e));
    }

    async setStateAsync(state: any) {
        return new Promise((ok, nope) => {
            this.setState(state, () => ok());
        });
    }
    async loadStats() {
        await this.setStateAsync({ loadingStats: true });
        let response = await fetch(this.props.apiUrl + '/Lucy/UserStatus/stats', {
            method: 'GET',
            headers: {
                'Authorization': `APIKEY ${this.props.apiKey}`
            }
        });
        let json = await response.json();
        this.setState({ loadingStats: false, officeCount: json.office, remoteCount: json.remote, leaveCount: json.leave,unknownCount:json.unknown });
    }
    async loadUsers(mode:'office'|'remote'|'leave'|'unknown') {
        await this.setStateAsync({loadingUsers:true});
        let response= await fetch(this.props.apiUrl + `/Lucy/UserStatus/users?mode=${mode}`,{
            
            method:'GET',
            headers:{
                'Authorization':`APIKEY ${this.props.apiKey}`
            }
        });
        let json = await response.json();
        await this.setStateAsync({loadingUsers:false,users:json});
    }

    showUsers(type:'office'|'remote'|'leave'|'unknown') {
        this.setState({mode:type},()=>{
            this.loadUsers(type).then(_ => {});
        });
    }
    renderStats() {
        let leaveCount: string = this.state.leaveCount + '';
        let officeCount: string = this.state.officeCount + '';
        let remoteCount: string = this.state.remoteCount + '';
        let unknownCount: string = this.state.unknownCount + '';

        if (this.state.loadingStats) {
            leaveCount = '...';
            remoteCount = '...';
            officeCount = '...';
            unknownCount = '...';
        }
        return (<>
            <div className={`back-button-container`}>
                <div className="back-button" onClick={() => this.props.goBack()}>Reports Home</div>
            </div>

            <div className='e-stats'>
                <div onClick={this.showUsers.bind(this, 'office')} className='stat office'>
                    <div className='bg' />
                    <div className='title'>Office</div>
                    <div className='value'>{officeCount}</div>
                </div>
                <div onClick={this.showUsers.bind(this, 'remote')} className='stat remote'>
                    <div className='bg' />
                    <div className='title'>Remote</div>
                    <div className='value'>{remoteCount}</div>
                </div>
                <div onClick={this.showUsers.bind(this, 'leave')} className='stat leave'>
                    <div className='bg' />
                    <div className='title'>Leave</div>
                    <div className='value'>{leaveCount}</div>
                </div>
                <div onClick={this.showUsers.bind(this, 'unknown')} className='stat unknown'>
                    <div className='bg' />
                    <div className='title'>Not Reported</div>
                    <div className='value'>{unknownCount}</div>
                </div>
            </div>
        </>);
    }
    renderUser(user:IEmployee, key:number) {
        return <div className={'e-user ' + user.status} key={key}>
            <div className='title'>{user.name}</div>
            <div className='status'>{statusName(user.status)}</div>
        </div>;
    }
    renderFilteredUsers() {
        let users = this.state.users;
        return <>
        <div className={`back-button-container`}>
            <div className="back-button" onClick={() => this.setState({mode:''})}>Back</div>
        </div>
        <div className="e-users search-result-container">
            {
                this.state.loadingUsers?<div className='loading'>Loading</div>:null
            }
            {
                users.length > 0 ?
                    users.map((item, key) => this.renderUser(item, key))
                    :
                    <div className="no-result">No Users</div>
            }
        </div>
    </>;

    }
    render() {

        return (
            <div className="report-section">
                <div className="report-container">

                    <div className="header">
                        <div className="title"><span className={`arrow`}></span>Employee Status</div>
                    </div>

                    <div className="body">

                        {
                            this.state.mode == "" ? this.renderStats() : this.renderFilteredUsers()
                        }

                    </div>

                </div>
            </div>

        );
    }
}