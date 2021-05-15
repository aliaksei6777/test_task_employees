import React from "react";
import {Switch, Redirect, Route} from "react-router-dom";
import {Main} from "../../pages/Main/Main";
import {Employees} from "../../pages/Employees/Employees";


function Routes() {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={'/Main'}/>}/>
                <Route path={'/Main'} render={() => <Main/>}/>
                <Route path={'/Employees'} render={() => <Employees/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
