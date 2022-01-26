
{  /*  React Package */ }
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ScrollToTop from 'react-router-scroll-top';

{  /*  Templates */  }
import { Welcome , AddChannel } from './templates';

{  /*  Components */  }
import { Navigation, Footer } from './components';

export default function Root() {

        return (
                <Router>
                        <ScrollToTop>
                                <Navigation/>
                                        <Switch>
                                                <Route exact  path="/"  component={Welcome} />

                                                <Route path="/nowy-kanal"  component={AddChannel} />
                                        </Switch>
                                <Footer />
                        </ScrollToTop>
                </Router>
        );
}
