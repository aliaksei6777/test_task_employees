import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import {Main} from "../main/Main";
import {Employees} from "../employees/Employees";


function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={'/main'}/>}/>
                <Route path={'/main'} render={() => <Main/>}/>
                <Route path={'/employees'} render={() => <Employees/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
